import React, { Suspense } from "react";
import LoginPage from ".";

const page = () => {
  return (
    <Suspense>
      <LoginPage />
    </Suspense>
  );
};

export default page;
