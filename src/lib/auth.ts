import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import { prismaClient } from "./prisma";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prismaClient),
  providers: [
    GoogleProvider({
      clientId: '233592840068-7p7sv1jj83sl2nt0tq0b32mnl8416ane.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
};
