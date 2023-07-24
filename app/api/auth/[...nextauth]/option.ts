    import type { NextAuthOptions } from "next-auth";
    import GoogleProvider from "next-auth/providers/google"
    import CredentialsProvider from "next-auth/providers/credentials";
    export const options:NextAuthOptions={
        providers:[
            GoogleProvider({
                clientId: process.env.GOOGLE_ID as string,
                clientSecret: process.env.GOOGLE_SECRET as string,
              }),
              CredentialsProvider({
                name:'Credentials',
                Credentials:{
                    username:{
                        label:'Username:',
                        type:'text',
                        placeholder:'place your name'
                    },
                },
                async authorize(Credentials){

                    try{
                        const res = await axios.post(SERVER_BASE_URL+"/user/signin", {      
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
              })
        ]
    }