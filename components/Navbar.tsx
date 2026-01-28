"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LogOut, Ticket, Settings, ChevronDown, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  
  // State for Real User Data
  const [profile, setProfile] = useState({
    fullName: "Student",
    email: "",
    avatarUrl: "https://github.com/shadcn.png" // Default if no image
  });

  // Fetch Real Data on Mount
  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data } = await supabase
        .from('profiles')
        .select('full_name, avatar_url, email')
        .eq('id', user.id)
        .single();

      if (data) {
        setProfile({
          fullName: data.full_name || "Student",
          email: user.email || "",
          avatarUrl: data.avatar_url || "https://github.com/shadcn.png"
        });
      }
    };

    fetchUser();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
               <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
               </svg>
            </div>
            <span className="text-xl font-bold text-blue-900 tracking-tight">CampusConnect</span>
          </Link>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition">
              Browse Events
            </Link>
            <Link href="/dashboard/my-events" className="text-gray-600 hover:text-blue-600 font-medium transition">
              My Tickets
            </Link>
          </div>

          {/* Right Side: Profile & Actions */}
          <div className="flex items-center gap-4">
            <Link href="/dashboard/organizer">
              <Button variant="default" className="hidden sm:flex bg-gray-900 text-white hover:bg-black">
                <Plus size={16} className="mr-2"/> Host Event
              </Button>
            </Link>

            {/* Profile Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 focus:outline-none hover:bg-gray-100 p-1 rounded-full transition"
              >
                {/* DYNAMIC IMAGE HERE */}
                <div className="h-9 w-9 rounded-full bg-gray-200 overflow-hidden border border-gray-300">
                  <img src={profile.avatarUrl} alt="Profile" className="h-full w-full object-cover" />
                </div>
                <ChevronDown size={16} className="text-gray-500 hidden sm:block" />
              </button>

              {/* The Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-lg border py-2 animate-in fade-in slide-in-from-top-2">
                  
                  {/* Dropdown Header (DYNAMIC DATA) */}
                  <div className="px-4 py-3 border-b bg-gray-50">
                    <p className="text-xs font-medium text-gray-500 uppercase">Signed in as</p>
                    <p className="text-sm font-bold text-gray-900 truncate">{profile.fullName}</p>
                    <p className="text-xs text-gray-500 truncate">{profile.email}</p>
                  </div>

                  {/* Menu Items */}
                  <div className="py-1">
                    <Link 
                      href="/dashboard/profile" 
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      <Settings size={16} />
                      Profile Settings
                    </Link>

                    <Link 
                      href="/dashboard/my-events" 
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      <Ticket size={16} />
                      My Tickets
                    </Link>
                  </div>

                  <div className="border-t my-1"></div>

                  <button 
                    onClick={handleSignOut}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition text-left"
                  >
                    <LogOut size={16} />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
            
            {/* Overlay to close dropdown if clicking outside */}
            {isDropdownOpen && (
              <div 
                className="fixed inset-0 z-[-1]" 
                onClick={() => setIsDropdownOpen(false)}
              ></div>
            )}

          </div>
        </div>
      </div>
    </nav>
  );
}