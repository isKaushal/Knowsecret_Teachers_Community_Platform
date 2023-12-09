import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

import Admin from "../../../models/admin";
import dbConnect from "../../../config/dbConnect";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        dbConnect();

        const { password, email } = credentials;
        const user = await Admin.findOne({ email: email });

        const passwordCompare = await bcrypt.compare(password, user.password);

        if (!user) {
          return { msg: "https://testntrack.com/" };
        }

        if (passwordCompare === true) {
          return user;
        }
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
