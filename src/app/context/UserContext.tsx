"use client";

import { createContext, useContext } from "react";
import { userProfiles } from "../admin/profil/profil";

type UserContextType = {
  user: userProfiles;
};

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({
  user,
  children,
}: {
  user: userProfiles;
  children: React.ReactNode;
}) {
  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser harus dipakai di dalam UserProvider");
  }

  return context;
}