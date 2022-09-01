import React from "react";

export const LoginContext = React.createContext();

export function LoginContextProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const token = localStorage.getItem("token");
  const checkUser = async (token) => {
    try {
      if (token) {
        let res = await fetch("http://localhost:8080/verifytoken", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        });
        let data = await res.json();
        if (data.token) {
          setUser(data.token);
          return;
        }
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    checkUser(token);
  }, [token]);

  return (
    <LoginContext.Provider value={{ user, setUser }}>
      {children}
    </LoginContext.Provider>
  );
}
