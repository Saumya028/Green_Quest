import NextAuth, { User as NextAuthUser, Account } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";


import { dbConnect } from './dbConnect';
import { User } from './models/User';

export const authOptions = {
    providers: [
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID!,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        // }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async signIn({ user, account }: { user: NextAuthUser; account?: Account | null }) {
            await dbConnect();
            if (!user.email) return false;
            // Upsert user in MongoDB
            await User.findOneAndUpdate(
                { email: user.email },
                {
                    $set: {
                        name: user.name,
                        email: user.email,
                        image: user.image,
                        provider: account?.provider,
                        providerId: account?.providerAccountId,
                    },
                },
                { upsert: true, new: true, setDefaultsOnInsert: true }
            );
            return true;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler };