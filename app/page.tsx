// import Navbar from "@/components/Navbar";
// import EventCard from "@/components/ui/EventCard"; 
// // ^ Note: If your EventCard is directly in components, use "@/components/EventCard"
// import Link from "next/link";
// import { Search } from "lucide-react";

// export default function Home() {
//   // Dummy data for the Demo
//   const featuredEvents = [
//     {
//       id: 1,
//       title: "AI & Robotics Hackathon 2026",
//       date: "March 15, 2026",
//       category: "Technical",
//       type: "Team" as "Team",
//       image: "https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=800",
//     },
//     {
//       id: 2,
//       title: "Inter-College Cricket Cup",
//       date: "April 02, 2026",
//       category: "Sports",
//       type: "Team" as "Team",
//       image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800",
//     },
//     {
//       id: 3,
//       title: "UI/UX Design Workshop",
//       date: "March 20, 2026",
//       category: "Workshop",
//       type: "Solo" as "Solo",
//       image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       <Navbar />

//       {/* HERO SECTION */}
//       <section className="bg-blue-900 text-white py-20 px-6">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
//           <div className="md:w-1/2 space-y-6">
//             <h1 className="text-5xl font-extrabold leading-tight">
//               Discover & Manage <br /> 
//               <span className="text-blue-400">College Events</span>
//             </h1>
//             <p className="text-lg text-blue-100">
//               The one-stop platform for hackathons, cultural fests, and workshops. 
//               Join a team or host your own event in seconds.
//             </p>
            
//             <div className="flex gap-4 pt-4">
//               <Link href="/events">
//                 <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
//                   Browse Events
//                 </button>
//               </Link>
//               <Link href="/dashboard/organizer">
//                 <button className="border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition">
//                   Host Event
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Hero Image / Illustration */}
//           <div className="md:w-1/2">
//             <img 
//               src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" 
//               alt="Students collaborating" 
//               className="rounded-2xl shadow-2xl border-4 border-white/20"
//             />
//           </div>
//         </div>
//       </section>

//       {/* SEARCH BAR SECTION */}
//       <div className="max-w-4xl mx-auto -mt-8 relative z-10 px-4">
//         <div className="bg-white p-4 rounded-xl shadow-lg flex gap-4 items-center">
//           <Search className="text-gray-400 ml-2" />
//           <input 
//             type="text" 
//             placeholder="Search for hackathons, workshops..." 
//             className="flex-grow outline-none text-gray-700 placeholder-gray-400"
//           />
//           <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">
//             Search
//           </button>
//         </div>
//       </div>

//       {/* FEATURED EVENTS GRID */}
//       <section className="max-w-6xl mx-auto py-16 px-6">
//         {/* <div className="flex justify-between items-end mb-8">
//           <h2 className="text-3xl font-bold text-gray-900">Featured Events</h2>
//           <Link href="/events" className="text-blue-600 font-semibold hover:underline">
//             View all &rarr;
//           </Link>
//         </div> */}

//         <div className="flex justify-between items-end mb-8">
//   <h2 className="text-2xl font-bold text-gray-900">Featured Events</h2>
//   {/* The Link Component makes it clickable */}
//   <Link href="/events" className="text-blue-600 font-semibold hover:underline flex items-center gap-1">
//     View all &rarr;
//   </Link>
// </div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {featuredEvents.map((event) => (
//             <EventCard 
//               key={event.id}
//               {...event}
//             />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Users, ArrowRight, Loader2, MapPin } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentEvents = async () => {
      // Fetch the 3 most recent events
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true }) // Soonest events first
        .limit(3);

      if (data) {
        setEvents(data);
      }
      setLoading(false);
    };

    fetchRecentEvents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Discover & Host <br/> 
            <span className="text-blue-400">Amazing Campus Events</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            The all-in-one platform for students to organize hackathons, workshops, and cultural fests.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Link href="/events">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-bold">
                Browse Events
              </Button>
            </Link>
            <Link href="/dashboard/organizer">
               <Button size="lg" variant="outline" className="border-blue-400 text-blue-100 hover:bg-blue-800 hover:text-white">
                Host an Event
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <main className="max-w-7xl mx-auto px-6 -mt-10">
        <div className="bg-white rounded-xl shadow-xl border p-8">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Events</h2>
            <Link href="/events" className="text-blue-600 font-semibold hover:underline flex items-center gap-1">
              View all <ArrowRight size={16}/>
            </Link>
          </div>

          {loading ? (
             <div className="flex justify-center py-10">
               <Loader2 className="animate-spin h-8 w-8 text-blue-600" />
             </div>
          ) : events.length === 0 ? (
             <div className="text-center py-10 text-gray-500">
               No upcoming events found. Be the first to host one!
             </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {events.map((event) => (
                <div key={event.id} className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col h-full">
                  <div className="h-48 bg-gray-100 relative overflow-hidden">
                    <img 
                      src={event.image_url || "https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=1000"} 
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-gray-800 uppercase">
                      {event.category}
                    </div>
                  </div>
                  
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1">{event.title}</h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-blue-600"/>
                          <span>{new Date(event.date).toDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <MapPin size={14} className="text-blue-600"/>
                           <span className="truncate">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={14} className="text-blue-600"/>
                          <span>{event.type} Event</span>
                        </div>
                      </div>
                    </div>

                    <Link href={`/events/${event.id}`} className="mt-4 block">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">View Details</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}