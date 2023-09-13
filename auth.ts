import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import type { NextAuthOptions as NextAuthConfig } from "next-auth"
import { getServerSession } from "next-auth"
import Google from "next-auth/providers/google"
declare module "next-auth/jwt" {
    interface JWT {
      /** The user's role. */
      userRole?: "user"
    }
  }
  
  export const config = {
    providers: [
        Google({ clientId: '571114705838-cd32ecupnvljjt51tma8fjsecbb524bd.apps.googleusercontent.com', clientSecret: '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' }),
    ],
    callbacks: {
      async jwt({ token }) {
        token.userRole = "user"
        console.log(token)
        return token
      },
    },
  } satisfies NextAuthConfig
  export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
    return getServerSession(...args, config)
  }