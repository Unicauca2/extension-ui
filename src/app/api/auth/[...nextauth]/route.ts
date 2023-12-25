import NextAuth, { SessionStrategy } from "next-auth";
import { JWT } from "next-auth/jwt";
import { TSignIn } from "./models/TSignIn";
import { getProviders } from "./services/Providers";
import { validateUser } from "./services/Validation";

const nextauth = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt" as SessionStrategy,
    maxAge: 3000,
  },
  providers: getProviders(),
  callbacks: {
    async signIn(params) {
      const { user, account } = params as TSignIn;

      const providers: { [key: string]: any } = {
        google: async () => {
          const email = user?.email as string;
          if (!email || !email.endsWith("@unicauca.edu.co")) {
            return "/signup?email=" + email;
          }

          const validatedUser = await validateUser({ email });

          if (!validatedUser) {
            return "/login?error=ERRLOGIN1";
          }

          user!.person = {
            idPerson: validatedUser.person.idPerson,
            identification: validatedUser.person.identification,
            username: validatedUser.person.username,
            fullName: validatedUser.person.fullName,
          };
          user!.coordinator = {
            id: validatedUser.coordinator?.id,
            program: validatedUser.coordinator?.program,
          };
          user!.students = validatedUser.students;

          return true;
        },
        "not-listed": () => false,
      };

      return providers[account?.provider || "not-listed"]();
    },
    async jwt(params) {
      const { token, user } = params as TSignIn;
      if (token && !token.id) {
        token!.id = user?.person.idPerson;
        token!.person = JSON.stringify(user?.person);
        token!.coordinator = JSON.stringify(user?.coordinator);
        token!.students = JSON.stringify(user?.students);
      }
      return token as JWT;
    },
    async session(params): Promise<any> {
      const { session, token } = params as unknown as TSignIn;
      session!.user!.person = JSON.parse(token?.person as string);
      session!.user!.coordinator = JSON.parse(token?.coordinator as string);
      session!.user!.students = JSON.parse(token?.students as string);
      return await Promise.resolve(session);
    },
  },
});

export { nextauth as GET, nextauth as POST };
