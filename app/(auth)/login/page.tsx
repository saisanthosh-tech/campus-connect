// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Mail, Lock, Loader2 } from "lucide-react";
// import { supabase } from "@/lib/supabase";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState<string | null>(null);

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const { error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//       });

//       if (error) throw error;

//       // Success!
//       router.push("/"); // Redirect to Home Page
//     } catch (err: any) {
//       setError(err.message); // e.g., "Invalid login credentials"
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
//       <div className="space-y-2 text-center">
//         <h1 className="text-3xl font-bold tracking-tight text-gray-900">Welcome back</h1>
//         <p className="text-gray-500">Enter your credentials to access your account</p>
//       </div>

//       <form onSubmit={handleLogin} className="space-y-4">
//         <div className="space-y-2">
//           <label className="text-sm font-medium">Email</label>
//           <div className="relative">
//             <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//             <input
//               required
//               type="email"
//               placeholder="santhosh@college.edu"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 pl-10 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
//             />
//           </div>
//         </div>

//         <div className="space-y-2">
//           <label className="text-sm font-medium">Password</label>
//           <div className="relative">
//             <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//             <input
//               required
//               type="password"
//               placeholder="••••••••"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 pl-10 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
//             />
//           </div>
//         </div>

//         {error && <p className="text-sm text-red-600 text-center">{error}</p>}

//         <Button disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700">
//           {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Sign In"}
//         </Button>
//       </form>

//       {/* Divider and Footer remain the same... */}
//       <div className="relative my-4">
//         <div className="absolute inset-0 flex items-center">
//           <span className="w-full border-t border-gray-200" />
//         </div>
//         <div className="relative flex justify-center text-xs uppercase">
//           <span className="bg-white px-2 text-gray-500">Or continue with</span>
//         </div>
//       </div>
      
//       <Button variant="outline" className="w-full border-gray-200 hover:bg-gray-50">
//         Google
//       </Button>

//       <p className="px-8 text-center text-sm text-gray-500">
//         Don't have an account?{" "}
//         <Link href="/signup" className="text-blue-600 hover:underline font-semibold">
//           Sign up
//         </Link>
//       </p>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Lock, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      router.push("/");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="space-y-2 text-center">
        {/* ADDED: text-gray-900 for Title */}
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Welcome back</h1>
        <p className="text-gray-500">Enter your credentials to access your account</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        
        {/* Email Field */}
        <div className="space-y-2">
          {/* ADDED: text-gray-900 for Label */}
          <label className="text-sm font-bold text-gray-900">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <input
              required
              type="email"
              placeholder="santhosh@college.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // ADDED: text-gray-900 for Input Text
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 pl-10 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            {/* ADDED: text-gray-900 for Label */}
            <label className="text-sm font-bold text-gray-900">Password</label>
            <Link href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <input
              required
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // ADDED: text-gray-900 for Input Text
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 pl-10 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            />
          </div>
        </div>

        {error && <p className="text-sm text-red-600 text-center">{error}</p>}

        <Button disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700">
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Sign In"}
        </Button>
      </form>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-500">Or continue with</span>
        </div>
      </div>
      
      <Button variant="outline" className="w-full border-gray-200 hover:bg-gray-50 text-gray-900">
        Google
      </Button>

      <p className="px-8 text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <Link href="/signup" className="text-blue-600 hover:underline font-semibold">
          Sign up
        </Link>
      </p>
    </div>
  );
}