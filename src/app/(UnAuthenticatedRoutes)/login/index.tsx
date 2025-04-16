// "use client";

// import type React from "react";
// import { useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import Link from "next/link";
// import { Loader2, Eye, EyeOff } from "lucide-react";
// import { useDispatch } from "react-redux";
// import { z } from "zod";
// import { toast } from "sonner";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import type { AppDispatch } from "@/redux/store";
// import { login } from "@/redux/slices/authSlice/authSlice";

// // Form validation schema
// const loginSchema = z.object({
//   email: z.string().email("Please enter a valid email address"),
//   password: z.string().min(1, "Password is required"),
// });

// type LoginFormData = z.infer<typeof loginSchema>;

// export default function LoginPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const dispatch = useDispatch<AppDispatch>();
//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [showPassword, setShowPassword] = useState(false);

//   // Get the redirect path from the URL
//   const from = searchParams.get("from") ?? "/dashboard";

//   async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     setLoading(true);
//     setErrors({});

//     const formData = new FormData(event.currentTarget);
//     const data: LoginFormData = {
//       email: formData.get("email") as string,
//       password: formData.get("password") as string,
//     };

//     // Validate form data
//     const result = loginSchema.safeParse(data);

//     if (!result.success) {
//       const formattedErrors: Record<string, string> = {};
//       result.error.issues.forEach((issue) => {
//         formattedErrors[issue.path[0] as string] = issue.message;
//       });
//       setErrors(formattedErrors);
//       setLoading(false);
//       toast.error("Please fix the errors in the form");
//       return;
//     }

//     try {
//       await dispatch(login(data)).unwrap();
//       toast.success("Login successful");
//       router.push(from);
//     } catch (err) {
//       if (err instanceof Error) {
//         toast.error(err.message || "An error occurred during login");
//         setErrors({ form: err.message || "An error occurred during login" });
//       } else {
//         toast.error("An error occurred during login");
//         setErrors({ form: "An error occurred during login" });
//       }
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="flex h-screen w-screen flex-col items-center justify-center">
//       <Card className="w-full max-w-lg">
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-2xl">Login</CardTitle>
//           <CardDescription>
//             Enter your email and password to login to your account
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={onSubmit} className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 className={errors.email ? "border-red-500" : ""}
//                 required
//               />
//               {errors.email && (
//                 <p className="text-xs text-red-500">{errors.email}</p>
//               )}
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <div className="relative">
//                 <Input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   className={errors.password ? "border-red-500 pr-10" : "pr-10"}
//                   required
//                 />
//                 <Button
//                   type="button"
//                   variant="ghost"
//                   size="icon"
//                   className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <Eye className="h-4 w-4" />
//                   ) : (
//                     <EyeOff className="h-4 w-4" />
//                   )}
//                   <span className="sr-only">
//                     {showPassword ? "Hide password" : "Show password"}
//                   </span>
//                 </Button>
//               </div>
//               {errors.password && (
//                 <p className="text-xs text-red-500">{errors.password}</p>
//               )}
//               <div className="text-right">
//                 <Link
//                   href="/forgot-password"
//                   className="text-sm text-primary underline"
//                 >
//                   Forgot password?
//                 </Link>
//               </div>
//             </div>
//             {errors.form && (
//               <p className="text-sm text-red-500">{errors.form}</p>
//             )}
//             <Button type="submit" className="w-full" disabled={loading}>
//               {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
//               Login
//             </Button>
//           </form>
//           <div className="mt-4 text-center text-sm">
//             Don&apos;t have an account?{" "}
//             <Link href="/register" className="text-primary underline">
//               Register
//             </Link>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

"use client";

import type React from "react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Loader2, Eye, EyeOff, Home } from "lucide-react";
import { useDispatch } from "react-redux";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { AppDispatch } from "@/redux/store";
import { login } from "@/redux/slices/authSlice/authSlice";

// Form validation schema
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);

  // Get the redirect path from the URL
  const from = searchParams.get("from") ?? "/dashboard";

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setErrors({});

    const formData = new FormData(event.currentTarget);
    const data: LoginFormData = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    // Validate form data
    const result = loginSchema.safeParse(data);

    if (!result.success) {
      const formattedErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        formattedErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(formattedErrors);
      setLoading(false);
      toast.error("Please fix the errors in the form");
      return;
    }

    try {
      await dispatch(login(data)).unwrap();
      toast.success("Login successful");
      router.push(from);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err, 'err')
        toast.error(err.message || "An error occurred during login");
        setErrors({ form: err.message || "An error occurred during login" });
      } else {
        toast.error("An error occurred during login");
        setErrors({ form: "An error occurred during login" });
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6eff9] bg-gradient-to-br from-[#ffffff] to-[#e6eff9]">
      <div className="w-full max-w-md p-8 mx-4 bg-white rounded-3xl shadow-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#080034] mb-4">
            <Home className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-semibold text-[#24262b]">DBMan</h1>
        </div>

        <h2 className="text-3xl font-bold text-center text-[#24262b] mb-2">
          Welcome to DBMan!
        </h2>
        <p className="text-center text-[#575757] mb-8">
          Join our platform to train or get trained.
          <br />
          Sign in or create an account to get started.
        </p>

        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#24262b]">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="koleolanre@gmail.com"
              className={`px-3 py-6 h-auto border border-[#d6d9dd] rounded-lg bg-[#e6eff9]/30 focus:ring-[#419ffd] ${
                errors.email ? "border-red-500" : ""
              }`}
              required
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#24262b]">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                className={`px-3 py-6 h-auto border border-[#d6d9dd] rounded-lg bg-[#e6eff9]/30 focus:ring-[#419ffd] ${
                  errors.password ? "border-red-500" : ""
                }`}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-[#575757]" />
                ) : (
                  <Eye className="w-5 h-5 text-[#575757]" />
                )}
                <span className="sr-only">
                  {showPassword ? "Hide password" : "Show password"}
                </span>
              </button>
            </div>
            <div className="flex justify-end items-end text-xs mt-1">
              <Link
                href="/forgot-password"
                className="text-[#ff0000] hover:underline"
              >
                Forgot Password
              </Link>
            </div>
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password}</p>
            )}
          </div>

          {errors.form && <p className="text-sm text-red-500">{errors.form}</p>}

          <Button
            type="submit"
            disabled={loading}
            className="w-full py-6 h-auto bg-black text-white font-medium rounded-full hover:bg-[#24262b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Log In
          </Button>
        </form>

        <p className="mt-6 text-center text-[#575757]">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-[#24262b] font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
