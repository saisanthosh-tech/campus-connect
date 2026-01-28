"use client";

import { X, Mail, Phone, ExternalLink } from "lucide-react";

interface ContactHostModalProps {
  isOpen: boolean;
  onClose: () => void;
  hostEmail: string;
  clubName: string;
}

export default function ContactHostModal({ isOpen, onClose, hostEmail, clubName }: ContactHostModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X size={20} />
        </button>

        <div className="text-center mb-6">
          <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail size={24} />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Contact Organizer</h2>
          <p className="text-gray-500 text-sm mt-1">Get in touch with the team behind this event.</p>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 flex items-center gap-4">
            <div className="bg-white p-2 rounded-full shadow-sm">
              <Mail className="text-blue-600" size={20} />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-xs text-gray-500 uppercase font-bold">Official Email</p>
              <p className="text-gray-900 font-medium truncate" title={hostEmail}>{hostEmail}</p>
            </div>
            <a 
              href={`mailto:${hostEmail}`} 
              className="text-blue-600 hover:text-blue-800 text-sm font-bold flex items-center gap-1"
            >
              Send <ExternalLink size={14} />
            </a>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 flex items-center gap-4">
            <div className="bg-white p-2 rounded-full shadow-sm">
              <Phone className="text-green-600" size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">Organizer</p>
              <p className="text-gray-900 font-medium">{clubName}</p>
            </div>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="w-full mt-6 py-3 bg-gray-900 text-white rounded-lg font-bold hover:bg-black transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}