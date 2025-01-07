import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = { name: "manikmaity", id: "1", email: "manik@gmail.com" };
        return user;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
