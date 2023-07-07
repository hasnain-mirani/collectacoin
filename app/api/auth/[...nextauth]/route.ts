import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import { SERVER_BASE_URL } from "@/constants";
import axios from "axios";
import { Account, Awaitable, Profile, User } from "next-auth";
import { JWT } from "next-auth/jwt";


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "email", type: "text", placeholder: "example@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try{
          const res = await axios.post(SERVER_BASE_URL+"/auth/login", {      
            email: credentials?.email,
            password: credentials?.password
      })
          let user = res.data;
          if (user) {
            return user;
          } else {
            return null;

          }
        }catch(err:any){
          throw new Error(err)
        }

      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID || "",
      clientSecret: process.env.FACEBOOK_SECRET || "",
    }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
  ],
  callbacks: {

    // async jwt({ token, user, trigger, session }) {
    //   if (trigger === "update") {
    //     return { ...token, ...session.user };
    //   }
    //   return { ...token, ...user };
    // },
    async  jwt({
      token,
      user,
      account,
    }: {
      token: JWT;
      user?: any ;
      account?: Account | null;
    }): Promise<JWT> {
      console.log(token);
      console.log(user);
      console.log(account);
      if (account && (account.provider === "google" || account.provider === "facebook")) {
        let res;
        switch(account.provider){
          case "facebook":
            res = await axios.post(SERVER_BASE_URL+"/auth/token", {facebookId: token.sub});

            if (res.data) return { ...res.data, ...token };
            break;
            case "google": 
           res = await axios.post(SERVER_BASE_URL+"/auth/token", {googleId: token.sub});
            if (res.data) return { ...res.data, ...token };
            break;
        }
      }
       return {...token, ...user};
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
});

export { handler as GET, handler as POST };

async function refreshAccessToken(tokenObject:any) {
  try {
      // Get a new set of tokens with a refreshToken
      const tokenResponse = await axios.post(SERVER_BASE_URL + 'auth/token', {
          token: tokenObject.refreshToken
      });

      return {
          ...tokenObject,
          accessToken: tokenResponse.data.accessToken,
          accessTokenExpiry: tokenResponse.data.accessTokenExpiry,
          refreshToken: tokenResponse.data.refreshToken
      }
  } catch (error) {
      return {
          ...tokenObject,
          error: "RefreshAccessTokenError",
      }
  }
}

