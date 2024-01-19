import Header from "@/components/Header";
import React from "react";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default LoginLayout;
