import Link from "next/link";
import { Calendar, Users, User } from "lucide-react";

interface EventCardProps {
  id: number;
  title: string;
  date: string;
  category: string;
  type: "Solo" | "Team"; // Ensures type safety for the badge logic
  image: string;
}

export default function EventCard({
  id,
  title,
  date,
  category,
  type,
  image,
}: EventCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition border overflow-hidden flex flex-col h-full group">
      {/* Event Image Container */}
      <div className="h-48 w-full bg-gray-200 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
        {/* Category Badge */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700 shadow-sm">
          {category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
          {title}
        </h3>

        <div className="space-y-3 text-sm text-gray-600 mb-4">
          {/* Date Row */}
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-blue-600" />
            <span>{date}</span>
          </div>

          {/* Type Row (Solo vs Team) */}
          <div className="flex items-center gap-2">
            {type === "Team" ? (
              <Users size={16} className="text-purple-600" />
            ) : (
              <User size={16} className="text-green-600" />
            )}
            <span className={type === "Team" ? "text-purple-700 font-medium" : "text-green-700 font-medium"}>
              {type === "Team" ? "Team Event" : "Individual Event"}
            </span>
          </div>
        </div>

        {/* Action Button - Pushed to bottom */}
        <div className="mt-auto pt-4 border-t">
          <Link
            href={`/events/${id}`}
            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}