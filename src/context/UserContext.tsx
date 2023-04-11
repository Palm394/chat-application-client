import { User } from "@/type/User";
import { Dispatch, SetStateAction, createContext } from "react";

type IUserContext = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
} | null;

export const UserContext = createContext<IUserContext>(null)
