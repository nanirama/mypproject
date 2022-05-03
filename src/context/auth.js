import React, { createContext, useEffect, useState, useContext } from "react";
import { resolveRefreshToken } from "../HOC/auth";

const AuthContext = createContext(null);

const AuthProvider = (props) => {
  const [accessToken, setAccessToken] = useState();
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const getToken = async () => {
      setAccessToken(await resolveRefreshToken());
      isLoading(false);
    };
    getToken();
  });

  if (loading) {
    return <div></div>;
  }
  return <AuthContext.Provider value={{ accessToken }} {...props} />;
};

export function useAuth() {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("You must be authenticated");
  }

  return auth;
}

export { AuthProvider, AuthContext };
