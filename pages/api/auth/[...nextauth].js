import connectDB from "@/utils/connectDB";
import User from "@/libs/models/User";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

let userAccount;
export const authOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "credentials", credentials: {},
            async authorize(credentials) {
                try {
                    await connectDB();
                    const user = await User.findOne({email: credentials?.email});
                    if(!user) {
                        throw new Error("User not found");
                    }
                    console.log(user);
                    const passwordMatch = await bcrypt.compare(credentials?.password, user.password);
                    if(credentials.email === user.email && passwordMatch) {
                        userAccount= {
                            userId: user._id,
                            firstname: user.firstname,
                            lastname: user.lastname,
                            email: user.email,
                            password: user.password
                        }
                        return userAccount;
                    }
                    else {
                        throw new Error("Invalid credentials");
                    }
                }
                catch(err){
                    console.error(err);
                    throw new Error("Authntication failed...");
                }
            }
        }),
    ],
    jwt: {
        encryption: true,
    },
    session: {
        strategy: "jwt",
        jwt: true,
    },
    callbacks: {
        async session(session){
            if(session){
                session.user= {
                    id: userAccount.userId,
                    firstname: userAccount.firstname,
                    lastname: userAccount.lastname,
                    email: userAccount.email,
                    password: userAccount.password,
                }
            }
            console.log(session.user);
            return session;
        },
        async signIn(user, account, profile){
            try {
                const token = jwt.sign({userID: user.id}, process.env.JWT_SECRET);
                const encodedToken = encodeURIComponent(token);
                const redirectUrl= `/?token=${encodedToken}`;
                return{
                    statusCode: 302,
                    headers: {
                        Location: redirectUrl,
                    },
                }
            }
            catch(err) {
                console.error(err);
                throw new Error("Failed to generate token..");
            }
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
        callBackUrl: "/"
    }
};
const handler = NextAuth(authOptions);
export default handler;
export const GET = (req, res) => handler.handleRequest(req, res, {...authOptions});
export const POST = (req, res) => handler.handleRequest(req, res, {...authOptions});
