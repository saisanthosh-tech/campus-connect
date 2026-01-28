// // "use client";

// // import { useState } from "react";
// // import { Button } from "@/components/ui/button"; // Ensure this path matches your button location
// // import { X, Users, UserPlus, Copy, Check } from "lucide-react";

// // interface RegistrationModalProps {
// //   isOpen: boolean;
// //   onClose: () => void;
// //   eventTitle: string;
// // }

// // export default function RegistrationModal({ isOpen, onClose, eventTitle }: RegistrationModalProps) {
// //   const [step, setStep] = useState<"CHOICE" | "CREATE" | "JOIN" | "SUCCESS">("CHOICE");
// //   const [teamName, setTeamName] = useState("");
// //   const [joinCode, setJoinCode] = useState("");
// //   const [generatedCode, setGeneratedCode] = useState("");

// //   if (!isOpen) return null;

// //   // Mock Logic for Demo
// //   const handleCreateTeam = () => {
// //     // In real app: API call to create team
// //     const mockCode = `HACK-${Math.floor(1000 + Math.random() * 9000)}`;
// //     setGeneratedCode(mockCode);
// //     setStep("SUCCESS");
// //   };

// //   const handleJoinTeam = () => {
// //     // In real app: API call to validate code
// //     if (joinCode.length > 3) {
// //       setStep("SUCCESS");
// //     }
// //   };

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
// //       <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200">
        
// //         {/* Header */}
// //         <div className="bg-gray-50 px-6 py-4 border-b flex justify-between items-center">
// //           <h3 className="font-bold text-lg text-gray-800">Register for {eventTitle}</h3>
// //           <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
// //             <X size={20} />
// //           </button>
// //         </div>

// //         {/* Content Body */}
// //         <div className="p-6">
          
// //           {/* STEP 1: CHOICE */}
// //           {step === "CHOICE" && (
// //             <div className="space-y-4">
// //               <p className="text-gray-600 text-center mb-4">How would you like to participate?</p>
              
// //               <button 
// //                 onClick={() => setStep("CREATE")}
// //                 className="w-full flex items-center gap-4 p-4 border-2 border-gray-100 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition group"
// //               >
// //                 <div className="bg-blue-100 p-3 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
// //                   <UserPlus size={24} />
// //                 </div>
// //                 <div className="text-left">
// //                   <h4 className="font-bold text-gray-900">Create a Team</h4>
// //                   <p className="text-sm text-gray-500">I am the leader. I'll invite others.</p>
// //                 </div>
// //               </button>

// //               <button 
// //                 onClick={() => setStep("JOIN")}
// //                 className="w-full flex items-center gap-4 p-4 border-2 border-gray-100 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition group"
// //               >
// //                 <div className="bg-purple-100 p-3 rounded-full text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition">
// //                   <Users size={24} />
// //                 </div>
// //                 <div className="text-left">
// //                   <h4 className="font-bold text-gray-900">Join a Team</h4>
// //                   <p className="text-sm text-gray-500">I have a Team Code from my leader.</p>
// //                 </div>
// //               </button>
// //             </div>
// //           )}

// //           {/* STEP 2: CREATE TEAM */}
// //           {step === "CREATE" && (
// //             <div className="space-y-4">
// //               <div className="text-center">
// //                 <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 mb-2">
// //                   <UserPlus size={24} />
// //                 </div>
// //                 <h4 className="text-xl font-bold">Name Your Team</h4>
// //               </div>
              
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">Team Name</label>
// //                 <input 
// //                   type="text" 
// //                   value={teamName}
// //                   onChange={(e) => setTeamName(e.target.value)}
// //                   placeholder="e.g. Code Warriors"
// //                   className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
// //                 />
// //               </div>

// //               <Button onClick={handleCreateTeam} disabled={!teamName} className="w-full py-6">
// //                 Generate Team Code
// //               </Button>
              
// //               <button onClick={() => setStep("CHOICE")} className="w-full text-sm text-gray-500 hover:underline">
// //                 Back
// //               </button>
// //             </div>
// //           )}

// //           {/* STEP 3: JOIN TEAM */}
// //           {step === "JOIN" && (
// //             <div className="space-y-4">
// //                <div className="text-center">
// //                 <div className="inline-block p-3 bg-purple-100 rounded-full text-purple-600 mb-2">
// //                   <Users size={24} />
// //                 </div>
// //                 <h4 className="text-xl font-bold">Enter Team Code</h4>
// //               </div>

// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">Team Code</label>
// //                 <input 
// //                   type="text" 
// //                   value={joinCode}
// //                   onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
// //                   placeholder="e.g. HACK-X9Y2"
// //                   className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none uppercase font-mono tracking-widest text-center"
// //                 />
// //               </div>

// //               <Button onClick={handleJoinTeam} disabled={joinCode.length < 3} className="w-full py-6 bg-purple-600 hover:bg-purple-700">
// //                 Join Team
// //               </Button>

// //               <button onClick={() => setStep("CHOICE")} className="w-full text-sm text-gray-500 hover:underline">
// //                 Back
// //               </button>
// //             </div>
// //           )}

// //           {/* STEP 4: SUCCESS */}
// //           {step === "SUCCESS" && (
// //             <div className="text-center space-y-6 animate-in zoom-in duration-300">
// //               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
// //                 <Check size={32} strokeWidth={3} />
// //               </div>
              
// //               <div>
// //                 <h4 className="text-2xl font-bold text-gray-900">Registration Successful!</h4>
// //                 <p className="text-gray-500">You are now registered for this event.</p>
// //               </div>

// //               {generatedCode && (
// //                 <div className="bg-gray-100 p-4 rounded-lg border border-dashed border-gray-300">
// //                   <p className="text-xs text-gray-500 uppercase font-bold mb-1">Share this code with teammates</p>
// //                   <div className="flex items-center justify-center gap-3">
// //                     <span className="text-2xl font-mono font-bold tracking-widest text-blue-600">{generatedCode}</span>
// //                     <button className="text-gray-400 hover:text-blue-600" title="Copy">
// //                       <Copy size={18} />
// //                     </button>
// //                   </div>
// //                 </div>
// //               )}

// //               <Button onClick={onClose} className="w-full bg-gray-900 hover:bg-black">
// //                 Go to Dashboard
// //               </Button>
// //             </div>
// //           )}

// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// //import { Input } from "@/components/ui/input";
// //import { Label } from "@/components/ui/label";
// import { Loader2, CheckCircle2 } from "lucide-react";
// import { supabase } from "@/lib/supabase";
// import { useRouter } from "next/navigation";

// interface RegistrationModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   eventTitle: string;
//   eventId: string; // We need the ID to save it
//   onSuccess: () => void; // New trigger to update parent page
// }

// export default function RegistrationModal({ isOpen, onClose, eventTitle, eventId, onSuccess }: RegistrationModalProps) {
//   const [step, setStep] = useState(1); // 1 = Form, 2 = Success
//   const [loading, setLoading] = useState(false);
//   const [teamName, setTeamName] = useState("");
//   const router = useRouter();

//   const handleRegister = async () => {
//     setLoading(true);
//     try {
//       // 1. Get Current User
//       const { data: { user } } = await supabase.auth.getUser();
      
//       if (!user) {
//         alert("You must be logged in to register!");
//         router.push("/login");
//         return;
//       }

//       // 2. Check if already registered
//       const { data: existing } = await supabase
//         .from('registrations')
//         .select('*')
//         .eq('event_id', eventId)
//         .eq('user_id', user.id)
//         .single();

//       if (existing) {
//         alert("You have already registered for this event!");
//         setLoading(false);
//         return;
//       }

//       // 3. Insert Registration
//       const { error } = await supabase
//         .from('registrations')
//         .insert({
//           event_id: eventId,
//           user_id: user.id,
//           team_name: teamName || "Solo Participant",
//           status: 'confirmed'
//         });

//       if (error) throw error;

//       // 4. Success!
//       setStep(2);
//       onSuccess(); // <--- This tells the main page to update the count instantly

//     } catch (error: any) {
//       alert("Registration failed: " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleClose = () => {
//     setStep(1); // Reset for next time
//     setTeamName("");
//     onClose();
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={handleClose}>
//       <DialogContent className="sm:max-w-md bg-white text-gray-900">
        
//         {step === 1 ? (
//           <>
//             <DialogHeader>
//               <DialogTitle>Register for {eventTitle}</DialogTitle>
//               <DialogDescription>
//                 Confirm your spot. If this is a team event, enter your team name below.
//               </DialogDescription>
//             </DialogHeader>
            
//             <div className="space-y-4 py-4">
//               <div className="space-y-2">
//                 <Label>Team Name (Optional)</Label>
//                 <Input 
//                   placeholder="e.g. Code Warriors" 
//                   value={teamName}
//                   onChange={(e) => setTeamName(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div className="flex justify-end gap-3">
//               <Button variant="outline" onClick={onClose}>Cancel</Button>
//               <Button onClick={handleRegister} disabled={loading} className="bg-blue-600 hover:bg-blue-700">
//                 {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Confirm Registration"}
//               </Button>
//             </div>
//           </>
//         ) : (
//           <div className="py-6 text-center space-y-4">
//             <div className="flex justify-center text-green-500 mb-2">
//               <CheckCircle2 size={64} />
//             </div>
//             <h2 className="text-2xl font-bold text-gray-900">You're In! 🚀</h2>
//             <p className="text-gray-500">
//               Registration successful. You will receive an email confirmation shortly.
//             </p>
//             <Button onClick={handleClose} className="w-full bg-gray-900 text-white mt-4">
//               Done
//             </Button>
//           </div>
//         )}

//       </DialogContent>
//     </Dialog>
//   );
// }


"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
// 👇 UNCOMMENTED THESE TWO LINES
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
  eventId: string; 
  onSuccess: () => void; 
}

export default function RegistrationModal({ isOpen, onClose, eventTitle, eventId, onSuccess }: RegistrationModalProps) {
  const [step, setStep] = useState(1); 
  const [loading, setLoading] = useState(false);
  const [teamName, setTeamName] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        alert("You must be logged in to register!");
        router.push("/login");
        return;
      }

      const { data: existing } = await supabase
        .from('registrations')
        .select('*')
        .eq('event_id', eventId)
        .eq('user_id', user.id)
        .single();

      if (existing) {
        alert("You have already registered for this event!");
        setLoading(false);
        return;
      }

      const { error } = await supabase
        .from('registrations')
        .insert({
          event_id: eventId,
          user_id: user.id,
          team_name: teamName || "Solo Participant",
          status: 'confirmed'
        });

      if (error) throw error;

      setStep(2);
      onSuccess(); 

    } catch (error: any) {
      alert("Registration failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setStep(1); 
    setTeamName("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-white text-gray-900">
        
        {step === 1 ? (
          <>
            <DialogHeader>
              <DialogTitle>Register for {eventTitle}</DialogTitle>
              <DialogDescription>
                Confirm your spot. If this is a team event, enter your team name below.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Team Name (Optional)</Label>
                <Input 
                  placeholder="e.g. Code Warriors" 
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={onClose}>Cancel</Button>
              <Button onClick={handleRegister} disabled={loading} className="bg-blue-600 hover:bg-blue-700">
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Confirm Registration"}
              </Button>
            </div>
          </>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="flex justify-center text-green-500 mb-2">
              <CheckCircle2 size={64} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">You're In! 🚀</h2>
            <p className="text-gray-500">
              Registration successful. You will receive an email confirmation shortly.
            </p>
            <Button onClick={handleClose} className="w-full bg-gray-900 text-white mt-4">
              Done
            </Button>
          </div>
        )}

      </DialogContent>
    </Dialog>
  );
}