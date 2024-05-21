import connectDB from "@/utils/connectDB";
import User from "@/libs/models/User";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          await connectDB();
          const user = await User.findOne({ email: credentials?.email });
          if (!user) {
            throw new Error("User not found");
          }
          const passwordMatch = await bcrypt.compare(credentials?.password, user.password);
          if (credentials.email === user.email && passwordMatch) {
            return {
              id: user._id,
              firstname: user.firstname,
              lastname: user.lastname,
              email: user.email,
            };
          } else {
            throw new Error("Invalid credentials");
          }
        } catch (err) {
          console.error(err);
          throw new Error("Authentication failed...");
        }
      }
    })
  ],
  jwt: {
    encryption: true,
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
        token.firstname = user.firstname;
        token.lastname = user.lastname;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.userId,
          firstname: token.firstname,
          lastname: token.lastname,
          email: token.email,
        };
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  }
};

const handler = NextAuth(authOptions);
export default handler;

export const GET = (req, res) => handler(req, res);
export const POST = (req, res) => handler(req, res);
