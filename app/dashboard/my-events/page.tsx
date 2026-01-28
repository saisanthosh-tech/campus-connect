"use client";

import Navbar from "@/components/Navbar";
import { Calendar, MapPin, QrCode, Download, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MyEventsPage() {
  // Mock Data: In a real app, this comes from Supabase
  const myTickets = [
    {
      id: 1,
      title: "AI & Robotics Hackathon 2026",
      date: "March 15, 2026",
      venue: "Main Auditorium",
      status: "Confirmed",
      role: "Team Leader",
      teamName: "Code Warriors",
      image: "https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      title: "UI/UX Design Workshop",
      date: "March 20, 2026",
      venue: "Lab 304, Block B",
      status: "Confirmed",
      role: "Participant",
      teamName: null, // Solo event
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Tickets</h1>
        <p className="text-gray-600 mb-8">Manage your upcoming events and team codes.</p>

        <div className="space-y-6">
          {myTickets.map((ticket) => (
            <div 
              key={ticket.id} 
              className="bg-white rounded-xl shadow-sm border overflow-hidden flex flex-col md:flex-row hover:shadow-md transition"
            >
              {/* Image Section */}
              <div className="w-full md:w-48 h-48 md:h-auto bg-gray-200">
                <img 
                  src={ticket.image} 
                  alt={ticket.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details Section */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{ticket.title}</h3>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
                      {ticket.status}
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-gray-600 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-blue-600" />
                      <span>{ticket.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-blue-600" />
                      <span>{ticket.venue}</span>
                    </div>
                    {ticket.teamName && (
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-purple-600" />
                        <span className="font-semibold text-purple-700">{ticket.teamName} ({ticket.role})</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t flex flex-wrap gap-3">
                   <Button variant="outline" className="flex items-center gap-2 border-gray-300">
                     <QrCode size={16} /> View QR Code
                   </Button>
                   <Button variant="outline" className="flex items-center gap-2 border-gray-300">
                     <Download size={16} /> Download Pass
                   </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}