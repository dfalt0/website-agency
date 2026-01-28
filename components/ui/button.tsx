import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-[#262626] hover:-translate-y-0.5",
        "white-primary": "bg-white text-black hover:bg-[#F5F5F5] hover:-translate-y-0.5",
        secondary: "bg-transparent text-black border-2 border-black hover:bg-black hover:text-white",
        text: "bg-transparent text-inherit hover:opacity-70",
      },
      size: {
        default: "h-12 px-10 text-base",
        sm: "h-10 px-8 text-sm",
        lg: "h-14 px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, children, ...props }, ref) => {
    const buttonClasses = cn(buttonVariants({ variant, size, className }));

    if (asChild) {
      // When asChild is true, we expect a single child element (like Link)
      // We'll clone it and merge our classes with its existing className
      const child = React.Children.only(children) as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: cn(buttonClasses, child.props?.className),
        ref,
        ...(child.props || {}),
        ...props,
      } as any);
    }

    return (
      <button
        className={buttonClasses}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
