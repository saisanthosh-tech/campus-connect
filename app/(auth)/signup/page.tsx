// "use client"; // <--- Necessary for handling form inputs

// import { useState } from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Mail, Lock, User, Hash, Loader2 } from "lucide-react";
// import { supabase } from "@/lib/supabase"; // Import your connection
// import { useRouter } from "next/navigation";

// export default function SignupPage() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     collegeId: "",
//     password: "",
//   });
//   const [error, setError] = useState<string | null>(null);

//   const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       // 1. Create User in Supabase Auth
//       const { data, error: authError } = await supabase.auth.signUp({
//         email: form.email,
//         password: form.password,
//         options: {
//           data: {
//             full_name: form.fullName,
//             college_id: form.collegeId,
//           },
//         },
//       });

//       if (authError) throw authError;

//       // 2. Success! Redirect to login (or dashboard)
//       alert("Account created successfully!");
//       router.push("/login"); // Send them to login page

//     } catch (err: any) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
//       <div className="space-y-2 text-center">
//         <h1 className="text-3xl font-bold tracking-tight text-gray-900">Create Account</h1>
//         <p className="text-gray-500">Join CampusConnect to host & participate</p>
//       </div>

//       <form onSubmit={handleSignup} className="space-y-4">
//         {/* Full Name */}
//         <div className="space-y-2">
//           <label className="text-sm font-medium">Full Name</label>
//           <div className="relative">
//             <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//             <input
//               required
//               type="text"
//               placeholder="Santhosh"
//               value={form.fullName}
//               onChange={(e) => setForm({ ...form, fullName: e.target.value })}
//               className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 pl-10 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
//             />
//           </div>
//         </div>

//         {/* Email */}
//         <div className="space-y-2">
//           <label className="text-sm font-medium">College Email</label>
//           <div className="relative">
//             <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//             <input
//               required
//               type="email"
//               placeholder="santhosh@college.edu"
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//               className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 pl-10 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
//             />
//           </div>
//         </div>

//          {/* College ID */}
//          <div className="space-y-2">
//           <label className="text-sm font-medium">Register Number / ID</label>
//           <div className="relative">
//             <Hash className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//             <input
//               required
//               type="text"
//               placeholder="e.g. 21CS045"
//               value={form.collegeId}
//               onChange={(e) => setForm({ ...form, collegeId: e.target.value })}
//               className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 pl-10 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
//             />
//           </div>
//         </div>

//         {/* Password */}
//         <div className="space-y-2">
//           <label className="text-sm font-medium">Password</label>
//           <div className="relative">
//             <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//             <input
//               required
//               type="password"
//               placeholder="••••••••"
//               value={form.password}
//               onChange={(e) => setForm({ ...form, password: e.target.value })}
//               className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 pl-10 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
//             />
//           </div>
//         </div>

//         {/* Error Message Display */}
//         {error && <p className="text-sm text-red-600 text-center">{error}</p>}

//         <Button disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg">
//           {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Create Account"}
//         </Button>
//       </form>

//       <p className="px-8 text-center text-sm text-gray-500">
//         Already have an account?{" "}
//         <Link href="/login" className="text-blue-600 hover:underline font-semibold">
//           Sign in
//         </Link>
//       </p>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Lock, User, Hash, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    collegeId: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error: authError } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: {
            full_name: form.fullName,
            college_id: form.collegeId,
          },
        },
      });

      if (authError) throw authError;

      alert("Account created successfully!");
      router.push("/login");

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
      
      <div className="space-y-2 text-center">
        {/* Force Title to be Black */}
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Create Account</h1>
        <p className="text-gray-500">Join CampusConnect to host & participate</p>
      </div>

      <form onSubmit={handleSignup} className="space-y-4">
        
        {/* Full Name */}
        <div className="space-y-2">
          {/* ADDED: text-gray-900 to label */}
          <label className="text-sm font-bold text-gray-900">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <input
              required
              type="text"
              placeholder="Santhosh"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              // ADDED: text-gray-900 to input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 pl-10 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-900">College Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <input
              required
              type="email"
              placeholder="santhosh@college.edu"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 pl-10 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            />
          </div>
        </div>

         {/* College ID */}
         <div className="space-y-2">
          <label className="text-sm font-bold text-gray-900">Register Number / ID</label>
          <div className="relative">
            <Hash className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <input
              required
              type="text"
              placeholder="e.g. 21CS045"
              value={form.collegeId}
              onChange={(e) => setForm({ ...form, collegeId: e.target.value })}
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 pl-10 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-900">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <input
              required
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 pl-10 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            />
          </div>
        </div>

        {error && <p className="text-sm text-red-600 text-center">{error}</p>}

        <Button disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg">
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Create Account"}
        </Button>
      </form>

      <p className="px-8 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600 hover:underline font-semibold">
          Sign in
        </Link>
      </p>
    </div>
  );
}