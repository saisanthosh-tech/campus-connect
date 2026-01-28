// // "use client";

// // import { useState } from "react";
// // import Navbar from "@/components/Navbar";
// // import { Button } from "@/components/ui/button";
// // import RegistrationModal from "@/components/RegistrationModal"; 
// // import { Calendar, MapPin, Users, Clock, Share2, ShieldCheck } from "lucide-react";

// // export default function EventDetailsPage({ params }: { params: { id: string } }) {
// //   // State to control the Modal visibility
// //   const [isModalOpen, setIsModalOpen] = useState(false);

// //   return (
// //     <div className="min-h-screen bg-gray-50 pb-20 relative">
// //       <Navbar />

// //       {/* --- THE MODAL IS HERE (Hidden by default) --- */}
// //       <RegistrationModal 
// //         isOpen={isModalOpen} 
// //         onClose={() => setIsModalOpen(false)} 
// //         eventTitle="AI & Robotics Hackathon 2026" 
// //       />

// //       {/* 1. Hero Image Header */}
// //       <div className="h-64 md:h-80 w-full relative bg-gray-900">
// //         <img 
// //           src="https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=1200" 
// //           alt="Event Cover" 
// //           className="w-full h-full object-cover opacity-60"
// //         />
// //         <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-gray-900/90 to-transparent">
// //           <div className="max-w-5xl mx-auto">
// //             <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3 inline-block">
// //               Technical
// //             </span>
// //             <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
// //               AI & Robotics Hackathon 2026
// //             </h1>
// //             <p className="text-gray-300 text-lg">
// //               Organized by: <span className="text-white font-semibold">Robotics Club</span>
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       <main className="max-w-5xl mx-auto px-6 mt-8 grid md:grid-cols-3 gap-8">
        
// //         {/* 2. Left Column: Details */}
// //         <div className="md:col-span-2 space-y-8">
          
// //           <div className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
// //             <h2 className="text-2xl font-bold text-gray-900">About the Event</h2>
// //             <p className="text-gray-600 leading-relaxed">
// //               Join us for a 24-hour hackathon where you will build the future of AI. 
// //               Teams will compete to solve real-world problems using computer vision, 
// //               NLP, and robotics simulations. Mentors from top tech companies will be available 
// //               to guide you.
// //             </p>
            
// //             <h3 className="text-lg font-semibold text-gray-900 pt-4">Prerequisites</h3>
// //             <ul className="list-disc pl-5 text-gray-600 space-y-2">
// //               <li>Basic knowledge of Python or C++</li>
// //               <li>Laptop with charger (Extension cords provided)</li>
// //               <li>Valid College ID Card</li>
// //             </ul>
// //           </div>

// //           {/* Schedule / Timeline */}
// //           <div className="bg-white p-6 rounded-xl shadow-sm border">
// //             <h2 className="text-xl font-bold text-gray-900 mb-4">Event Schedule</h2>
// //             <div className="space-y-4">
// //               <div className="flex gap-4">
// //                 <div className="w-20 font-bold text-gray-500">09:00 AM</div>
// //                 <div>Check-in & Registration</div>
// //               </div>
// //               <div className="flex gap-4">
// //                 <div className="w-20 font-bold text-gray-500">10:00 AM</div>
// //                 <div>Opening Ceremony & Problem Statements</div>
// //               </div>
// //               <div className="flex gap-4">
// //                 <div className="w-20 font-bold text-blue-600">11:00 AM</div>
// //                 <div className="font-medium">Hacking Begins! 🚀</div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* 3. Right Column: Action Card */}
// //         <div className="md:col-span-1">
// //           <div className="bg-white p-6 rounded-xl shadow-lg border sticky top-24">
// //             <div className="flex justify-between items-center mb-6">
// //               <span className="text-3xl font-bold text-gray-900">Free</span>
// //               <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
// //                 Open for All
// //               </span>
// //             </div>

// //             <div className="space-y-4 mb-6">
// //               <div className="flex items-center gap-3 text-gray-600">
// //                 <Calendar className="text-blue-600" size={20} />
// //                 <span>March 15, 2026</span>
// //               </div>
// //               <div className="flex items-center gap-3 text-gray-600">
// //                 <Clock className="text-blue-600" size={20} />
// //                 <span>09:00 AM - 05:00 PM</span>
// //               </div>
// //               <div className="flex items-center gap-3 text-gray-600">
// //                 <MapPin className="text-blue-600" size={20} />
// //                 <span>Main Auditorium, Block A</span>
// //               </div>
// //               <div className="flex items-center gap-3 text-gray-600">
// //                 <Users className="text-blue-600" size={20} />
// //                 <span>Team Size: 2-4 Members</span>
// //               </div>
// //             </div>

// //             {/* THE REGISTER BUTTON (Now connected to state) */}
// //             <Button 
// //               onClick={() => setIsModalOpen(true)}
// //               className="w-full py-6 text-lg font-semibold shadow-md hover:shadow-lg transition-all"
// //             >
// //               Register Now
// //             </Button>
            
// //             <p className="text-xs text-center text-gray-500 mt-3">
// //               Registration closes on March 14, 11:59 PM
// //             </p>

// //             <div className="mt-6 pt-6 border-t flex justify-center gap-4">
// //                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600">
// //                  <Share2 size={16} /> Share
// //                </button>
// //                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600">
// //                  <ShieldCheck size={16} /> Contact Host
// //                </button>
// //             </div>

// //           </div>
// //         </div>

// //       </main>
// //     </div>
// //   );
// // }


// "use client";

// import { useEffect, useState } from "react";
// import Navbar from "@/components/Navbar";
// import { Button } from "@/components/ui/button";
// import RegistrationModal from "@/components/RegistrationModal";
// import { Calendar, MapPin, Users, Clock, Share2, ShieldCheck, Loader2, ArrowLeft } from "lucide-react";
// import { supabase } from "@/lib/supabase";
// import Link from "next/link";
// import { useParams } from "next/navigation";

// export default function EventDetailsPage() {
//   const { id } = useParams(); // Get the ID from the URL (e.g., /events/12)
//   const [event, setEvent] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const fetchEventDetails = async () => {
//       if (!id) return;

//       const { data, error } = await supabase
//         .from('events')
//         .select('*')
//         .eq('id', id)
//         .single();

//       if (error) {
//         console.error("Error fetching event:", error);
//       } else {
//         setEvent(data);
//       }
//       setLoading(false);
//     };

//     fetchEventDetails();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <Loader2 className="animate-spin h-10 w-10 text-blue-600" />
//       </div>
//     );
//   }

//   if (!event) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
//         <h1 className="text-2xl font-bold text-gray-900 mb-2">Event Not Found</h1>
//         <p className="text-gray-500 mb-6">This event may have been deleted or the link is incorrect.</p>
//         <Link href="/events">
//           <Button>Back to Events</Button>
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 pb-20 relative">
//       <Navbar />

//       {/* REGISTRATION MODAL */}
//       <RegistrationModal 
//         isOpen={isModalOpen} 
//         onClose={() => setIsModalOpen(false)} 
//         eventTitle={event.title} 
//       />

//       {/* 1. Hero Image Header */}
//       <div className="h-64 md:h-80 w-full relative bg-gray-900">
//         <img 
//           src={event.image_url || "https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=1200"} 
//           alt={event.title} 
//           className="w-full h-full object-cover opacity-50"
//         />
        
//         {/* Back Button */}
//         <Link href="/events" className="absolute top-6 left-6 z-10">
//           <button className="bg-white/20 backdrop-blur hover:bg-white/30 text-white p-2 rounded-full transition">
//             <ArrowLeft size={24} />
//           </button>
//         </Link>

//         <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-gray-900/90 to-transparent">
//           <div className="max-w-5xl mx-auto">
//             <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3 inline-block uppercase tracking-wide">
//               {event.category || "General"}
//             </span>
//             <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
//               {event.title}
//             </h1>
//             <p className="text-gray-300 text-lg">
//   Organized by: <span className="text-white font-semibold">{event.club_name || "Student Council"}</span>
// </p>
//           </div>
//         </div>
//       </div>

//       <main className="max-w-5xl mx-auto px-6 mt-8 grid md:grid-cols-3 gap-8">
        
//         {/* 2. Left Column: Details */}
//         <div className="md:col-span-2 space-y-8">
          
//           <div className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
//             <h2 className="text-2xl font-bold text-gray-900">About the Event</h2>
//             <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
//               {event.description || "No description provided."}
//             </div>
            
//             <h3 className="text-lg font-semibold text-gray-900 pt-4">Prerequisites</h3>
//             <ul className="list-disc pl-5 text-gray-600 space-y-2">
//               <li>Valid College ID Card</li>
//               <li>Registration confirmation email</li>
//             </ul>
//           </div>

//           {/* Schedule / Timeline (Static for Demo) */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border">
//             <h2 className="text-xl font-bold text-gray-900 mb-4">Event Schedule</h2>
//             <div className="space-y-4">
//               <div className="flex gap-4">
//                 <div className="w-20 font-bold text-gray-500">09:00 AM</div>
//                 <div>Check-in & Registration</div>
//               </div>
//               <div className="flex gap-4">
//                 <div className="w-20 font-bold text-gray-500">10:00 AM</div>
//                 <div>Opening Ceremony</div>
//               </div>
//               <div className="flex gap-4">
//                 <div className="w-20 font-bold text-blue-600">11:00 AM</div>
//                 <div className="font-medium">Event Begins 🚀</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* 3. Right Column: Action Card */}
//         <div className="md:col-span-1">
//           <div className="bg-white p-6 rounded-xl shadow-lg border sticky top-24">
//             <div className="flex justify-between items-center mb-6">
//               <span className="text-3xl font-bold text-gray-900">Free</span>
//               <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
//                 Open for All
//               </span>
//             </div>

//             <div className="space-y-4 mb-6">
//               <div className="flex items-center gap-3 text-gray-700">
//                 <Calendar className="text-blue-600" size={20} />
//                 <span className="font-medium">{new Date(event.date).toDateString()}</span>
//               </div>
//               <div className="flex items-center gap-3 text-gray-700">
//                 <Clock className="text-blue-600" size={20} />
//                 <span>09:00 AM - 05:00 PM</span>
//               </div>
//               <div className="flex items-center gap-3 text-gray-700">
//                 <MapPin className="text-blue-600" size={20} />
//                 <span>{event.location}</span>
//               </div>
//               <div className="flex items-center gap-3 text-gray-700">
//                 <Users className="text-blue-600" size={20} />
//                 <span>
//                   {event.type === 'Team' 
//                     ? `Team Size: ${event.team_size_min} - ${event.team_size_max} Members` 
//                     : "Individual Event"}
//                 </span>
//               </div>
//             </div>

//             {/* THE REGISTER BUTTON */}
//             <Button 
//               onClick={() => setIsModalOpen(true)}
//               className="w-full py-6 text-lg font-bold shadow-md hover:shadow-lg transition-all bg-blue-600 hover:bg-blue-700"
//             >
//               Register Now
//             </Button>
            
//             <p className="text-xs text-center text-gray-500 mt-3">
//               Registration closes 24 hours before event
//             </p>

//             <div className="mt-6 pt-6 border-t flex justify-center gap-4">
//                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600">
//                  <Share2 size={16} /> Share
//                </button>
//                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600">
//                  <ShieldCheck size={16} /> Contact Host
//                </button>
//             </div>

//           </div>
//         </div>

//       </main>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import RegistrationModal from "@/components/RegistrationModal";
import ContactHostModal from "@/components/ContactHostModal"; // <--- Import New Modal
import { Calendar, MapPin, Users, Clock, Share2, ShieldCheck, Loader2, ArrowLeft, Check } from "lucide-react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function EventDetailsPage() {
  const { id } = useParams();
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false); // <--- State for Contact Modal
  const [hostEmail, setHostEmail] = useState(""); // <--- State to store host email

  useEffect(() => {
    const fetchEventDetails = async () => {
      if (!id) return;

      // Fetch Event + Join with Organizer Profile to get Email
      const { data: eventData, error } = await supabase
        .from('events')
        .select(`
          *,
          organizer:organizer_id ( email ) 
        `)
        .eq('id', id)
        .single();

      if (error) {
        console.error("Error fetching event:", error);
      } else {
        setEvent(eventData);
        // creating safe access to email just in case
        setHostEmail(eventData.organizer?.email || "support@campusconnect.com");
      }
      setLoading(false);
    };

    fetchEventDetails();
  }, [id]);

  // HANDLE SHARE FUNCTIONALITY
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: event.title,
          text: `Check out ${event.title} happening at ${event.location}!`,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard! 📋");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="animate-spin h-10 w-10 text-blue-600" />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Event Not Found</h1>
        <Link href="/events"><Button>Back to Events</Button></Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 relative">
      <Navbar />

      {/* MODALS */}
      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        eventTitle={event.title} 
      />
      
      <ContactHostModal 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        hostEmail={hostEmail}
        clubName={event.club_name || "Student Council"}
      />

      {/* Hero Image Header */}
      <div className="h-64 md:h-80 w-full relative bg-gray-900">
        <img 
          src={event.image_url || "https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=1200"} 
          alt={event.title} 
          className="w-full h-full object-cover opacity-50"
        />
        
        <Link href="/events" className="absolute top-6 left-6 z-10">
          <button className="bg-white/20 backdrop-blur hover:bg-white/30 text-white p-2 rounded-full transition">
            <ArrowLeft size={24} />
          </button>
        </Link>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-gray-900/90 to-transparent">
          <div className="max-w-5xl mx-auto">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3 inline-block uppercase tracking-wide">
              {event.category || "General"}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
              {event.title}
            </h1>
            <p className="text-gray-300 text-lg">
              Organized by: <span className="text-white font-semibold">{event.club_name || "Student Council"}</span>
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 mt-8 grid md:grid-cols-3 gap-8">
        
        {/* Left Column: Details */}
        <div className="md:col-span-2 space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">About the Event</h2>
            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {event.description || "No description provided."}
            </div>
          </div>
        </div>

        {/* Right Column: Action Card */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-lg border sticky top-24">
            <div className="flex justify-between items-center mb-6">
              <span className="text-3xl font-bold text-gray-900">Free</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                Open for All
              </span>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-gray-700">
                <Calendar className="text-blue-600" size={20} />
                <span className="font-medium">{new Date(event.date).toDateString()}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="text-blue-600" size={20} />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Users className="text-blue-600" size={20} />
                <span>
                  {event.type === 'Team' ? `Team Size: ${event.team_size_min}-${event.team_size_max}` : "Solo Event"}
                </span>
              </div>
            </div>

            <Button 
              onClick={() => setIsModalOpen(true)}
              className="w-full py-6 text-lg font-bold shadow-md hover:shadow-lg transition-all bg-blue-600 hover:bg-blue-700"
            >
              Register Now
            </Button>
            
            <p className="text-xs text-center text-gray-500 mt-3">
              Registration closes 24 hours before event
            </p>

            <div className="mt-6 pt-6 border-t flex justify-center gap-4">
               {/* Share Button */}
               <button 
                 onClick={handleShare}
                 className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 font-medium transition"
               >
                 <Share2 size={16} /> Share
               </button>

               {/* Contact Host Button */}
               <button 
                 onClick={() => setIsContactOpen(true)}
                 className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 font-medium transition"
               >
                 <ShieldCheck size={16} /> Contact Host
               </button>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}