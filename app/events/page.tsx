"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { Calendar, MapPin, Users, Search, Loader2, ArrowRight } from "lucide-react";

export default function AllEventsPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      // Fetch all events from Supabase
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true }); // Show nearest events first

      if (error) {
        console.error("Error fetching events:", error);
      } else {
        setEvents(data || []);
      }
      setLoading(false);
    };

    fetchEvents();
  }, []);

  // Filter events based on search
  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar />

      {/* Header Section */}
      <div className="bg-blue-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Explore Campus Events</h1>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl">
            Discover hackathons, workshops, cultural fests, and sports tournaments happening across the campus.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by event name or category..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg font-medium"
            />
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-blue-600 h-10 w-10" />
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-2xl font-bold text-gray-900">No events found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or check back later.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 overflow-hidden flex flex-col h-full">
                
                {/* Event Image */}
                <div className="h-48 w-full bg-gray-200 relative">
                  <img 
                    src={event.image_url || "https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=1000"} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image fails to load
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=1000";
                    }}
                  />
                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase shadow-sm">
                    {event.category}
                  </span>
                </div>

                {/* Event Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{event.title}</h3>
                    
                    <div className="space-y-2 text-gray-600 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar size={16} className="text-blue-600" />
                        <span>{new Date(event.date).toDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin size={16} className="text-blue-600" />
                        <span className="truncate">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users size={16} className="text-blue-600" />
                        <span>{event.type} Event</span>
                      </div>
                    </div>
                  </div>

                  <Link href={`/events/${event.id}`}>
                    <button className="w-full mt-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-semibold transition flex items-center justify-center gap-2">
                      View Details <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}