import Logo from "@/assets/icons/Logo";
import React from "react";

const AppLogo = () => {
  return (
    <div className="flex w-full items-center justify-center gap-3 mb-8">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#080034]">
        <Logo />
      </div>
      <h1 className="text-2xl font-semibold text-[#24262b]">DBMan</h1>
    </div>
  );
};

export default AppLogo;
