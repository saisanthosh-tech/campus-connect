"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { User, Mail, Hash, Camera, Save, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [user, setUser] = useState<any>(null);
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    collegeId: "",
    bio: "",
    avatar_url: "https://github.com/shadcn.png"
  });

  // 1. Fetch Real Data on Load
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          router.push("/login");
          return;
        }
        setUser(user);

        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (data) {
          setFormData({
            fullName: data.full_name || "",
            email: user.email || "", 
            collegeId: data.college_id || "",
            bio: data.bio || "",
            avatar_url: data.avatar_url || "https://github.com/shadcn.png"
          });
        } else {
          setFormData({
            fullName: user.user_metadata.full_name || "",
            email: user.email || "",
            collegeId: user.user_metadata.college_id || "",
            bio: "",
            avatar_url: "https://github.com/shadcn.png"
          });
        }
      } catch (error) {
        console.error("Error loading profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  // 2. Save Changes to Supabase (FIXED HERE)
  const handleSave = async () => {
    setSaving(true);
    try {
      if (!user) return;

    //   const updates = {
    //     id: user.id,
    //     full_name: formData.fullName,
    //     bio: formData.bio,
    //     college_id: formData.collegeId,
    //     email: formData.email,
    //     // REMOVED: updated_at line to fix the error
    //   };
    // ... inside handleSave function ...
      const updates = {
        id: user.id,
        full_name: formData.fullName,
        bio: formData.bio,
        college_id: formData.collegeId,
        email: formData.email,
        avatar_url: formData.avatar_url, // <--- MAKE SURE THIS IS ADDED
      };
  // ... rest of function ...
      const { error } = await supabase.from('profiles').upsert(updates);

      if (error) throw error;
      alert("✅ Profile updated successfully!");
    } catch (error: any) {
      alert("Error updating profile: " + error.message);
    } finally {
      setSaving(false);
    }
  };

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       const file = e.target.files[0];
//       const fakeUrl = URL.createObjectURL(file);
//       setFormData({ ...formData, avatar_url: fakeUrl });
//     }
//   };

   // DEMO TRICK: Use DiceBear API to generate cool avatars based on name
  // This ensures the image URL is always valid and savable
  const generateNewAvatar = () => {
    const randomStyle = Math.floor(Math.random() * 1000);
    const newUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.fullName}${randomStyle}`;
    setFormData({ ...formData, avatar_url: newUrl });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="animate-spin h-8 w-8 text-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Account Settings</h1>
        <p className="text-gray-600 mb-8">Manage your profile and preferences.</p>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Profile Picture */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm border text-center space-y-4">
              <div className="relative inline-block group">
                <img 
                  src={formData.avatar_url} 
                  alt="Profile" 
                  className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-gray-100 shadow-md"
                />
                <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition shadow-sm">
                  <Camera size={16} />
                  <input type="file" className="hidden" accept="image/*" onChange={generateNewAvatar} />
                </label>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{formData.fullName}</h3>
                <p className="text-xs text-gray-500 uppercase font-bold">{formData.collegeId}</p>
              </div>
            </div>
          </div>

          {/* Form Details */}
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-sm border space-y-6">
              <h2 className="text-xl font-bold text-gray-900 border-b pb-4">Personal Information</h2>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 pl-10 text-sm text-gray-900 font-medium focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900">Email (Fixed)</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                    <input
                      type="email"
                      value={formData.email}
                      disabled
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 pl-10 text-sm text-gray-900 font-bold cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900">College ID (Fixed)</label>
                  <div className="relative">
                    <Hash className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                    <input
                      type="text"
                      value={formData.collegeId}
                      disabled
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 pl-10 text-sm text-gray-900 font-bold cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900">Bio</label>
                <textarea
                  rows={4}
                  value={formData.bio}
                  onChange={(e) => setFormData({...formData, bio: e.target.value})}
                  className="w-full rounded-md border border-gray-300 bg-white p-3 text-sm text-gray-900 font-medium focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Tell us a little about yourself..."
                />
              </div>

              <div className="pt-4 flex justify-end">
                {/* <Button onClick={handleSave} disabled={saving} className="bg-blue-600 hover:bg-blue-700 text-white font-bold">
                  {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                  Save Changes
                </Button> */}

                {/* The Overlay Button */}
<button 
  onClick={generateNewAvatar}
  className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition shadow-sm z-10"
  title="Generate New Avatar"
>
  <Camera size={16} />
</button>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}