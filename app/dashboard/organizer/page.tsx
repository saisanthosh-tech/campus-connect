// // "use client";

// // import { useState } from "react";
// // import Navbar from "@/components/Navbar";
// // import { Button } from "@/components/ui/button";
// // import { Upload, Users, Calendar, Type, MapPin, Image as ImageIcon, Loader2 } from "lucide-react";
// // import { supabase } from "@/lib/supabase";
// // import { useRouter } from "next/navigation";

// // export default function HostEventPage() {
// //   const router = useRouter();
// //   const [loading, setLoading] = useState(false);
// //   const [isTeamEvent, setIsTeamEvent] = useState(false);
  
// //   // Form State
// //   const [formData, setFormData] = useState({
// //     title: "",
// //     date: "",
// //     location: "",
// //     category: "Technical",
// //     description: "",
// //     minTeam: 1,
// //     maxTeam: 1,
// //     imageUrl: "https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=1000" // Default image
// //   });

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     try {
// //       // 1. Get current user
// //       const { data: { user } } = await supabase.auth.getUser();
// //       if (!user) throw new Error("You must be logged in to host an event.");

// //       // 2. Insert into Supabase
// //       const { error } = await supabase.from('events').insert({
// //         organizer_id: user.id,
// //         title: formData.title,
// //         date: formData.date,
// //         location: formData.location,
// //         category: formData.category,
// //         type: isTeamEvent ? 'Team' : 'Solo',
// //         team_size_min: isTeamEvent ? formData.minTeam : 1,
// //         team_size_max: isTeamEvent ? formData.maxTeam : 1,
// //         description: formData.description,
// //         image_url: formData.imageUrl
// //       });

// //       if (error) throw error;

// //       alert("Event Launched Successfully! 🚀");
// //       router.push("/"); // Redirect to home to see it

// //     } catch (error: any) {
// //       alert("Error: " + error.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 pb-20">
// //       <Navbar />
      
// //       <main className="max-w-3xl mx-auto py-10 px-6">
// //         <div className="mb-8">
// //           <h1 className="text-3xl font-bold text-gray-900">Host an Event</h1>
// //           <p className="text-gray-600">Fill in the details to launch your hackathon or workshop.</p>
// //         </div>

// //         <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 space-y-8 animate-in fade-in slide-in-from-bottom-4">
          
// //           {/* SECTION 1: BASIC INFO */}
// //           <div className="space-y-6">
// //             <h3 className="text-lg font-bold text-gray-900 border-b pb-2 flex items-center gap-2">
// //               <Type className="text-blue-600" size={20} /> Basic Details
// //             </h3>

// //             <div className="space-y-2">
// //               <label className="block text-sm font-bold text-gray-900">Event Title</label>
// //               <input 
// //                 required
// //                 type="text" 
// //                 placeholder="e.g. AI Hackathon 2026" 
// //                 value={formData.title}
// //                 onChange={(e) => setFormData({...formData, title: e.target.value})}
// //                 className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none font-medium"
// //               />
// //             </div>

// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               <div className="space-y-2">
// //                 <label className="block text-sm font-bold text-gray-900">Date</label>
// //                 <div className="relative">
// //                   <Calendar className="absolute left-3 top-3 text-gray-500" size={18} />
// //                   <input 
// //                     required
// //                     type="date" 
// //                     value={formData.date}
// //                     onChange={(e) => setFormData({...formData, date: e.target.value})}
// //                     className="w-full pl-10 p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none font-medium" 
// //                   />
// //                 </div>
// //               </div>
              
// //               <div className="space-y-2">
// //                 <label className="block text-sm font-bold text-gray-900">Category</label>
// //                 <div className="relative">
// //                   <Type className="absolute left-3 top-3 text-gray-500" size={18} />
// //                   <select 
// //                     value={formData.category}
// //                     onChange={(e) => setFormData({...formData, category: e.target.value})}
// //                     className="w-full pl-10 p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none bg-white font-medium"
// //                   >
// //                     <option>Technical</option>
// //                     <option>Cultural</option>
// //                     <option>Sports</option>
// //                     <option>Workshop</option>
// //                   </select>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="space-y-2">
// //               <label className="block text-sm font-bold text-gray-900">Venue / Location</label>
// //               <div className="relative">
// //                 <MapPin className="absolute left-3 top-3 text-gray-500" size={18} />
// //                 <input 
// //                   required
// //                   type="text" 
// //                   placeholder="e.g. Main Auditorium, Block A" 
// //                   value={formData.location}
// //                   onChange={(e) => setFormData({...formData, location: e.target.value})}
// //                   className="w-full pl-10 p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none font-medium"
// //                 />
// //               </div>
// //             </div>
// //           </div>

// //           {/* SECTION 2: TEAM LOGIC */}
// //           <div className="space-y-4">
// //              <h3 className="text-lg font-bold text-gray-900 border-b pb-2 flex items-center gap-2">
// //               <Users className="text-blue-600" size={20} /> Participation Rules
// //             </h3>
            
// //             <div className="p-5 bg-blue-50 rounded-xl border border-blue-100">
// //               <div className="flex items-center justify-between mb-4">
// //                 <div className="flex items-center gap-2">
// //                   <span className="font-bold text-gray-900">Participation Type</span>
// //                 </div>
                
// //                 <div className="flex bg-white rounded-lg p-1 border shadow-sm">
// //                   <button 
// //                     type="button"
// //                     onClick={() => setIsTeamEvent(false)}
// //                     className={`px-4 py-1.5 rounded-md text-sm font-bold transition ${!isTeamEvent ? 'bg-gray-900 text-white shadow' : 'text-gray-500 hover:bg-gray-50'}`}
// //                   >
// //                     Solo
// //                   </button>
// //                   <button 
// //                     type="button"
// //                     onClick={() => setIsTeamEvent(true)}
// //                     className={`px-4 py-1.5 rounded-md text-sm font-bold transition ${isTeamEvent ? 'bg-gray-900 text-white shadow' : 'text-gray-500 hover:bg-gray-50'}`}
// //                   >
// //                     Team
// //                   </button>
// //                 </div>
// //               </div>

// //               {/* Conditional Team Size Inputs */}
// //               {isTeamEvent && (
// //                 <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2">
// //                   <div>
// //                     <label className="text-xs font-bold text-gray-600 uppercase">Min Members</label>
// //                     <input 
// //                       type="number" 
// //                       min="2" 
// //                       value={formData.minTeam}
// //                       onChange={(e) => setFormData({...formData, minTeam: parseInt(e.target.value)})}
// //                       className="w-full mt-1 p-2 border border-blue-200 rounded-md text-gray-900 font-bold focus:ring-2 focus:ring-blue-500 outline-none" 
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="text-xs font-bold text-gray-600 uppercase">Max Members</label>
// //                     <input 
// //                       type="number" 
// //                       min="2" 
// //                       value={formData.maxTeam}
// //                       onChange={(e) => setFormData({...formData, maxTeam: parseInt(e.target.value)})}
// //                       className="w-full mt-1 p-2 border border-blue-200 rounded-md text-gray-900 font-bold focus:ring-2 focus:ring-blue-500 outline-none" 
// //                     />
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           </div>

// //           {/* SECTION 3: DESCRIPTION */}
// //           <div className="space-y-2">
// //              <h3 className="text-lg font-bold text-gray-900 border-b pb-2 flex items-center gap-2">
// //               <ImageIcon className="text-blue-600" size={20} /> Description & Media
// //             </h3>
            
// //             <label className="block text-sm font-bold text-gray-900 mt-4">About Event</label>
// //             <textarea 
// //               required
// //               rows={5} 
// //               value={formData.description}
// //               onChange={(e) => setFormData({...formData, description: e.target.value})}
// //               className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none font-medium"
// //               placeholder="Describe the rules, venue, and prerequisites..."
// //             ></textarea>
// //           </div>

// //           {/* SUBMIT BUTTON */}
// //           <Button disabled={loading} className="w-full py-6 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all">
// //             {loading ? <Loader2 className="animate-spin mr-2" /> : "🚀 Launch Event"}
// //           </Button>

// //         </form>
// //       </main>
// //     </div>
// //   );
// // }


// "use client";

// import { useState } from "react";
// import Navbar from "@/components/Navbar";
// import { Button } from "@/components/ui/button";
// import { Upload, Users, Calendar, Type, MapPin, Image as ImageIcon, Loader2, Building2 } from "lucide-react";
// import { supabase } from "@/lib/supabase";
// import { useRouter } from "next/navigation";

// export default function HostEventPage() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [isTeamEvent, setIsTeamEvent] = useState(false);
  
//   // Form State
//   const [formData, setFormData] = useState({
//     title: "",
//     clubName: "", // <--- NEW FIELD
//     date: "",
//     location: "",
//     category: "Technical",
//     description: "",
//     minTeam: 1,
//     maxTeam: 1,
//     imageUrl: "https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=1000"
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const { data: { user } } = await supabase.auth.getUser();
//       if (!user) throw new Error("You must be logged in to host an event.");

//       const { error } = await supabase.from('events').insert({
//         organizer_id: user.id,
//         title: formData.title,
//         club_name: formData.clubName, // <--- SAVING TO DB
//         date: formData.date,
//         location: formData.location,
//         category: formData.category,
//         type: isTeamEvent ? 'Team' : 'Solo',
//         team_size_min: isTeamEvent ? formData.minTeam : 1,
//         team_size_max: isTeamEvent ? formData.maxTeam : 1,
//         description: formData.description,
//         image_url: formData.imageUrl
//       });

//       if (error) throw error;

//       alert("Event Launched Successfully! 🚀");
//       router.push("/events"); 

//     } catch (error: any) {
//       alert("Error: " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 pb-20">
//       <Navbar />
      
//       <main className="max-w-3xl mx-auto py-10 px-6">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">Host an Event</h1>
//           <p className="text-gray-600">Fill in the details to launch your hackathon or workshop.</p>
//         </div>

//         <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 space-y-8 animate-in fade-in slide-in-from-bottom-4">
          
//           {/* SECTION 1: BASIC INFO */}
//           <div className="space-y-6">
//             <h3 className="text-lg font-bold text-gray-900 border-b pb-2 flex items-center gap-2">
//               <Type className="text-blue-600" size={20} /> Basic Details
//             </h3>

//             <div className="space-y-2">
//               <label className="block text-sm font-bold text-gray-900">Event Title</label>
//               <input 
//                 required
//                 type="text" 
//                 placeholder="e.g. AI Hackathon 2026" 
//                 value={formData.title}
//                 onChange={(e) => setFormData({...formData, title: e.target.value})}
//                 className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none font-medium"
//               />
//             </div>

//             {/* NEW CLUB NAME INPUT */}
//             <div className="space-y-2">
//               <label className="block text-sm font-bold text-gray-900">Organizing Club / Department</label>
//               <div className="relative">
//                 <Building2 className="absolute left-3 top-3 text-gray-500" size={18} />
//                 <input 
//                   required
//                   type="text" 
//                   placeholder="e.g. Robotics Club, CSE Dept" 
//                   value={formData.clubName}
//                   onChange={(e) => setFormData({...formData, clubName: e.target.value})}
//                   className="w-full pl-10 p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none font-medium"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <label className="block text-sm font-bold text-gray-900">Date</label>
//                 <div className="relative">
//                   <Calendar className="absolute left-3 top-3 text-gray-500" size={18} />
//                   <input 
//                     required
//                     type="date" 
//                     value={formData.date}
//                     onChange={(e) => setFormData({...formData, date: e.target.value})}
//                     className="w-full pl-10 p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none font-medium" 
//                   />
//                 </div>
//               </div>
              
//               <div className="space-y-2">
//                 <label className="block text-sm font-bold text-gray-900">Category</label>
//                 <div className="relative">
//                   <Type className="absolute left-3 top-3 text-gray-500" size={18} />
//                   <select 
//                     value={formData.category}
//                     onChange={(e) => setFormData({...formData, category: e.target.value})}
//                     className="w-full pl-10 p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none bg-white font-medium"
//                   >
//                     <option>Technical</option>
//                     <option>Cultural</option>
//                     <option>Sports</option>
//                     <option>Workshop</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label className="block text-sm font-bold text-gray-900">Venue / Location</label>
//               <div className="relative">
//                 <MapPin className="absolute left-3 top-3 text-gray-500" size={18} />
//                 <input 
//                   required
//                   type="text" 
//                   placeholder="e.g. Main Auditorium, Block A" 
//                   value={formData.location}
//                   onChange={(e) => setFormData({...formData, location: e.target.value})}
//                   className="w-full pl-10 p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none font-medium"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* SECTION 2: TEAM LOGIC */}
//           <div className="space-y-4">
//              <h3 className="text-lg font-bold text-gray-900 border-b pb-2 flex items-center gap-2">
//               <Users className="text-blue-600" size={20} /> Participation Rules
//             </h3>
            
//             <div className="p-5 bg-blue-50 rounded-xl border border-blue-100">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="flex items-center gap-2">
//                   <span className="font-bold text-gray-900">Participation Type</span>
//                 </div>
                
//                 <div className="flex bg-white rounded-lg p-1 border shadow-sm">
//                   <button 
//                     type="button"
//                     onClick={() => setIsTeamEvent(false)}
//                     className={`px-4 py-1.5 rounded-md text-sm font-bold transition ${!isTeamEvent ? 'bg-gray-900 text-white shadow' : 'text-gray-500 hover:bg-gray-50'}`}
//                   >
//                     Solo
//                   </button>
//                   <button 
//                     type="button"
//                     onClick={() => setIsTeamEvent(true)}
//                     className={`px-4 py-1.5 rounded-md text-sm font-bold transition ${isTeamEvent ? 'bg-gray-900 text-white shadow' : 'text-gray-500 hover:bg-gray-50'}`}
//                   >
//                     Team
//                   </button>
//                 </div>
//               </div>

//               {isTeamEvent && (
//                 <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2">
//                   <div>
//                     <label className="text-xs font-bold text-gray-600 uppercase">Min Members</label>
//                     <input 
//                       type="number" 
//                       min="2" 
//                       value={formData.minTeam}
//                       onChange={(e) => setFormData({...formData, minTeam: parseInt(e.target.value)})}
//                       className="w-full mt-1 p-2 border border-blue-200 rounded-md text-gray-900 font-bold focus:ring-2 focus:ring-blue-500 outline-none" 
//                     />
//                   </div>
//                   <div>
//                     <label className="text-xs font-bold text-gray-600 uppercase">Max Members</label>
//                     <input 
//                       type="number" 
//                       min="2" 
//                       value={formData.maxTeam}
//                       onChange={(e) => setFormData({...formData, maxTeam: parseInt(e.target.value)})}
//                       className="w-full mt-1 p-2 border border-blue-200 rounded-md text-gray-900 font-bold focus:ring-2 focus:ring-blue-500 outline-none" 
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* SECTION 3: DESCRIPTION */}
//           <div className="space-y-2">
//              <h3 className="text-lg font-bold text-gray-900 border-b pb-2 flex items-center gap-2">
//               <ImageIcon className="text-blue-600" size={20} /> Description & Media
//             </h3>
            
//             <label className="block text-sm font-bold text-gray-900 mt-4">About Event</label>
//             <textarea 
//               required
//               rows={5} 
//               value={formData.description}
//               onChange={(e) => setFormData({...formData, description: e.target.value})}
//               className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none font-medium"
//               placeholder="Describe the rules, venue, and prerequisites..."
//             ></textarea>
//           </div>

//           <Button disabled={loading} className="w-full py-6 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all">
//             {loading ? <Loader2 className="animate-spin mr-2" /> : "🚀 Launch Event"}
//           </Button>

//         </form>
//       </main>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Type, MapPin, Image as ImageIcon, Loader2, Building2, Clock } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function HostEventPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isTeamEvent, setIsTeamEvent] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    clubName: "",
    date: "",
    deadline: "", // <--- NEW FIELD
    location: "",
    category: "Technical",
    description: "",
    minTeam: 1,
    maxTeam: 1,
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=1000"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("You must be logged in to host an event.");

      const { error } = await supabase.from('events').insert({
        organizer_id: user.id,
        title: formData.title,
        club_name: formData.clubName,
        date: formData.date,
        deadline: formData.deadline, // <--- SAVING DEADLINE
        location: formData.location,
        category: formData.category,
        type: isTeamEvent ? 'Team' : 'Solo',
        team_size_min: isTeamEvent ? formData.minTeam : 1,
        team_size_max: isTeamEvent ? formData.maxTeam : 1,
        description: formData.description,
        image_url: formData.imageUrl
      });

      if (error) throw error;

      alert("Event Launched Successfully! 🚀");
      router.push("/events"); 

    } catch (error: any) {
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar />
      
      <main className="max-w-3xl mx-auto py-10 px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Host an Event</h1>
          <p className="text-gray-600">Fill in the details to launch your hackathon or workshop.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 space-y-8 animate-in fade-in slide-in-from-bottom-4">
          
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-2 flex items-center gap-2">
              <Type className="text-blue-600" size={20} /> Basic Details
            </h3>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-900">Event Title</label>
              <input 
                required
                type="text" 
                placeholder="e.g. AI Hackathon 2026" 
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none font-medium"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-900">Organizing Club / Department</label>
              <div className="relative">
                <Building2 className="absolute left-3 top-3 text-gray-500" size={18} />
                <input 
                  required
                  type="text" 
                  placeholder="e.g. Robotics Club, CSE Dept" 
                  value={formData.clubName}
                  onChange={(e) => setFormData({...formData, clubName: e.target.value})}
                  className="w-full pl-10 p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-900">Event Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-gray-500" size={18} />
                  <input 
                    required
                    type="date" 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none font-medium" 
                  />
                </div>
              </div>

              {/* NEW DEADLINE INPUT */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-red-600">Registration Deadline</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 text-red-500" size={18} />
                  <input 
                    required
                    type="date" 
                    value={formData.deadline}
                    onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                    className="w-full pl-10 p-3 border border-red-200 bg-red-50 rounded-lg text-gray-900 focus:ring-2 focus:ring-red-500 outline-none font-medium" 
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-900">Category</label>
                <div className="relative">
                  <Type className="absolute left-3 top-3 text-gray-500" size={18} />
                  <select 
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none bg-white font-medium"
                  >
                    <option>Technical</option>
                    <option>Cultural</option>
                    <option>Sports</option>
                    <option>Workshop</option>
                  </select>
                </div>
              </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-900">Venue / Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-gray-500" size={18} />
                <input 
                  required
                  type="text" 
                  placeholder="e.g. Main Auditorium, Block A" 
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full pl-10 p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none font-medium"
                />
              </div>
            </div>
          </div>

          {/* TEAM LOGIC */}
          <div className="space-y-4">
             <h3 className="text-lg font-bold text-gray-900 border-b pb-2 flex items-center gap-2">
              <Users className="text-blue-600" size={20} /> Participation Rules
            </h3>
            
            <div className="p-5 bg-blue-50 rounded-xl border border-blue-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900">Participation Type</span>
                </div>
                
                <div className="flex bg-white rounded-lg p-1 border shadow-sm">
                  <button 
                    type="button"
                    onClick={() => setIsTeamEvent(false)}
                    className={`px-4 py-1.5 rounded-md text-sm font-bold transition ${!isTeamEvent ? 'bg-gray-900 text-white shadow' : 'text-gray-500 hover:bg-gray-50'}`}
                  >
                    Solo
                  </button>
                  <button 
                    type="button"
                    onClick={() => setIsTeamEvent(true)}
                    className={`px-4 py-1.5 rounded-md text-sm font-bold transition ${isTeamEvent ? 'bg-gray-900 text-white shadow' : 'text-gray-500 hover:bg-gray-50'}`}
                  >
                    Team
                  </button>
                </div>
              </div>

              {isTeamEvent && (
                <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2">
                  <div>
                    <label className="text-xs font-bold text-gray-600 uppercase">Min Members</label>
                    <input 
                      type="number" 
                      min="2" 
                      value={formData.minTeam}
                      onChange={(e) => setFormData({...formData, minTeam: parseInt(e.target.value)})}
                      className="w-full mt-1 p-2 border border-blue-200 rounded-md text-gray-900 font-bold focus:ring-2 focus:ring-blue-500 outline-none" 
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-600 uppercase">Max Members</label>
                    <input 
                      type="number" 
                      min="2" 
                      value={formData.maxTeam}
                      onChange={(e) => setFormData({...formData, maxTeam: parseInt(e.target.value)})}
                      className="w-full mt-1 p-2 border border-blue-200 rounded-md text-gray-900 font-bold focus:ring-2 focus:ring-blue-500 outline-none" 
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
             <h3 className="text-lg font-bold text-gray-900 border-b pb-2 flex items-center gap-2">
              <ImageIcon className="text-blue-600" size={20} /> Description & Media
            </h3>
            
            <label className="block text-sm font-bold text-gray-900 mt-4">About Event</label>
            <textarea 
              required
              rows={5} 
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none font-medium"
              placeholder="Describe the rules, venue, and prerequisites..."
            ></textarea>
          </div>

          <Button disabled={loading} className="w-full py-6 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all">
            {loading ? <Loader2 className="animate-spin mr-2" /> : "🚀 Launch Event"}
          </Button>

        </form>
      </main>
    </div>
  );
}