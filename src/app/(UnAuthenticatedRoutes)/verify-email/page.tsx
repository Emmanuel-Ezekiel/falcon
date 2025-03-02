import React, { Suspense } from "react";
import VerifyEmailPage from ".";

const page = () => {
  return (
    <Suspense>
      <VerifyEmailPage />
    </Suspense>
  );
};

export default page;
