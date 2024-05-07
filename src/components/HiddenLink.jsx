
import { useAuth } from "../UserContext";

export const ShowOnLogin = ({ children }) => {
    const {isLoggedIn}= useAuth()

  if (isLoggedIn) {
    return <> {children}</>;
  }
  return null;
};

export const ShowOnLogout = ({ children }) => {
    const {isLoggedIn}= useAuth()

  if (!isLoggedIn) {
    return <> {children}</>;
  }
  return null;
};

