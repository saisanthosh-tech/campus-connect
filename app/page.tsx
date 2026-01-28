import Navbar from "@/components/Navbar";
import EventCard from "@/components/ui/EventCard"; 
// ^ Note: If your EventCard is directly in components, use "@/components/EventCard"
import Link from "next/link";
import { Search } from "lucide-react";

export default function Home() {
  // Dummy data for the Demo
  const featuredEvents = [
    {
      id: 1,
      title: "AI & Robotics Hackathon 2026",
      date: "March 15, 2026",
      category: "Technical",
      type: "Team" as "Team",
      image: "https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Inter-College Cricket Cup",
      date: "April 02, 2026",
      category: "Sports",
      type: "Team" as "Team",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "UI/UX Design Workshop",
      date: "March 20, 2026",
      category: "Workshop",
      type: "Solo" as "Solo",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight">
              Discover & Manage <br /> 
              <span className="text-blue-400">College Events</span>
            </h1>
            <p className="text-lg text-blue-100">
              The one-stop platform for hackathons, cultural fests, and workshops. 
              Join a team or host your own event in seconds.
            </p>
            
            <div className="flex gap-4 pt-4">
              <Link href="/events">
                <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                  Browse Events
                </button>
              </Link>
              <Link href="/dashboard/organizer">
                <button className="border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition">
                  Host Event
                </button>
              </Link>
            </div>
          </div>

          {/* Hero Image / Illustration */}
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" 
              alt="Students collaborating" 
              className="rounded-2xl shadow-2xl border-4 border-white/20"
            />
          </div>
        </div>
      </section>

      {/* SEARCH BAR SECTION */}
      <div className="max-w-4xl mx-auto -mt-8 relative z-10 px-4">
        <div className="bg-white p-4 rounded-xl shadow-lg flex gap-4 items-center">
          <Search className="text-gray-400 ml-2" />
          <input 
            type="text" 
            placeholder="Search for hackathons, workshops..." 
            className="flex-grow outline-none text-gray-700 placeholder-gray-400"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>

      {/* FEATURED EVENTS GRID */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        {/* <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Events</h2>
          <Link href="/events" className="text-blue-600 font-semibold hover:underline">
            View all &rarr;
          </Link>
        </div> */}

        <div className="flex justify-between items-end mb-8">
  <h2 className="text-2xl font-bold text-gray-900">Featured Events</h2>
  {/* The Link Component makes it clickable */}
  <Link href="/events" className="text-blue-600 font-semibold hover:underline flex items-center gap-1">
    View all &rarr;
  </Link>
</div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <EventCard 
              key={event.id}
              {...event}
            />
          ))}
        </div>
      </section>
    </div>
  );
}