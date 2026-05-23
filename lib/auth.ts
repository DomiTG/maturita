import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Admin login",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Heslo", type: "password" }
      },
      async authorize(credentials) {
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminEmail || !adminPassword) {
          return null;
        }

        if (
          credentials?.email === adminEmail &&
          credentials?.password === adminPassword
        ) {
          return {
            id: "admin",
            email: adminEmail,
            name: "Admin",
            role: "ADMIN"
          };
        }

        return null;
      }
    })
  ],
  pages: {
    signIn: "/admin"
  }
};
