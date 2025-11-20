import * as React from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = 'default', ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      default: "bg-green-500 text-black hover:bg-green-600",
      outline: "border border-gray-300 bg-transparent hover:bg-gray-100 text-gray-900",
      ghost: "hover:bg-gray-100"
    }
    
    const variantStyles = variants[variant] || variants.default
    
    return (
      <button
        className={`${baseStyles} ${variantStyles} h-10 px-4 py-2 ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }