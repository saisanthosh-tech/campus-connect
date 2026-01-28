import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full grid lg:grid-cols-2">
      {/* LEFT SIDE: Visuals (Hidden on mobile) */}
      <div className="hidden lg:flex flex-col justify-between bg-gray-900 relative overflow-hidden p-12 text-white">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
            alt="Campus Life" 
            className="w-full h-full object-cover opacity-40" 
          />
        </div>

        {/* Branding content on top of image */}
        <div className="relative z-10">
          <Link href="/" className="text-2xl font-bold flex items-center gap-2">
            🎓 CampusConnect
          </Link>
        </div>

        <div className="relative z-10 space-y-4">
          <blockquote className="text-2xl font-medium leading-relaxed">
            "This platform completely changed how we organize our tech fest. 
            Registration used to take days, now it takes minutes."
          </blockquote>
          <div className="flex items-center gap-4 pt-4">
            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">
              JD
            </div>
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-300">President, Coding Club</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: The Form Container */}
      <div className="flex flex-col justify-center items-center p-8 bg-white sm:p-12 md:p-24">
        <div className="w-full max-w-sm space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
}