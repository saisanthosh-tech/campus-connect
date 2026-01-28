// import * as React from "react"
// import { clsx, type ClassValue } from "clsx"
// import { twMerge } from "tailwind-merge"

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: "default" | "outline" | "ghost"; // Added variants
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant = "default", ...props }, ref) => {
    
//     // Style logic based on variant
//     const baseStyles = "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2";
    
//     const variants = {
//       default: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
//       outline: "border border-gray-200 bg-white hover:bg-gray-100 text-gray-900",
//       ghost: "hover:bg-gray-100 text-gray-900",
//     };

//     return (
//       <button
//         className={cn(baseStyles, variants[variant], className)}
//         ref={ref}
//         {...props}
//       />
//     )
//   }
// )
// Button.displayName = "Button"

// export { Button }

import * as React from "react"
import { cn } from "@/lib/utils"

// 1. We add 'variant' and 'size' to the allowed props here
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    
    // 2. Define how each variant looks
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
      destructive: "bg-red-500 text-white hover:bg-red-600 shadow-sm",
      outline: "border border-gray-200 bg-white shadow-sm hover:bg-gray-100 text-gray-900",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200/80",
      ghost: "hover:bg-gray-100 hover:text-gray-900",
      link: "text-blue-600 underline-offset-4 hover:underline",
    }

    // 3. Define how each size looks
    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",     // <--- This fixes your error!
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }