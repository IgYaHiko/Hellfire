import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from './db.js'
import { deviceAuthorization } from "better-auth/plugins"; 
export const auth = betterAuth({
     database: prismaAdapter(prisma, {
         provider: 'postgresql',
     }),
     basePath: "/api/auth",
     trustedOrigins: ['http://localhost:3002'],
      plugins: [
   deviceAuthorization({ 
      verificationUri: "/device", 
    }), 
  ],
     socialProviders: {
         github: { 
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
         },
         google: {
             clientId: process.env.GOOGLE_CLIENT_ID,
             clientSecret: process.env.GOOGLE_CLIENT_SECRET
         }
     },
       logger: {
        level: "debug"
    }
})