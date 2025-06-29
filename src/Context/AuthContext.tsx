import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType{
    token: string | null;
    login :(token:string)=>void;
    logout :()=>void;
}

 const AuthContext=createContext<AuthContextType | null>(null);

export const AuthProvider:React.FC<{children:React.ReactNode}>=({children})=>{

    const [token,setToken]=useState<string | null>(localStorage.getItem("token"));

    const login=(newToken:string)=>{{
        localStorage.setItem("token",newToken);
        setToken(newToken);
    }}

    const logout=()=>{
        localStorage.removeItem("token"),
        setToken(null);

    }

    useEffect(()=>{
        const storedToken=localStorage.getItem("token");
        if(storedToken) setToken(storedToken);

    },[])


    return (
        <AuthContext.Provider value={{token,login,logout}}>
            {children}
        </AuthContext.Provider>

    );

}


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};