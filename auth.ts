import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

import { _db } from "./database/db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile?.email) {
        const email = profile.email.toLowerCase();

        let user = await _db.user.findUnique({
          where: { email },
        });

        if (!user) {
          user = await _db.user.create({
            data: {
              email,
              lastLogin: new Date(),
            },
          });
        } else {
          await _db.user.update({
            where: { id: user.id },
            data: { lastLogin: new Date() },
          });
        }

        token.userId = user.id;
      }

      return token;
    },
    async session({ session, token }) {
      if (token?.userId) {
        (session as any).userId = token.userId;
      }
      return session;
    },
  },
});
