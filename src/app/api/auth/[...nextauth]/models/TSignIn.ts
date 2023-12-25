import { Account, Profile, Session } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import { CredentialInput } from "next-auth/providers/credentials";
import { CustomUser } from "./CustomUser";

export type TSignIn = {
  user?: AdapterUser & CustomUser;
  credentials?: Record<string, CredentialInput>;
  account?: Account;
  session?: Session & {
    user?: AdapterUser & CustomUser;
  };
  profile?: Profile;
  token?: JWT;
  trigger?: "signIn" | "signUp" | "update" | undefined;
};
