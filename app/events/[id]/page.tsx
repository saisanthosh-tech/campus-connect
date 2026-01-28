// // // // // // // // "use client";

// // // // // // // // import { useState } from "react";
// // // // // // // // import Navbar from "@/components/Navbar";
// // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // import RegistrationModal from "@/components/RegistrationModal"; 
// // // // // // // // import { Calendar, MapPin, Users, Clock, Share2, ShieldCheck } from "lucide-react";

// // // // // // // // export default function EventDetailsPage({ params }: { params: { id: string } }) {
// // // // // // // //   // State to control the Modal visibility
// // // // // // // //   const [isModalOpen, setIsModalOpen] = useState(false);

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen bg-gray-50 pb-20 relative">
// // // // // // // //       <Navbar />

// // // // // // // //       {/* --- THE MODAL IS HERE (Hidden by default) --- */}
// // // // // // // //       <RegistrationModal 
// // // // // // // //         isOpen={isModalOpen} 
// // // // // // // //         onClose={() => setIsModalOpen(false)} 
// // // // // // // //         eventTitle="AI & Robotics Hackathon 2026" 
// // // // // // // //       />

// // // // // // // //       {/* 1. Hero Image Header */}
// // // // // // // //       <div className="h-64 md:h-80 w-full relative bg-gray-900">
// // // // // // // //         <img 
// // // // // // // //           src="https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=1200" 
// // // // // // // //           alt="Event Cover" 
// // // // // // // //           className="w-full h-full object-cover opacity-60"
// // // // // // // //         />
// // // // // // // //         <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-gray-900/90 to-transparent">
// // // // // // // //           <div className="max-w-5xl mx-auto">
// // // // // // // //             <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3 inline-block">
// // // // // // // //               Technical
// // // // // // // //             </span>
// // // // // // // //             <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
// // // // // // // //               AI & Robotics Hackathon 2026
// // // // // // // //             </h1>
// // // // // // // //             <p className="text-gray-300 text-lg">
// // // // // // // //               Organized by: <span className="text-white font-semibold">Robotics Club</span>
// // // // // // // //             </p>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       <main className="max-w-5xl mx-auto px-6 mt-8 grid md:grid-cols-3 gap-8">
        
// // // // // // // //         {/* 2. Left Column: Details */}
// // // // // // // //         <div className="md:col-span-2 space-y-8">
          
// // // // // // // //           <div className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
// // // // // // // //             <h2 className="text-2xl font-bold text-gray-900">About the Event</h2>
// // // // // // // //             <p className="text-gray-600 leading-relaxed">
// // // // // // // //               Join us for a 24-hour hackathon where you will build the future of AI. 
// // // // // // // //               Teams will compete to solve real-world problems using computer vision, 
// // // // // // // //               NLP, and robotics simulations. Mentors from top tech companies will be available 
// // // // // // // //               to guide you.
// // // // // // // //             </p>
            
// // // // // // // //             <h3 className="text-lg font-semibold text-gray-900 pt-4">Prerequisites</h3>
// // // // // // // //             <ul className="list-disc pl-5 text-gray-600 space-y-2">
// // // // // // // //               <li>Basic knowledge of Python or C++</li>
// // // // // // // //               <li>Laptop with charger (Extension cords provided)</li>
// // // // // // // //               <li>Valid College ID Card</li>
// // // // // // // //             </ul>
// // // // // // // //           </div>

// // // // // // // //           {/* Schedule / Timeline */}
// // // // // // // //           <div className="bg-white p-6 rounded-xl shadow-sm border">
// // // // // // // //             <h2 className="text-xl font-bold text-gray-900 mb-4">Event Schedule</h2>
// // // // // // // //             <div className="space-y-4">
// // // // // // // //               <div className="flex gap-4">
// // // // // // // //                 <div className="w-20 font-bold text-gray-500">09:00 AM</div>
// // // // // // // //                 <div>Check-in & Registration</div>
// // // // // // // //               </div>
// // // // // // // //               <div className="flex gap-4">
// // // // // // // //                 <div className="w-20 font-bold text-gray-500">10:00 AM</div>
// // // // // // // //                 <div>Opening Ceremony & Problem Statements</div>
// // // // // // // //               </div>
// // // // // // // //               <div className="flex gap-4">
// // // // // // // //                 <div className="w-20 font-bold text-blue-600">11:00 AM</div>
// // // // // // // //                 <div className="font-medium">Hacking Begins! 🚀</div>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* 3. Right Column: Action Card */}
// // // // // // // //         <div className="md:col-span-1">
// // // // // // // //           <div className="bg-white p-6 rounded-xl shadow-lg border sticky top-24">
// // // // // // // //             <div className="flex justify-between items-center mb-6">
// // // // // // // //               <span className="text-3xl font-bold text-gray-900">Free</span>
// // // // // // // //               <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
// // // // // // // //                 Open for All
// // // // // // // //               </span>
// // // // // // // //             </div>

// // // // // // // //             <div className="space-y-4 mb-6">
// // // // // // // //               <div className="flex items-center gap-3 text-gray-600">
// // // // // // // //                 <Calendar className="text-blue-600" size={20} />
// // // // // // // //                 <span>March 15, 2026</span>
// // // // // // // //               </div>
// // // // // // // //               <div className="flex items-center gap-3 text-gray-600">
// // // // // // // //                 <Clock className="text-blue-600" size={20} />
// // // // // // // //                 <span>09:00 AM - 05:00 PM</span>
// // // // // // // //               </div>
// // // // // // // //               <div className="flex items-center gap-3 text-gray-600">
// // // // // // // //                 <MapPin className="text-blue-600" size={20} />
// // // // // // // //                 <span>Main Auditorium, Block A</span>
// // // // // // // //               </div>
// // // // // // // //               <div className="flex items-center gap-3 text-gray-600">
// // // // // // // //                 <Users className="text-blue-600" size={20} />
// // // // // // // //                 <span>Team Size: 2-4 Members</span>
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //             {/* THE REGISTER BUTTON (Now connected to state) */}
// // // // // // // //             <Button 
// // // // // // // //               onClick={() => setIsModalOpen(true)}
// // // // // // // //               className="w-full py-6 text-lg font-semibold shadow-md hover:shadow-lg transition-all"
// // // // // // // //             >
// // // // // // // //               Register Now
// // // // // // // //             </Button>
            
// // // // // // // //             <p className="text-xs text-center text-gray-500 mt-3">
// // // // // // // //               Registration closes on March 14, 11:59 PM
// // // // // // // //             </p>

// // // // // // // //             <div className="mt-6 pt-6 border-t flex justify-center gap-4">
// // // // // // // //                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600">
// // // // // // // //                  <Share2 size={16} /> Share
// // // // // // // //                </button>
// // // // // // // //                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600">
// // // // // // // //                  <ShieldCheck size={16} /> Contact Host
// // // // // // // //                </button>
// // // // // // // //             </div>

// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //       </main>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // "use client";

// // // // // // // import { useEffect, useState } from "react";
// // // // // // // import Navbar from "@/components/Navbar";
// // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // import RegistrationModal from "@/components/RegistrationModal";
// // // // // // // import { Calendar, MapPin, Users, Clock, Share2, ShieldCheck, Loader2, ArrowLeft } from "lucide-react";
// // // // // // // import { supabase } from "@/lib/supabase";
// // // // // // // import Link from "next/link";
// // // // // // // import { useParams } from "next/navigation";

// // // // // // // export default function EventDetailsPage() {
// // // // // // //   const { id } = useParams(); // Get the ID from the URL (e.g., /events/12)
// // // // // // //   const [event, setEvent] = useState<any>(null);
// // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // //   const [isModalOpen, setIsModalOpen] = useState(false);

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchEventDetails = async () => {
// // // // // // //       if (!id) return;

// // // // // // //       const { data, error } = await supabase
// // // // // // //         .from('events')
// // // // // // //         .select('*')
// // // // // // //         .eq('id', id)
// // // // // // //         .single();

// // // // // // //       if (error) {
// // // // // // //         console.error("Error fetching event:", error);
// // // // // // //       } else {
// // // // // // //         setEvent(data);
// // // // // // //       }
// // // // // // //       setLoading(false);
// // // // // // //     };

// // // // // // //     fetchEventDetails();
// // // // // // //   }, [id]);

// // // // // // //   if (loading) {
// // // // // // //     return (
// // // // // // //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// // // // // // //         <Loader2 className="animate-spin h-10 w-10 text-blue-600" />
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   if (!event) {
// // // // // // //     return (
// // // // // // //       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
// // // // // // //         <h1 className="text-2xl font-bold text-gray-900 mb-2">Event Not Found</h1>
// // // // // // //         <p className="text-gray-500 mb-6">This event may have been deleted or the link is incorrect.</p>
// // // // // // //         <Link href="/events">
// // // // // // //           <Button>Back to Events</Button>
// // // // // // //         </Link>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-gray-50 pb-20 relative">
// // // // // // //       <Navbar />

// // // // // // //       {/* REGISTRATION MODAL */}
// // // // // // //       <RegistrationModal 
// // // // // // //         isOpen={isModalOpen} 
// // // // // // //         onClose={() => setIsModalOpen(false)} 
// // // // // // //         eventTitle={event.title} 
// // // // // // //       />

// // // // // // //       {/* 1. Hero Image Header */}
// // // // // // //       <div className="h-64 md:h-80 w-full relative bg-gray-900">
// // // // // // //         <img 
// // // // // // //           src={event.image_url || "https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=1200"} 
// // // // // // //           alt={event.title} 
// // // // // // //           className="w-full h-full object-cover opacity-50"
// // // // // // //         />
        
// // // // // // //         {/* Back Button */}
// // // // // // //         <Link href="/events" className="absolute top-6 left-6 z-10">
// // // // // // //           <button className="bg-white/20 backdrop-blur hover:bg-white/30 text-white p-2 rounded-full transition">
// // // // // // //             <ArrowLeft size={24} />
// // // // // // //           </button>
// // // // // // //         </Link>

// // // // // // //         <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-gray-900/90 to-transparent">
// // // // // // //           <div className="max-w-5xl mx-auto">
// // // // // // //             <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3 inline-block uppercase tracking-wide">
// // // // // // //               {event.category || "General"}
// // // // // // //             </span>
// // // // // // //             <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
// // // // // // //               {event.title}
// // // // // // //             </h1>
// // // // // // //             <p className="text-gray-300 text-lg">
// // // // // // //   Organized by: <span className="text-white font-semibold">{event.club_name || "Student Council"}</span>
// // // // // // // </p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <main className="max-w-5xl mx-auto px-6 mt-8 grid md:grid-cols-3 gap-8">
        
// // // // // // //         {/* 2. Left Column: Details */}
// // // // // // //         <div className="md:col-span-2 space-y-8">
          
// // // // // // //           <div className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
// // // // // // //             <h2 className="text-2xl font-bold text-gray-900">About the Event</h2>
// // // // // // //             <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
// // // // // // //               {event.description || "No description provided."}
// // // // // // //             </div>
            
// // // // // // //             <h3 className="text-lg font-semibold text-gray-900 pt-4">Prerequisites</h3>
// // // // // // //             <ul className="list-disc pl-5 text-gray-600 space-y-2">
// // // // // // //               <li>Valid College ID Card</li>
// // // // // // //               <li>Registration confirmation email</li>
// // // // // // //             </ul>
// // // // // // //           </div>

// // // // // // //           {/* Schedule / Timeline (Static for Demo) */}
// // // // // // //           <div className="bg-white p-6 rounded-xl shadow-sm border">
// // // // // // //             <h2 className="text-xl font-bold text-gray-900 mb-4">Event Schedule</h2>
// // // // // // //             <div className="space-y-4">
// // // // // // //               <div className="flex gap-4">
// // // // // // //                 <div className="w-20 font-bold text-gray-500">09:00 AM</div>
// // // // // // //                 <div>Check-in & Registration</div>
// // // // // // //               </div>
// // // // // // //               <div className="flex gap-4">
// // // // // // //                 <div className="w-20 font-bold text-gray-500">10:00 AM</div>
// // // // // // //                 <div>Opening Ceremony</div>
// // // // // // //               </div>
// // // // // // //               <div className="flex gap-4">
// // // // // // //                 <div className="w-20 font-bold text-blue-600">11:00 AM</div>
// // // // // // //                 <div className="font-medium">Event Begins 🚀</div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* 3. Right Column: Action Card */}
// // // // // // //         <div className="md:col-span-1">
// // // // // // //           <div className="bg-white p-6 rounded-xl shadow-lg border sticky top-24">
// // // // // // //             <div className="flex justify-between items-center mb-6">
// // // // // // //               <span className="text-3xl font-bold text-gray-900">Free</span>
// // // // // // //               <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
// // // // // // //                 Open for All
// // // // // // //               </span>
// // // // // // //             </div>

// // // // // // //             <div className="space-y-4 mb-6">
// // // // // // //               <div className="flex items-center gap-3 text-gray-700">
// // // // // // //                 <Calendar className="text-blue-600" size={20} />
// // // // // // //                 <span className="font-medium">{new Date(event.date).toDateString()}</span>
// // // // // // //               </div>
// // // // // // //               <div className="flex items-center gap-3 text-gray-700">
// // // // // // //                 <Clock className="text-blue-600" size={20} />
// // // // // // //                 <span>09:00 AM - 05:00 PM</span>
// // // // // // //               </div>
// // // // // // //               <div className="flex items-center gap-3 text-gray-700">
// // // // // // //                 <MapPin className="text-blue-600" size={20} />
// // // // // // //                 <span>{event.location}</span>
// // // // // // //               </div>
// // // // // // //               <div className="flex items-center gap-3 text-gray-700">
// // // // // // //                 <Users className="text-blue-600" size={20} />
// // // // // // //                 <span>
// // // // // // //                   {event.type === 'Team' 
// // // // // // //                     ? `Team Size: ${event.team_size_min} - ${event.team_size_max} Members` 
// // // // // // //                     : "Individual Event"}
// // // // // // //                 </span>
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             {/* THE REGISTER BUTTON */}
// // // // // // //             <Button 
// // // // // // //               onClick={() => setIsModalOpen(true)}
// // // // // // //               className="w-full py-6 text-lg font-bold shadow-md hover:shadow-lg transition-all bg-blue-600 hover:bg-blue-700"
// // // // // // //             >
// // // // // // //               Register Now
// // // // // // //             </Button>
            
// // // // // // //             <p className="text-xs text-center text-gray-500 mt-3">
// // // // // // //               Registration closes 24 hours before event
// // // // // // //             </p>

// // // // // // //             <div className="mt-6 pt-6 border-t flex justify-center gap-4">
// // // // // // //                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600">
// // // // // // //                  <Share2 size={16} /> Share
// // // // // // //                </button>
// // // // // // //                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600">
// // // // // // //                  <ShieldCheck size={16} /> Contact Host
// // // // // // //                </button>
// // // // // // //             </div>

// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //       </main>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }


// // // // // // "use client";

// // // // // // import { useEffect, useState } from "react";
// // // // // // import Navbar from "@/components/Navbar";
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import RegistrationModal from "@/components/RegistrationModal";
// // // // // // import ContactHostModal from "@/components/ContactHostModal"; // <--- Import New Modal
// // // // // // import { Calendar, MapPin, Users, Clock, Share2, ShieldCheck, Loader2, ArrowLeft, Check } from "lucide-react";
// // // // // // import { supabase } from "@/lib/supabase";
// // // // // // import Link from "next/link";
// // // // // // import { useParams } from "next/navigation";

// // // // // // export default function EventDetailsPage() {
// // // // // //   const { id } = useParams();
// // // // // //   const [event, setEvent] = useState<any>(null);
// // // // // //   const [loading, setLoading] = useState(true);
// // // // // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // // // // //   const [isContactOpen, setIsContactOpen] = useState(false); // <--- State for Contact Modal
// // // // // //   const [hostEmail, setHostEmail] = useState(""); // <--- State to store host email

// // // // // //   useEffect(() => {
// // // // // //     const fetchEventDetails = async () => {
// // // // // //       if (!id) return;

// // // // // //       // Fetch Event + Join with Organizer Profile to get Email
// // // // // //       const { data: eventData, error } = await supabase
// // // // // //         .from('events')
// // // // // //         .select(`
// // // // // //           *,
// // // // // //           organizer:organizer_id ( email ) 
// // // // // //         `)
// // // // // //         .eq('id', id)
// // // // // //         .single();

// // // // // //       if (error) {
// // // // // //         console.error("Error fetching event:", error);
// // // // // //       } else {
// // // // // //         setEvent(eventData);
// // // // // //         // creating safe access to email just in case
// // // // // //         setHostEmail(eventData.organizer?.email || "support@campusconnect.com");
// // // // // //       }
// // // // // //       setLoading(false);
// // // // // //     };

// // // // // //     fetchEventDetails();
// // // // // //   }, [id]);

// // // // // //   // HANDLE SHARE FUNCTIONALITY
// // // // // //   const handleShare = async () => {
// // // // // //     if (navigator.share) {
// // // // // //       try {
// // // // // //         await navigator.share({
// // // // // //           title: event.title,
// // // // // //           text: `Check out ${event.title} happening at ${event.location}!`,
// // // // // //           url: window.location.href,
// // // // // //         });
// // // // // //       } catch (err) {
// // // // // //         console.log("Error sharing:", err);
// // // // // //       }
// // // // // //     } else {
// // // // // //       // Fallback: Copy to clipboard
// // // // // //       navigator.clipboard.writeText(window.location.href);
// // // // // //       alert("Link copied to clipboard! 📋");
// // // // // //     }
// // // // // //   };

// // // // // //   if (loading) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// // // // // //         <Loader2 className="animate-spin h-10 w-10 text-blue-600" />
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   if (!event) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
// // // // // //         <h1 className="text-2xl font-bold text-gray-900 mb-2">Event Not Found</h1>
// // // // // //         <Link href="/events"><Button>Back to Events</Button></Link>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gray-50 pb-20 relative">
// // // // // //       <Navbar />

// // // // // //       {/* MODALS */}
// // // // // //       <RegistrationModal 
// // // // // //         isOpen={isModalOpen} 
// // // // // //         onClose={() => setIsModalOpen(false)} 
// // // // // //         eventTitle={event.title} 
// // // // // //       />
      
// // // // // //       <ContactHostModal 
// // // // // //         isOpen={isContactOpen}
// // // // // //         onClose={() => setIsContactOpen(false)}
// // // // // //         hostEmail={hostEmail}
// // // // // //         clubName={event.club_name || "Student Council"}
// // // // // //       />

// // // // // //       {/* Hero Image Header */}
// // // // // //       <div className="h-64 md:h-80 w-full relative bg-gray-900">
// // // // // //         <img 
// // // // // //           src={event.image_url || "https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=1200"} 
// // // // // //           alt={event.title} 
// // // // // //           className="w-full h-full object-cover opacity-50"
// // // // // //         />
        
// // // // // //         <Link href="/events" className="absolute top-6 left-6 z-10">
// // // // // //           <button className="bg-white/20 backdrop-blur hover:bg-white/30 text-white p-2 rounded-full transition">
// // // // // //             <ArrowLeft size={24} />
// // // // // //           </button>
// // // // // //         </Link>

// // // // // //         <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-gray-900/90 to-transparent">
// // // // // //           <div className="max-w-5xl mx-auto">
// // // // // //             <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3 inline-block uppercase tracking-wide">
// // // // // //               {event.category || "General"}
// // // // // //             </span>
// // // // // //             <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
// // // // // //               {event.title}
// // // // // //             </h1>
// // // // // //             <p className="text-gray-300 text-lg">
// // // // // //               Organized by: <span className="text-white font-semibold">{event.club_name || "Student Council"}</span>
// // // // // //             </p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <main className="max-w-5xl mx-auto px-6 mt-8 grid md:grid-cols-3 gap-8">
        
// // // // // //         {/* Left Column: Details */}
// // // // // //         <div className="md:col-span-2 space-y-8">
// // // // // //           <div className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
// // // // // //             <h2 className="text-2xl font-bold text-gray-900">About the Event</h2>
// // // // // //             <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
// // // // // //               {event.description || "No description provided."}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Right Column: Action Card */}
// // // // // //         <div className="md:col-span-1">
// // // // // //           <div className="bg-white p-6 rounded-xl shadow-lg border sticky top-24">
// // // // // //             <div className="flex justify-between items-center mb-6">
// // // // // //               <span className="text-3xl font-bold text-gray-900">Free</span>
// // // // // //               <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
// // // // // //                 Open for All
// // // // // //               </span>
// // // // // //             </div>

// // // // // //             <div className="space-y-4 mb-6">
// // // // // //               <div className="flex items-center gap-3 text-gray-700">
// // // // // //                 <Calendar className="text-blue-600" size={20} />
// // // // // //                 <span className="font-medium">{new Date(event.date).toDateString()}</span>
// // // // // //               </div>
// // // // // //               <div className="flex items-center gap-3 text-gray-700">
// // // // // //                 <MapPin className="text-blue-600" size={20} />
// // // // // //                 <span>{event.location}</span>
// // // // // //               </div>
// // // // // //               <div className="flex items-center gap-3 text-gray-700">
// // // // // //                 <Users className="text-blue-600" size={20} />
// // // // // //                 <span>
// // // // // //                   {event.type === 'Team' ? `Team Size: ${event.team_size_min}-${event.team_size_max}` : "Solo Event"}
// // // // // //                 </span>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             <Button 
// // // // // //               onClick={() => setIsModalOpen(true)}
// // // // // //               className="w-full py-6 text-lg font-bold shadow-md hover:shadow-lg transition-all bg-blue-600 hover:bg-blue-700"
// // // // // //             >
// // // // // //               Register Now
// // // // // //             </Button>
            
// // // // // //             <p className="text-xs text-center text-gray-500 mt-3">
// // // // // //               Registration closes 24 hours before event
// // // // // //             </p>

// // // // // //             <div className="mt-6 pt-6 border-t flex justify-center gap-4">
// // // // // //                {/* Share Button */}
// // // // // //                <button 
// // // // // //                  onClick={handleShare}
// // // // // //                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 font-medium transition"
// // // // // //                >
// // // // // //                  <Share2 size={16} /> Share
// // // // // //                </button>

// // // // // //                {/* Contact Host Button */}
// // // // // //                <button 
// // // // // //                  onClick={() => setIsContactOpen(true)}
// // // // // //                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 font-medium transition"
// // // // // //                >
// // // // // //                  <ShieldCheck size={16} /> Contact Host
// // // // // //                </button>
// // // // // //             </div>

// // // // // //           </div>
// // // // // //         </div>

// // // // // //       </main>
// // // // // //     </div>
// // // // // //   );
// // // // // // }



// // // // // "use client";

// // // // // import { useEffect, useState } from "react";
// // // // // import Navbar from "@/components/Navbar";
// // // // // import { Button } from "@/components/ui/button";
// // // // // import RegistrationModal from "@/components/RegistrationModal";
// // // // // import ContactHostModal from "@/components/ContactHostModal"; 
// // // // // import { Calendar, MapPin, Users, Clock, Share2, ShieldCheck, Loader2, ArrowLeft, Download, Table as TableIcon } from "lucide-react";
// // // // // import { supabase } from "@/lib/supabase";
// // // // // import Link from "next/link";
// // // // // import { useParams } from "next/navigation";

// // // // // export default function EventDetailsPage() {
// // // // //   const { id } = useParams();
// // // // //   const [event, setEvent] = useState<any>(null);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  
// // // // //   // Modals
// // // // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // // // //   const [isContactOpen, setIsContactOpen] = useState(false);
  
// // // // //   // Admin Data
// // // // //   const [registrationCount, setRegistrationCount] = useState(0);
// // // // //   const [participants, setParticipants] = useState<any[]>([]);
// // // // //   const [showAdminPanel, setShowAdminPanel] = useState(false);

// // // // //   useEffect(() => {
// // // // //     const fetchEventDetails = async () => {
// // // // //       if (!id) return;

// // // // //       // 1. Get Current User
// // // // //       const { data: { user } } = await supabase.auth.getUser();
// // // // //       setCurrentUserId(user?.id || null);

// // // // //       // 2. Get Event Details
// // // // //       const { data: eventData, error } = await supabase
// // // // //         .from('events')
// // // // //         .select(`*, organizer:organizer_id ( email )`)
// // // // //         .eq('id', id)
// // // // //         .single();

// // // // //       if (eventData) {
// // // // //         setEvent(eventData);

// // // // //         // 3. Get Registration Count (Public Info)
// // // // //         const { count } = await supabase
// // // // //           .from('registrations')
// // // // //           .select('*', { count: 'exact', head: true }) // 'head' means don't fetch data, just count
// // // // //           .eq('event_id', id);
        
// // // // //         setRegistrationCount(count || 0);

// // // // //         // 4. IF HOST: Fetch Participant List (Private Info)
// // // // //         if (user && user.id === eventData.organizer_id) {
// // // // //           const { data: participantData } = await supabase
// // // // //             .from('registrations')
// // // // //             .select(`
// // // // //               created_at,
// // // // //               team_name,
// // // // //               profiles:user_id ( full_name, email, college_id )
// // // // //             `)
// // // // //             .eq('event_id', id);
            
// // // // //           setParticipants(participantData || []);
// // // // //         }
// // // // //       }
// // // // //       setLoading(false);
// // // // //     };

// // // // //     fetchEventDetails();
// // // // //   }, [id]);

// // // // //   // Share Logic
// // // // //   const handleShare = async () => {
// // // // //     if (navigator.share) {
// // // // //       try { await navigator.share({ title: event.title, url: window.location.href }); } catch (err) {}
// // // // //     } else {
// // // // //       navigator.clipboard.writeText(window.location.href);
// // // // //       alert("Link copied!");
// // // // //     }
// // // // //   };

// // // // //   if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-blue-600" /></div>;
// // // // //   if (!event) return <div className="text-center py-20">Event not found</div>;

// // // // //   const isHost = currentUserId === event.organizer_id;

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gray-50 pb-20 relative">
// // // // //       <Navbar />
// // // // //       <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} eventTitle={event.title} />
// // // // //       <ContactHostModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} hostEmail={event.organizer?.email} clubName={event.club_name} />

// // // // //       {/* Hero Section */}
// // // // //       <div className="h-80 w-full relative bg-gray-900">
// // // // //         <img src={event.image_url} alt={event.title} className="w-full h-full object-cover opacity-40" />
// // // // //         <Link href="/events" className="absolute top-6 left-6 z-10"><button className="bg-white/20 p-2 rounded-full text-white"><ArrowLeft /></button></Link>
// // // // //         <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent">
// // // // //            <div className="max-w-5xl mx-auto">
// // // // //              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase mb-3 inline-block">{event.category}</span>
// // // // //              <h1 className="text-4xl font-bold text-white mb-2">{event.title}</h1>
// // // // //              <div className="flex items-center gap-4 text-gray-300">
// // // // //                <span className="font-semibold">By {event.club_name || "Student Council"}</span>
// // // // //                {/* THE PUBLIC COUNT DISPLAY */}
// // // // //                <span className="bg-white/20 px-3 py-1 rounded-full text-sm text-white flex items-center gap-2">
// // // // //                  <Users size={14} /> {registrationCount} Registered
// // // // //                </span>
// // // // //              </div>
// // // // //            </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       <main className="max-w-5xl mx-auto px-6 mt-8 grid md:grid-cols-3 gap-8">
// // // // //         <div className="md:col-span-2 space-y-8">
          
// // // // //           {/* --- ADMIN PANEL (Only Visible to Host) --- */}
// // // // //           {isHost && (
// // // // //             <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl animate-in fade-in">
// // // // //               <div className="flex justify-between items-center mb-4">
// // // // //                 <div>
// // // // //                   <h3 className="text-lg font-bold text-blue-900 flex items-center gap-2">
// // // // //                     <ShieldCheck size={20} /> Organizer Dashboard
// // // // //                   </h3>
// // // // //                   <p className="text-sm text-blue-700">You are hosting this event.</p>
// // // // //                 </div>
// // // // //                 <Button 
// // // // //                   onClick={() => setShowAdminPanel(!showAdminPanel)}
// // // // //                   variant="outline" 
// // // // //                   className="bg-white text-blue-700 hover:bg-blue-100 border-blue-200"
// // // // //                 >
// // // // //                   {showAdminPanel ? "Hide List" : "View Participants"}
// // // // //                 </Button>
// // // // //               </div>

// // // // //               {showAdminPanel && (
// // // // //                 <div className="bg-white rounded-lg border overflow-hidden mt-4 shadow-sm">
// // // // //                   <div className="p-3 bg-gray-100 border-b flex justify-between items-center">
// // // // //                     <span className="font-bold text-gray-700 text-sm">Total: {participants.length} Students</span>
// // // // //                     <button className="text-xs flex items-center gap-1 text-blue-600 font-bold hover:underline">
// // // // //                       <Download size={12} /> Export CSV
// // // // //                     </button>
// // // // //                   </div>
// // // // //                   <div className="max-h-60 overflow-y-auto">
// // // // //                     <table className="w-full text-sm text-left">
// // // // //                       <thead className="bg-gray-50 text-gray-500 font-medium">
// // // // //                         <tr>
// // // // //                           <th className="px-4 py-2">Name</th>
// // // // //                           <th className="px-4 py-2">Roll No</th>
// // // // //                           <th className="px-4 py-2">Team</th>
// // // // //                         </tr>
// // // // //                       </thead>
// // // // //                       <tbody className="divide-y">
// // // // //                         {participants.length === 0 ? (
// // // // //                            <tr><td colSpan={3} className="p-4 text-center text-gray-500">No registrations yet.</td></tr>
// // // // //                         ) : (
// // // // //                           participants.map((p, i) => (
// // // // //                             <tr key={i} className="hover:bg-gray-50">
// // // // //                               <td className="px-4 py-2 font-medium text-gray-900">{p.profiles?.full_name || "Unknown"}</td>
// // // // //                               <td className="px-4 py-2 text-gray-600">{p.profiles?.college_id || "N/A"}</td>
// // // // //                               <td className="px-4 py-2 text-gray-500">{p.team_name || "Solo"}</td>
// // // // //                             </tr>
// // // // //                           ))
// // // // //                         )}
// // // // //                       </tbody>
// // // // //                     </table>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>
// // // // //           )}

// // // // //           {/* Description */}
// // // // //           <div className="bg-white p-6 rounded-xl shadow-sm border">
// // // // //             <h2 className="text-xl font-bold text-gray-900 mb-4">About Event</h2>
// // // // //             <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{event.description}</p>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Action Card */}
// // // // //         <div className="md:col-span-1">
// // // // //           <div className="bg-white p-6 rounded-xl shadow-lg border sticky top-24">
// // // // //              {/* Date, Location, Time logic same as before... */}
// // // // //              <div className="space-y-4 mb-6">
// // // // //                 <div className="flex gap-3 text-gray-700"><Calendar className="text-blue-600"/> <span>{new Date(event.date).toDateString()}</span></div>
// // // // //                 <div className="flex gap-3 text-gray-700"><MapPin className="text-blue-600"/> <span>{event.location}</span></div>
// // // // //              </div>

// // // // //              <Button onClick={() => setIsModalOpen(true)} className="w-full py-6 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-md">
// // // // //                Register Now
// // // // //              </Button>
             
// // // // //              <div className="mt-6 pt-6 border-t flex justify-center gap-4">
// // // // //                <button onClick={handleShare} className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600"><Share2 size={16} /> Share</button>
// // // // //                <button onClick={() => setIsContactOpen(true)} className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600"><ShieldCheck size={16} /> Contact</button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </main>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // "use client";

// // // // import { useEffect, useState, useCallback } from "react";
// // // // import Navbar from "@/components/Navbar";
// // // // import { Button } from "@/components/ui/button";
// // // // import RegistrationModal from "@/components/RegistrationModal";
// // // // import ContactHostModal from "@/components/ContactHostModal"; 
// // // // import { Calendar, MapPin, Users, Share2, ShieldCheck, Loader2, ArrowLeft, Download, RefreshCw } from "lucide-react";
// // // // import { supabase } from "@/lib/supabase";
// // // // import Link from "next/link";
// // // // import { useParams } from "next/navigation";

// // // // export default function EventDetailsPage() {
// // // //   const { id } = useParams();
// // // //   const [event, setEvent] = useState<any>(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  
// // // //   // Modals
// // // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // // //   const [isContactOpen, setIsContactOpen] = useState(false);
  
// // // //   // Admin Data
// // // //   const [registrationCount, setRegistrationCount] = useState(0);
// // // //   const [participants, setParticipants] = useState<any[]>([]);
// // // //   const [showAdminPanel, setShowAdminPanel] = useState(false);

// // // //   // 1. Define the Fetch Function (Reusable for refresh)
// // // //   const fetchEventData = useCallback(async () => {
// // // //     if (!id) return;

// // // //     // Get User
// // // //     const { data: { user } } = await supabase.auth.getUser();
// // // //     setCurrentUserId(user?.id || null);

// // // //     // Get Event Info
// // // //     const { data: eventData } = await supabase
// // // //       .from('events')
// // // //       .select(`*, organizer:organizer_id ( email )`)
// // // //       .eq('id', id)
// // // //       .single();

// // // //     if (eventData) {
// // // //       setEvent(eventData);

// // // //       // Get LIVE Count
// // // //       const { count } = await supabase
// // // //         .from('registrations')
// // // //         .select('*', { count: 'exact', head: true })
// // // //         .eq('event_id', id);
      
// // // //       setRegistrationCount(count || 0);

// // // //       // If Host, Get LIVE List
// // // //       if (user && user.id === eventData.organizer_id) {
// // // //         const { data: list } = await supabase
// // // //           .from('registrations')
// // // //           .select(`
// // // //             created_at,
// // // //             team_name,
// // // //             profiles:user_id ( full_name, email, college_id )
// // // //           `)
// // // //           .eq('event_id', id)
// // // //           .order('created_at', { ascending: false }); // Newest first
          
// // // //         setParticipants(list || []);
// // // //       }
// // // //     }
// // // //     setLoading(false);
// // // //   }, [id]);

// // // //   // 2. Initial Load
// // // //   useEffect(() => {
// // // //     fetchEventData();
// // // //   }, [fetchEventData]);

// // // //   // Share Logic
// // // //   const handleShare = async () => {
// // // //     if (navigator.share) {
// // // //       try { await navigator.share({ title: event?.title, url: window.location.href }); } catch (err) {}
// // // //     } else {
// // // //       navigator.clipboard.writeText(window.location.href);
// // // //       alert("Link copied!");
// // // //     }
// // // //   };

// // // //   if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-blue-600" /></div>;
// // // //   if (!event) return <div className="text-center py-20">Event not found</div>;

// // // //   const isHost = currentUserId === event.organizer_id;

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-50 pb-20 relative">
// // // //       <Navbar />
      
// // // //       {/* MODAL CONNECTED TO REFRESH LOGIC */}
// // // //       <RegistrationModal 
// // // //         isOpen={isModalOpen} 
// // // //         onClose={() => setIsModalOpen(false)} 
// // // //         eventTitle={event.title} 
// // // //         eventId={id as string}
// // // //         onSuccess={() => {
// // // //           // This creates the "Instant Update" effect
// // // //           fetchEventData(); 
// // // //         }}
// // // //       />

// // // //       <ContactHostModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} hostEmail={event.organizer?.email} clubName={event.club_name} />

// // // //       {/* Hero Section */}
// // // //       <div className="h-80 w-full relative bg-gray-900">
// // // //         <img src={event.image_url} alt={event.title} className="w-full h-full object-cover opacity-40" />
// // // //         <Link href="/events" className="absolute top-6 left-6 z-10"><button className="bg-white/20 p-2 rounded-full text-white"><ArrowLeft /></button></Link>
// // // //         <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent">
// // // //            <div className="max-w-5xl mx-auto">
// // // //              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase mb-3 inline-block">{event.category}</span>
// // // //              <h1 className="text-4xl font-bold text-white mb-2">{event.title}</h1>
// // // //              <div className="flex items-center gap-4 text-gray-300">
// // // //                <span className="font-semibold">By {event.club_name || "Student Council"}</span>
               
// // // //                {/* LIVE COUNT BADGE */}
// // // //                <span className="bg-white/20 px-3 py-1 rounded-full text-sm text-white flex items-center gap-2 animate-in fade-in">
// // // //                  <Users size={14} /> 
// // // //                  <span className="font-bold">{registrationCount}</span> Registered
// // // //                </span>
// // // //              </div>
// // // //            </div>
// // // //         </div>
// // // //       </div>

// // // //       <main className="max-w-5xl mx-auto px-6 mt-8 grid md:grid-cols-3 gap-8">
// // // //         <div className="md:col-span-2 space-y-8">
          
// // // //           {/* --- HOST DASHBOARD (Only visible to Organizer) --- */}
// // // //           {isHost && (
// // // //             <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl animate-in fade-in slide-in-from-bottom-4">
// // // //               <div className="flex justify-between items-center mb-4">
// // // //                 <div>
// // // //                   <h3 className="text-lg font-bold text-blue-900 flex items-center gap-2">
// // // //                     <ShieldCheck size={20} /> Organizer Dashboard
// // // //                   </h3>
// // // //                   <p className="text-sm text-blue-700">Live overview of your event participants.</p>
// // // //                 </div>
// // // //                 <div className="flex gap-2">
// // // //                   <Button 
// // // //                     onClick={fetchEventData} 
// // // //                     size="sm" 
// // // //                     variant="ghost" 
// // // //                     className="text-blue-600 hover:bg-blue-100" 
// // // //                     title="Refresh Data"
// // // //                   >
// // // //                     <RefreshCw size={16} />
// // // //                   </Button>
// // // //                   <Button 
// // // //                     onClick={() => setShowAdminPanel(!showAdminPanel)}
// // // //                     variant="outline" 
// // // //                     className="bg-white text-blue-700 hover:bg-blue-100 border-blue-200"
// // // //                   >
// // // //                     {showAdminPanel ? "Hide List" : "View Participants"}
// // // //                   </Button>
// // // //                 </div>
// // // //               </div>

// // // //               {showAdminPanel && (
// // // //                 <div className="bg-white rounded-lg border overflow-hidden mt-4 shadow-sm animate-in zoom-in-95 duration-200">
// // // //                   <div className="p-3 bg-gray-100 border-b flex justify-between items-center">
// // // //                     <span className="font-bold text-gray-700 text-sm">Total: {participants.length} Students</span>
// // // //                     <button className="text-xs flex items-center gap-1 text-blue-600 font-bold hover:underline">
// // // //                       <Download size={12} /> Export CSV
// // // //                     </button>
// // // //                   </div>
// // // //                   <div className="max-h-60 overflow-y-auto">
// // // //                     <table className="w-full text-sm text-left">
// // // //                       <thead className="bg-gray-50 text-gray-500 font-medium sticky top-0">
// // // //                         <tr>
// // // //                           <th className="px-4 py-2">Name</th>
// // // //                           <th className="px-4 py-2">Roll No</th>
// // // //                           <th className="px-4 py-2">Team</th>
// // // //                           <th className="px-4 py-2">Email</th>
// // // //                         </tr>
// // // //                       </thead>
// // // //                       <tbody className="divide-y">
// // // //                         {participants.length === 0 ? (
// // // //                            <tr><td colSpan={4} className="p-4 text-center text-gray-500">No registrations yet.</td></tr>
// // // //                         ) : (
// // // //                           participants.map((p, i) => (
// // // //                             <tr key={i} className="hover:bg-gray-50">
// // // //                               <td className="px-4 py-2 font-medium text-gray-900">{p.profiles?.full_name || "Unknown"}</td>
// // // //                               <td className="px-4 py-2 text-gray-600">{p.profiles?.college_id || "N/A"}</td>
// // // //                               <td className="px-4 py-2 text-gray-500">{p.team_name}</td>
// // // //                               <td className="px-4 py-2 text-blue-600 truncate max-w-[150px]">{p.profiles?.email}</td>
// // // //                             </tr>
// // // //                           ))
// // // //                         )}
// // // //                       </tbody>
// // // //                     </table>
// // // //                   </div>
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //           )}

// // // //           <div className="bg-white p-6 rounded-xl shadow-sm border">
// // // //             <h2 className="text-xl font-bold text-gray-900 mb-4">About Event</h2>
// // // //             <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{event.description}</p>
// // // //           </div>
// // // //         </div>

// // // //         <div className="md:col-span-1">
// // // //           <div className="bg-white p-6 rounded-xl shadow-lg border sticky top-24">
// // // //              <div className="space-y-4 mb-6">
// // // //                 <div className="flex gap-3 text-gray-700"><Calendar className="text-blue-600"/> <span>{new Date(event.date).toDateString()}</span></div>
// // // //                 <div className="flex gap-3 text-gray-700"><MapPin className="text-blue-600"/> <span>{event.location}</span></div>
// // // //              </div>

// // // //              {/* Dynamic Button Text */}
// // // //              {isHost ? (
// // // //                <Button disabled className="w-full py-6 text-lg font-bold bg-gray-100 text-gray-500 cursor-not-allowed">
// // // //                  You are Hosting
// // // //                </Button>
// // // //              ) : (
// // // //                <Button onClick={() => setIsModalOpen(true)} className="w-full py-6 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-md">
// // // //                  Register Now
// // // //                </Button>
// // // //              )}
             
// // // //              <div className="mt-6 pt-6 border-t flex justify-center gap-4">
// // // //                <button onClick={handleShare} className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600"><Share2 size={16} /> Share</button>
// // // //                <button onClick={() => setIsContactOpen(true)} className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600"><ShieldCheck size={16} /> Contact</button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // }



// // // "use client";

// // // import { useEffect, useState, useCallback } from "react";
// // // import Navbar from "@/components/Navbar";
// // // import { Button } from "@/components/ui/button";
// // // import RegistrationModal from "@/components/RegistrationModal";
// // // import ContactHostModal from "@/components/ContactHostModal"; 
// // // import { Calendar, MapPin, Users, Share2, ShieldCheck, Loader2, ArrowLeft, Download, RefreshCw } from "lucide-react";
// // // import { supabase } from "@/lib/supabase";
// // // import Link from "next/link";
// // // import { useParams } from "next/navigation";

// // // export default function EventDetailsPage() {
// // //   const { id } = useParams();
// // //   const [event, setEvent] = useState<any>(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  
// // //   // Modals
// // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // //   const [isContactOpen, setIsContactOpen] = useState(false);
  
// // //   // Admin Data
// // //   const [registrationCount, setRegistrationCount] = useState(0);
// // //   const [participants, setParticipants] = useState<any[]>([]);
// // //   const [showAdminPanel, setShowAdminPanel] = useState(false);

// // //   // 1. Define the Fetch Function (Reusable for refresh)
// // //   const fetchEventData = useCallback(async () => {
// // //     if (!id) return;

// // //     // Get User
// // //     const { data: { user } } = await supabase.auth.getUser();
// // //     setCurrentUserId(user?.id || null);

// // //     // Get Event Info
// // //     const { data: eventData } = await supabase
// // //       .from('events')
// // //       .select(`*, organizer:organizer_id ( email )`)
// // //       .eq('id', id)
// // //       .single();

// // //     if (eventData) {
// // //       setEvent(eventData);

// // //       // Get LIVE Count
// // //       const { count } = await supabase
// // //         .from('registrations')
// // //         .select('*', { count: 'exact', head: true })
// // //         .eq('event_id', id);
      
// // //       setRegistrationCount(count || 0);

// // //       // If Host, Get LIVE List
// // //       if (user && user.id === eventData.organizer_id) {
// // //         const { data: list } = await supabase
// // //           .from('registrations')
// // //           .select(`
// // //             created_at,
// // //             team_name,
// // //             profiles:user_id ( full_name, email, college_id )
// // //           `)
// // //           .eq('event_id', id)
// // //           .order('created_at', { ascending: false }); // Newest first
          
// // //         setParticipants(list || []);
// // //       }
// // //     }
// // //     setLoading(false);
// // //   }, [id]);

// // //   // 2. Initial Load
// // //   useEffect(() => {
// // //     fetchEventData();
// // //   }, [fetchEventData]);

// // //   // Share Logic
// // //   const handleShare = async () => {
// // //     if (navigator.share) {
// // //       try { await navigator.share({ title: event?.title, url: window.location.href }); } catch (err) {}
// // //     } else {
// // //       navigator.clipboard.writeText(window.location.href);
// // //       alert("Link copied!");
// // //     }
// // //   };

// // //   if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-blue-600" /></div>;
// // //   if (!event) return <div className="text-center py-20">Event not found</div>;

// // //   const isHost = currentUserId === event.organizer_id;

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 pb-20 relative">
// // //       <Navbar />
      
// // //       {/* MODAL CONNECTED TO REFRESH LOGIC */}
// // //       <RegistrationModal 
// // //         isOpen={isModalOpen} 
// // //         onClose={() => setIsModalOpen(false)} 
// // //         eventTitle={event.title} 
// // //         eventId={id as string}
// // //         onSuccess={() => {
// // //           // This creates the "Instant Update" effect
// // //           fetchEventData(); 
// // //         }}
// // //       />

// // //       <ContactHostModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} hostEmail={event.organizer?.email} clubName={event.club_name} />

// // //       {/* Hero Section */}
// // //       <div className="h-80 w-full relative bg-gray-900">
// // //         <img src={event.image_url} alt={event.title} className="w-full h-full object-cover opacity-40" />
// // //         <Link href="/events" className="absolute top-6 left-6 z-10"><button className="bg-white/20 p-2 rounded-full text-white"><ArrowLeft /></button></Link>
// // //         <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent">
// // //            <div className="max-w-5xl mx-auto">
// // //              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase mb-3 inline-block">{event.category}</span>
// // //              <h1 className="text-4xl font-bold text-white mb-2">{event.title}</h1>
// // //              <div className="flex items-center gap-4 text-gray-300">
// // //                <span className="font-semibold">By {event.club_name || "Student Council"}</span>
               
// // //                {/* LIVE COUNT BADGE */}
// // //                <span className="bg-white/20 px-3 py-1 rounded-full text-sm text-white flex items-center gap-2 animate-in fade-in">
// // //                  <Users size={14} /> 
// // //                  <span className="font-bold">{registrationCount}</span> Registered
// // //                </span>
// // //              </div>
// // //            </div>
// // //         </div>
// // //       </div>

// // //       <main className="max-w-5xl mx-auto px-6 mt-8 grid md:grid-cols-3 gap-8">
// // //         <div className="md:col-span-2 space-y-8">
          
// // //           {/* --- HOST DASHBOARD (Only visible to Organizer) --- */}
// // //           {isHost && (
// // //             <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl animate-in fade-in slide-in-from-bottom-4">
// // //               <div className="flex justify-between items-center mb-4">
// // //                 <div>
// // //                   <h3 className="text-lg font-bold text-blue-900 flex items-center gap-2">
// // //                     <ShieldCheck size={20} /> Organizer Dashboard
// // //                   </h3>
// // //                   <p className="text-sm text-blue-700">Live overview of your event participants.</p>
// // //                 </div>
// // //                 <div className="flex gap-2">
// // //                   <Button 
// // //                     onClick={fetchEventData} 
// // //                     size="sm" 
// // //                     variant="ghost" 
// // //                     className="text-blue-600 hover:bg-blue-100" 
// // //                     title="Refresh Data"
// // //                   >
// // //                     <RefreshCw size={16} />
// // //                   </Button>
// // //                   <Button 
// // //                     onClick={() => setShowAdminPanel(!showAdminPanel)}
// // //                     variant="outline" 
// // //                     className="bg-white text-blue-700 hover:bg-blue-100 border-blue-200"
// // //                   >
// // //                     {showAdminPanel ? "Hide List" : "View Participants"}
// // //                   </Button>
// // //                 </div>
// // //               </div>

// // //               {showAdminPanel && (
// // //                 <div className="bg-white rounded-lg border overflow-hidden mt-4 shadow-sm animate-in zoom-in-95 duration-200">
// // //                   <div className="p-3 bg-gray-100 border-b flex justify-between items-center">
// // //                     <span className="font-bold text-gray-700 text-sm">Total: {participants.length} Students</span>
// // //                     <button className="text-xs flex items-center gap-1 text-blue-600 font-bold hover:underline">
// // //                       <Download size={12} /> Export CSV
// // //                     </button>
// // //                   </div>
// // //                   <div className="max-h-60 overflow-y-auto">
// // //                     <table className="w-full text-sm text-left">
// // //                       <thead className="bg-gray-50 text-gray-500 font-medium sticky top-0">
// // //                         <tr>
// // //                           <th className="px-4 py-2">Name</th>
// // //                           <th className="px-4 py-2">Roll No</th>
// // //                           <th className="px-4 py-2">Team</th>
// // //                           <th className="px-4 py-2">Email</th>
// // //                         </tr>
// // //                       </thead>
// // //                       <tbody className="divide-y">
// // //                         {participants.length === 0 ? (
// // //                            <tr><td colSpan={4} className="p-4 text-center text-gray-500">No registrations yet.</td></tr>
// // //                         ) : (
// // //                           participants.map((p, i) => (
// // //                             <tr key={i} className="hover:bg-gray-50">
// // //                               <td className="px-4 py-2 font-medium text-gray-900">{p.profiles?.full_name || "Unknown"}</td>
// // //                               <td className="px-4 py-2 text-gray-600">{p.profiles?.college_id || "N/A"}</td>
// // //                               <td className="px-4 py-2 text-gray-500">{p.team_name}</td>
// // //                               <td className="px-4 py-2 text-blue-600 truncate max-w-[150px]">{p.profiles?.email}</td>
// // //                             </tr>
// // //                           ))
// // //                         )}
// // //                       </tbody>
// // //                     </table>
// // //                   </div>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           )}

// // //           <div className="bg-white p-6 rounded-xl shadow-sm border">
// // //             <h2 className="text-xl font-bold text-gray-900 mb-4">About Event</h2>
// // //             <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{event.description}</p>
// // //           </div>
// // //         </div>

// // //         <div className="md:col-span-1">
// // //           <div className="bg-white p-6 rounded-xl shadow-lg border sticky top-24">
// // //              <div className="space-y-4 mb-6">
// // //                 <div className="flex gap-3 text-gray-700"><Calendar className="text-blue-600"/> <span>{new Date(event.date).toDateString()}</span></div>
// // //                 <div className="flex gap-3 text-gray-700"><MapPin className="text-blue-600"/> <span>{event.location}</span></div>
// // //              </div>

// // //              {/* Dynamic Button Text */}
// // //              {isHost ? (
// // //                <Button disabled className="w-full py-6 text-lg font-bold bg-gray-100 text-gray-500 cursor-not-allowed">
// // //                  You are Hosting
// // //                </Button>
// // //              ) : (
// // //                <Button onClick={() => setIsModalOpen(true)} className="w-full py-6 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-md">
// // //                  Register Now
// // //                </Button>
// // //              )}
             
// // //              <div className="mt-6 pt-6 border-t flex justify-center gap-4">
// // //                <button onClick={handleShare} className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600"><Share2 size={16} /> Share</button>
// // //                <button onClick={() => setIsContactOpen(true)} className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600"><ShieldCheck size={16} /> Contact</button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </main>
// // //     </div>
// // //   );
// // // }

// // "use client";

// // import { useEffect, useState, useCallback } from "react";
// // import Navbar from "@/components/Navbar";
// // import { Button } from "@/components/ui/button";
// // import RegistrationModal from "@/components/RegistrationModal";
// // import ContactHostModal from "@/components/ContactHostModal"; 
// // import { Calendar, MapPin, Users, Share2, ShieldCheck, Loader2, ArrowLeft, Download, RefreshCw } from "lucide-react";
// // import { supabase } from "@/lib/supabase";
// // import Link from "next/link";
// // import { useParams } from "next/navigation";

// // export default function EventDetailsPage() {
// //   const { id } = useParams();
// //   const [event, setEvent] = useState<any>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  
// //   // Modals
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [isContactOpen, setIsContactOpen] = useState(false);
  
// //   // Admin Data
// //   const [registrationCount, setRegistrationCount] = useState(0);
// //   const [participants, setParticipants] = useState<any[]>([]);
// //   const [showAdminPanel, setShowAdminPanel] = useState(false);

// //   // 1. Define the Fetch Function (Reusable)
// //   const fetchEventData = useCallback(async () => {
// //     if (!id) return;

// //     // Get User
// //     const { data: { user } } = await supabase.auth.getUser();
// //     setCurrentUserId(user?.id || null);

// //     // Get Event Info
// //     const { data: eventData } = await supabase
// //       .from('events')
// //       .select(`*, organizer:organizer_id ( email )`)
// //       .eq('id', id)
// //       .single();

// //     if (eventData) {
// //       setEvent(eventData);

// //       // Get LIVE Count
// //       const { count } = await supabase
// //         .from('registrations')
// //         .select('*', { count: 'exact', head: true })
// //         .eq('event_id', id);
      
// //       setRegistrationCount(count || 0);

// //       // If Host, Get LIVE List
// //       if (user && user.id === eventData.organizer_id) {
// //         const { data: list } = await supabase
// //           .from('registrations')
// //           .select(`
// //             created_at,
// //             team_name,
// //             profiles:user_id ( full_name, email, college_id )
// //           `)
// //           .eq('event_id', id)
// //           .order('created_at', { ascending: false }); // Newest first
          
// //         setParticipants(list || []);
// //       }
// //     }
// //     setLoading(false);
// //   }, [id]);

// //   // 2. Initial Load + REALTIME SUBSCRIPTION
// //   useEffect(() => {
// //     // A. Fetch initial data
// //     fetchEventData();

// //     // B. Setup Realtime Listener
// //     // This makes the page update AUTOMATICALLY when anyone registers
// //     const channel = supabase
// //       .channel('registrations_change')
// //       .on(
// //         'postgres_changes',
// //         {
// //           event: '*', // Listen for any change (Insert/Update/Delete)
// //           schema: 'public',
// //           table: 'registrations',
// //           filter: `event_id=eq.${id}` // Only for this specific event
// //         },
// //         () => {
// //           console.log("Database changed! Refreshing data...");
// //           fetchEventData(); // <--- Triggers the refresh
// //         }
// //       )
// //       .subscribe();

// //     // Cleanup when leaving page
// //     return () => {
// //       supabase.removeChannel(channel);
// //     };
// //   }, [id, fetchEventData]);

// //   // Share Logic
// //   const handleShare = async () => {
// //     if (navigator.share) {
// //       try { await navigator.share({ title: event?.title, url: window.location.href }); } catch (err) {}
// //     } else {
// //       navigator.clipboard.writeText(window.location.href);
// //       alert("Link copied!");
// //     }
// //   };

// //   if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-blue-600" /></div>;
// //   if (!event) return <div className="text-center py-20">Event not found</div>;

// //   const isHost = currentUserId === event.organizer_id;

// //   return (
// //     <div className="min-h-screen bg-gray-50 pb-20 relative">
// //       <Navbar />
      
// //       <RegistrationModal 
// //         isOpen={isModalOpen} 
// //         onClose={() => setIsModalOpen(false)} 
// //         eventTitle={event.title} 
// //         eventId={id as string}
// //         onSuccess={() => {
// //           // Manual trigger (Backup for Realtime)
// //           fetchEventData(); 
// //         }}
// //       />

// //       <ContactHostModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} hostEmail={event.organizer?.email} clubName={event.club_name} />

// //       {/* Hero Section */}
// //       <div className="h-80 w-full relative bg-gray-900">
// //         <img src={event.image_url} alt={event.title} className="w-full h-full object-cover opacity-40" />
// //         <Link href="/events" className="absolute top-6 left-6 z-10"><button className="bg-white/20 p-2 rounded-full text-white"><ArrowLeft /></button></Link>
// //         <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent">
// //            <div className="max-w-5xl mx-auto">
// //              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase mb-3 inline-block">{event.category}</span>
// //              <h1 className="text-4xl font-bold text-white mb-2">{event.title}</h1>
// //              <div className="flex items-center gap-4 text-gray-300">
// //                <span className="font-semibold">By {event.club_name || "Student Council"}</span>
               
// //                {/* LIVE COUNT BADGE */}
// //                <span className="bg-white/20 px-3 py-1 rounded-full text-sm text-white flex items-center gap-2 animate-in fade-in">
// //                  <Users size={14} /> 
// //                  <span className="font-bold">{registrationCount}</span> Registered
// //                </span>
// //              </div>
// //            </div>
// //         </div>
// //       </div>

// //       <main className="max-w-5xl mx-auto px-6 mt-8 grid md:grid-cols-3 gap-8">
// //         <div className="md:col-span-2 space-y-8">
          
// //           {/* --- HOST DASHBOARD (Only visible to Organizer) --- */}
// //           {isHost && (
// //             <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl animate-in fade-in slide-in-from-bottom-4">
// //               <div className="flex justify-between items-center mb-4">
// //                 <div>
// //                   <h3 className="text-lg font-bold text-blue-900 flex items-center gap-2">
// //                     <ShieldCheck size={20} /> Organizer Dashboard
// //                   </h3>
// //                   <p className="text-sm text-blue-700">Live overview of your event participants.</p>
// //                 </div>
// //                 <div className="flex gap-2">
// //                   <Button 
// //                     onClick={fetchEventData} 
// //                     size="sm" 
// //                     variant="ghost" 
// //                     className="text-blue-600 hover:bg-blue-100" 
// //                     title="Refresh Data"
// //                   >
// //                     <RefreshCw size={16} />
// //                   </Button>
// //                   <Button 
// //                     onClick={() => setShowAdminPanel(!showAdminPanel)}
// //                     variant="outline" 
// //                     className="bg-white text-blue-700 hover:bg-blue-100 border-blue-200"
// //                   >
// //                     {showAdminPanel ? "Hide List" : "View Participants"}
// //                   </Button>
// //                 </div>
// //               </div>

// //               {showAdminPanel && (
// //                 <div className="bg-white rounded-lg border overflow-hidden mt-4 shadow-sm animate-in zoom-in-95 duration-200">
// //                   <div className="p-3 bg-gray-100 border-b flex justify-between items-center">
// //                     <span className="font-bold text-gray-700 text-sm">Total: {participants.length} Students</span>
// //                     <button className="text-xs flex items-center gap-1 text-blue-600 font-bold hover:underline">
// //                       <Download size={12} /> Export CSV
// //                     </button>
// //                   </div>
// //                   <div className="max-h-60 overflow-y-auto">
// //                     <table className="w-full text-sm text-left">
// //                       <thead className="bg-gray-50 text-gray-500 font-medium sticky top-0">
// //                         <tr>
// //                           <th className="px-4 py-2">Name</th>
// //                           <th className="px-4 py-2">Roll No</th>
// //                           <th className="px-4 py-2">Team</th>
// //                           <th className="px-4 py-2">Email</th>
// //                         </tr>
// //                       </thead>
// //                       <tbody className="divide-y">
// //                         {participants.length === 0 ? (
// //                            <tr><td colSpan={4} className="p-4 text-center text-gray-500">No registrations yet.</td></tr>
// //                         ) : (
// //                           participants.map((p, i) => (
// //                             <tr key={i} className="hover:bg-gray-50">
// //                               <td className="px-4 py-2 font-medium text-gray-900">{p.profiles?.full_name || "Unknown"}</td>
// //                               <td className="px-4 py-2 text-gray-600">{p.profiles?.college_id || "N/A"}</td>
// //                               <td className="px-4 py-2 text-gray-500">{p.team_name}</td>
// //                               <td className="px-4 py-2 text-blue-600 truncate max-w-[150px]">{p.profiles?.email}</td>
// //                             </tr>
// //                           ))
// //                         )}
// //                       </tbody>
// //                     </table>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           )}

// //           <div className="bg-white p-6 rounded-xl shadow-sm border">
// //             <h2 className="text-xl font-bold text-gray-900 mb-4">About Event</h2>
// //             <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{event.description}</p>
// //           </div>
// //         </div>

// //         <div className="md:col-span-1">
// //           <div className="bg-white p-6 rounded-xl shadow-lg border sticky top-24">
// //              <div className="space-y-4 mb-6">
// //                 <div className="flex gap-3 text-gray-700"><Calendar className="text-blue-600"/> <span>{new Date(event.date).toDateString()}</span></div>
// //                 <div className="flex gap-3 text-gray-700"><MapPin className="text-blue-600"/> <span>{event.location}</span></div>
// //              </div>

// //              {isHost ? (
// //                <Button disabled className="w-full py-6 text-lg font-bold bg-gray-100 text-gray-500 cursor-not-allowed">
// //                  You are Hosting
// //                </Button>
// //              ) : (
// //                <Button onClick={() => setIsModalOpen(true)} className="w-full py-6 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-md">
// //                  Register Now
// //                </Button>
// //              )}
             
// //              <div className="mt-6 pt-6 border-t flex justify-center gap-4">
// //                <button onClick={handleShare} className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600"><Share2 size={16} /> Share</button>
// //                <button onClick={() => setIsContactOpen(true)} className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600"><ShieldCheck size={16} /> Contact</button>
// //             </div>
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }


// "use client";

// import { useEffect, useState, useCallback } from "react";
// import Navbar from "@/components/Navbar";
// import { Button } from "@/components/ui/button";
// import RegistrationModal from "@/components/RegistrationModal";
// import ContactHostModal from "@/components/ContactHostModal"; 
// import { Calendar, MapPin, Users, Share2, ShieldCheck, Loader2, ArrowLeft, Download, RefreshCw, Trash2, Clock, AlertTriangle } from "lucide-react";
// import { supabase } from "@/lib/supabase";
// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation"; // Added useRouter

// export default function EventDetailsPage() {
//   const { id } = useParams();
//   const router = useRouter(); // For redirect after delete
//   const [event, setEvent] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  
//   // Modals
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isContactOpen, setIsContactOpen] = useState(false);
  
//   // Admin Data
//   const [registrationCount, setRegistrationCount] = useState(0);
//   const [participants, setParticipants] = useState<any[]>([]);
//   const [showAdminPanel, setShowAdminPanel] = useState(false);
//   const [deleting, setDeleting] = useState(false); // Deleting state

//   const fetchEventData = useCallback(async () => {
//     if (!id) return;

//     const { data: { user } } = await supabase.auth.getUser();
//     setCurrentUserId(user?.id || null);

//     const { data: eventData } = await supabase
//       .from('events')
//       .select(`*, organizer:organizer_id ( email )`)
//       .eq('id', id)
//       .single();

//     if (eventData) {
//       setEvent(eventData);

//       const { count } = await supabase
//         .from('registrations')
//         .select('*', { count: 'exact', head: true })
//         .eq('event_id', id);
      
//       setRegistrationCount(count || 0);

//       if (user && user.id === eventData.organizer_id) {
//         const { data: list } = await supabase
//           .from('registrations')
//           .select(`
//             created_at,
//             team_name,
//             profiles:user_id ( full_name, email, college_id )
//           `)
//           .eq('event_id', id)
//           .order('created_at', { ascending: false }); 
          
//         setParticipants(list || []);
//       }
//     }
//     setLoading(false);
//   }, [id]);

//   useEffect(() => {
//     fetchEventData();
//     const channel = supabase
//       .channel('registrations_change')
//       .on('postgres_changes', { event: '*', schema: 'public', table: 'registrations', filter: `event_id=eq.${id}` }, () => fetchEventData())
//       .subscribe();

//     return () => { supabase.removeChannel(channel); };
//   }, [id, fetchEventData]);

//   // DELETE EVENT FUNCTION
//   const handleDeleteEvent = async () => {
//     if (!confirm("Are you sure you want to delete this event? This action cannot be undone.")) return;
    
//     setDeleting(true);
//     try {
//       // 1. Delete registrations first (optional if cascade is set, but safer)
//       await supabase.from('registrations').delete().eq('event_id', id);
      
//       // 2. Delete event
//       const { error } = await supabase.from('events').delete().eq('id', id);
      
//       if (error) throw error;
      
//       alert("Event deleted successfully.");
//       router.push("/events");
//     } catch (error: any) {
//       alert("Error deleting event: " + error.message);
//     } finally {
//       setDeleting(false);
//     }
//   };

//   const handleShare = async () => {
//     if (navigator.share) {
//       try { await navigator.share({ title: event?.title, url: window.location.href }); } catch (err) {}
//     } else {
//       navigator.clipboard.writeText(window.location.href);
//       alert("Link copied!");
//     }
//   };

//   if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-blue-600" /></div>;
//   if (!event) return <div className="text-center py-20">Event not found</div>;

//   const isHost = currentUserId === event.organizer_id;
  
//   // Deadline Check
//   const today = new Date();
//   const deadlineDate = event.deadline ? new Date(event.deadline) : null;
//   const isExpired = deadlineDate ? today > deadlineDate : false;

//   return (
//     <div className="min-h-screen bg-gray-50 pb-20 relative">
//       <Navbar />
      
//       <RegistrationModal 
//         isOpen={isModalOpen} 
//         onClose={() => setIsModalOpen(false)} 
//         eventTitle={event.title} 
//         eventId={id as string}
//         onSuccess={() => fetchEventData()}
//       />

//       <ContactHostModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} hostEmail={event.organizer?.email} clubName={event.club_name} />

//       {/* Hero Section */}
//       <div className="h-80 w-full relative bg-gray-900">
//         <img src={event.image_url} alt={event.title} className="w-full h-full object-cover opacity-40" />
//         <Link href="/events" className="absolute top-6 left-6 z-10"><button className="bg-white/20 p-2 rounded-full text-white"><ArrowLeft /></button></Link>
//         <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent">
//            <div className="max-w-5xl mx-auto">
//              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase mb-3 inline-block">{event.category}</span>
//              <h1 className="text-4xl font-bold text-white mb-2">{event.title}</h1>
//              <div className="flex items-center gap-4 text-gray-300">
//                <span className="font-semibold">By {event.club_name || "Student Council"}</span>
//                <span className="bg-white/20 px-3 py-1 rounded-full text-sm text-white flex items-center gap-2 animate-in fade-in">
//                  <Users size={14} /> <span className="font-bold">{registrationCount}</span> Registered
//                </span>
//              </div>
//            </div>
//         </div>
//       </div>

//       <main className="max-w-5xl mx-auto px-6 mt-8 grid md:grid-cols-3 gap-8">
//         <div className="md:col-span-2 space-y-8">
          
//           {/* HOST DASHBOARD */}
//           {isHost && (
//             <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl animate-in fade-in slide-in-from-bottom-4">
//               <div className="flex justify-between items-center mb-4">
//                 <div>
//                   <h3 className="text-lg font-bold text-blue-900 flex items-center gap-2">
//                     <ShieldCheck size={20} /> Organizer Dashboard
//                   </h3>
//                   <p className="text-sm text-blue-700">Manage your event.</p>
//                 </div>
//                 <div className="flex gap-2">
//                   <Button onClick={fetchEventData} size="sm" variant="ghost" className="text-blue-600 hover:bg-blue-100"><RefreshCw size={16} /></Button>
//                   <Button onClick={() => setShowAdminPanel(!showAdminPanel)} variant="outline" className="bg-white text-blue-700 hover:bg-blue-100 border-blue-200">
//                     {showAdminPanel ? "Hide List" : "View Participants"}
//                   </Button>
//                 </div>
//               </div>

//               {/* DELETE BUTTON SECTION */}
//               <div className="flex items-center justify-between bg-red-50 p-3 rounded-lg border border-red-100 mt-4">
//                  <div className="flex items-center gap-2 text-red-700 text-sm font-medium">
//                     <AlertTriangle size={16} />
//                     <span>Danger Zone: Delete this event?</span>
//                  </div>
//                  <Button 
//                    size="sm" 
//                    variant="destructive" 
//                    onClick={handleDeleteEvent} 
//                    disabled={deleting}
//                  >
//                    {deleting ? <Loader2 className="animate-spin h-4 w-4" /> : <Trash2 size={16} />} 
//                    <span className="ml-2">Delete Event</span>
//                  </Button>
//               </div>

//               {showAdminPanel && (
//                 <div className="bg-white rounded-lg border overflow-hidden mt-4 shadow-sm animate-in zoom-in-95 duration-200">
//                    <div className="p-3 bg-gray-100 border-b font-bold text-gray-700 text-sm">Total: {participants.length} Students</div>
//                    <div className="max-h-60 overflow-y-auto">
//                     <table className="w-full text-sm text-left">
//                       <thead className="bg-gray-50 text-gray-500 font-medium sticky top-0">
//                         <tr><th className="px-4 py-2">Name</th><th className="px-4 py-2">Roll No</th><th className="px-4 py-2">Team</th></tr>
//                       </thead>
//                       <tbody className="divide-y">
//                         {participants.length === 0 ? <tr><td colSpan={3} className="p-4 text-center text-gray-500">No registrations yet.</td></tr> : 
//                           participants.map((p, i) => <tr key={i}><td className="px-4 py-2">{p.profiles?.full_name}</td><td className="px-4 py-2">{p.profiles?.college_id}</td><td className="px-4 py-2">{p.team_name}</td></tr>)
//                         }
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}

//           <div className="bg-white p-6 rounded-xl shadow-sm border">
//             <h2 className="text-xl font-bold text-gray-900 mb-4">About Event</h2>
//             <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{event.description}</p>
//           </div>
//         </div>

//         <div className="md:col-span-1">
//           <div className="bg-white p-6 rounded-xl shadow-lg border sticky top-24">
//              <div className="space-y-4 mb-6">
//                 <div className="flex gap-3 text-gray-700"><Calendar className="text-blue-600"/> <span>{new Date(event.date).toDateString()}</span></div>
                
//                 {/* DEADLINE DISPLAY */}
//                 <div className="flex gap-3 text-gray-700">
//                   <Clock className={isExpired ? "text-red-500" : "text-blue-600"}/> 
//                   <span className={isExpired ? "text-red-600 font-bold" : ""}>
//                      {event.deadline ? `Deadline: ${new Date(event.deadline).toDateString()}` : "No Deadline"}
//                   </span>
//                 </div>

//                 <div className="flex gap-3 text-gray-700"><MapPin className="text-blue-600"/> <span>{event.location}</span></div>
//              </div>

//              {/* DYNAMIC REGISTER BUTTON */}
//              {isHost ? (
//                <Button disabled className="w-full py-6 text-lg font-bold bg-gray-100 text-gray-500 cursor-not-allowed">You are Hosting</Button>
//              ) : isExpired ? (
//                <Button disabled className="w-full py-6 text-lg font-bold bg-red-50 text-red-400 border border-red-100 cursor-not-allowed">
//                  Registration Closed 🚫
//                </Button>
//              ) : (
//                <Button onClick={() => setIsModalOpen(true)} className="w-full py-6 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-md">Register Now</Button>
//              )}
             
//              <div className="mt-6 pt-6 border-t flex justify-center gap-4">
//                <button onClick={handleShare} className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600"><Share2 size={16} /> Share</button>
//                <button onClick={() => setIsContactOpen(true)} className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600"><ShieldCheck size={16} /> Contact</button>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }



"use client";

import { useEffect, useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import RegistrationModal from "@/components/RegistrationModal";
import ContactHostModal from "@/components/ContactHostModal"; 
import { Calendar, MapPin, Users, Share2, ShieldCheck, Loader2, ArrowLeft, Download, RefreshCw, Trash2, Clock, AlertTriangle } from "lucide-react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function EventDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  
  // Modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  // Admin Data
  const [registrationCount, setRegistrationCount] = useState(0);
  const [participants, setParticipants] = useState<any[]>([]);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const fetchEventData = useCallback(async () => {
    if (!id) return;

    const { data: { user } } = await supabase.auth.getUser();
    setCurrentUserId(user?.id || null);

    const { data: eventData } = await supabase
      .from('events')
      .select(`*, organizer:organizer_id ( email )`)
      .eq('id', id)
      .single();

    if (eventData) {
      setEvent(eventData);

      const { count } = await supabase
        .from('registrations')
        .select('*', { count: 'exact', head: true })
        .eq('event_id', id);
      
      setRegistrationCount(count || 0);

      if (user && user.id === eventData.organizer_id) {
        const { data: list } = await supabase
          .from('registrations')
          .select(`
            created_at,
            team_name,
            profiles:user_id ( full_name, email, college_id )
          `)
          .eq('event_id', id)
          .order('created_at', { ascending: false }); 
          
        setParticipants(list || []);
      }
    }
    setLoading(false);
  }, [id]);

  useEffect(() => {
    fetchEventData();
    const channel = supabase
      .channel('registrations_change')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'registrations', filter: `event_id=eq.${id}` }, () => fetchEventData())
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [id, fetchEventData]);

  const handleDeleteEvent = async () => {
    if (!confirm("Are you sure you want to delete this event? This action cannot be undone.")) return;
    setDeleting(true);
    try {
      await supabase.from('registrations').delete().eq('event_id', id);
      const { error } = await supabase.from('events').delete().eq('id', id);
      if (error) throw error;
      alert("Event deleted successfully.");
      router.push("/events");
    } catch (error: any) {
      alert("Error deleting event: " + error.message);
    } finally {
      setDeleting(false);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try { await navigator.share({ title: event?.title, url: window.location.href }); } catch (err) {}
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied!");
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-blue-600" /></div>;
  if (!event) return <div className="text-center py-20">Event not found</div>;

  const isHost = currentUserId === event.organizer_id;
  
  const today = new Date();
  const deadlineDate = event.deadline ? new Date(event.deadline) : null;
  const isExpired = deadlineDate ? today > deadlineDate : false;

  return (
    <div className="min-h-screen bg-gray-50 pb-20 relative">
      <Navbar />
      
      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        eventTitle={event.title} 
        eventId={id as string}
        onSuccess={() => fetchEventData()}
      />

      <ContactHostModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} hostEmail={event.organizer?.email} clubName={event.club_name} />

      {/* Hero Section */}
      <div className="h-80 w-full relative bg-gray-900">
        <img src={event.image_url} alt={event.title} className="w-full h-full object-cover opacity-40" />
        <Link href="/events" className="absolute top-6 left-6 z-10"><button className="bg-white/20 p-2 rounded-full text-white"><ArrowLeft /></button></Link>
        <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent">
           <div className="max-w-5xl mx-auto">
             <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase mb-3 inline-block">{event.category}</span>
             <h1 className="text-4xl font-bold text-white mb-2">{event.title}</h1>
             <div className="flex items-center gap-4 text-gray-300">
               <span className="font-semibold">By {event.club_name || "Student Council"}</span>
               <span className="bg-white/20 px-3 py-1 rounded-full text-sm text-white flex items-center gap-2 animate-in fade-in">
                 <Users size={14} /> <span className="font-bold">{registrationCount}</span> Registered
               </span>
             </div>
           </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 mt-8 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          
          {/* HOST DASHBOARD */}
          {isHost && (
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl animate-in fade-in slide-in-from-bottom-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg font-bold text-blue-900 flex items-center gap-2">
                    <ShieldCheck size={20} /> Organizer Dashboard
                  </h3>
                  <p className="text-sm text-blue-700 font-medium">Manage your event.</p>
                </div>
                <div className="flex gap-2">
                  <Button onClick={fetchEventData} size="sm" variant="ghost" className="text-blue-700 hover:bg-blue-100"><RefreshCw size={16} /></Button>
                  <Button onClick={() => setShowAdminPanel(!showAdminPanel)} variant="outline" className="bg-white text-blue-700 hover:bg-blue-100 border-blue-200 font-bold">
                    {showAdminPanel ? "Hide List" : "View Participants"}
                  </Button>
                </div>
              </div>

              {/* DELETE BUTTON SECTION */}
              <div className="flex items-center justify-between bg-red-50 p-3 rounded-lg border border-red-100 mt-4">
                 <div className="flex items-center gap-2 text-red-700 text-sm font-bold">
                    <AlertTriangle size={16} />
                    <span>Danger Zone: Delete this event?</span>
                 </div>
                 <Button 
                   size="sm" 
                   variant="destructive" 
                   onClick={handleDeleteEvent} 
                   disabled={deleting}
                 >
                   {deleting ? <Loader2 className="animate-spin h-4 w-4" /> : <Trash2 size={16} />} 
                   <span className="ml-2 font-bold">Delete Event</span>
                 </Button>
              </div>

              {showAdminPanel && (
                <div className="bg-white rounded-lg border overflow-hidden mt-4 shadow-sm animate-in zoom-in-95 duration-200">
                   <div className="p-3 bg-gray-100 border-b font-bold text-black text-sm">Total: {participants.length} Students</div>
                   <div className="max-h-60 overflow-y-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-gray-100 text-black font-bold sticky top-0">
                        <tr><th className="px-4 py-3">Name</th><th className="px-4 py-3">Roll No</th><th className="px-4 py-3">Team</th></tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {participants.length === 0 ? <tr><td colSpan={3} className="p-4 text-center text-black font-medium">No registrations yet.</td></tr> : 
                          participants.map((p, i) => (
                            <tr key={i} className="hover:bg-gray-50">
                              <td className="px-4 py-3 font-bold text-black">{p.profiles?.full_name}</td>
                              <td className="px-4 py-3 font-medium text-black">{p.profiles?.college_id}</td>
                              <td className="px-4 py-3 font-medium text-black">{p.team_name}</td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h2 className="text-xl font-bold text-black mb-4">About Event</h2>
            <p className="text-black font-medium whitespace-pre-wrap leading-relaxed">{event.description}</p>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-lg border sticky top-24">
             <div className="space-y-4 mb-6">
                <div className="flex gap-3 text-black font-medium"><Calendar className="text-blue-600"/> <span>{new Date(event.date).toDateString()}</span></div>
                
                {/* DEADLINE DISPLAY */}
                <div className="flex gap-3 text-black font-medium">
                  <Clock className={isExpired ? "text-red-500" : "text-blue-600"}/> 
                  <span className={isExpired ? "text-red-600 font-bold" : ""}>
                     {event.deadline ? `Deadline: ${new Date(event.deadline).toDateString()}` : "No Deadline"}
                  </span>
                </div>

                <div className="flex gap-3 text-black font-medium"><MapPin className="text-blue-600"/> <span>{event.location}</span></div>
             </div>

             {/* DYNAMIC REGISTER BUTTON */}
             {isHost ? (
               <Button disabled className="w-full py-6 text-lg font-bold bg-gray-100 text-gray-500 cursor-not-allowed border border-gray-200">You are Hosting</Button>
             ) : isExpired ? (
               <Button disabled className="w-full py-6 text-lg font-bold bg-red-50 text-red-500 border border-red-200 cursor-not-allowed">
                 Registration Closed 🚫
               </Button>
             ) : (
               <Button onClick={() => setIsModalOpen(true)} className="w-full py-6 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-md">Register Now</Button>
             )}
             
             <div className="mt-6 pt-6 border-t flex justify-center gap-4">
               <button onClick={handleShare} className="flex items-center gap-2 text-sm text-black hover:text-blue-600 font-bold"><Share2 size={16} /> Share</button>
               <button onClick={() => setIsContactOpen(true)} className="flex items-center gap-2 text-sm text-black hover:text-blue-600 font-bold"><ShieldCheck size={16} /> Contact</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}