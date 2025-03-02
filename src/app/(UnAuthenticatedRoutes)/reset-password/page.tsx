import React, { Suspense } from "react";
import ResetPasswordPage from ".";

const page = () => {
  return (
    <Suspense fallback={null}>
      <ResetPasswordPage />
    </Suspense>
  );
};

export default page;
