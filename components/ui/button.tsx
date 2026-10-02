import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-[13px] font-medium leading-5 tracking-normal transition-[background-color,border-color,color,box-shadow,transform,opacity] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border border-primary bg-primary text-primary-foreground shadow-soft hover:bg-primary-hover hover:border-primary-hover",
        "white-primary":
          "border border-transparent bg-[#E2E8E2] text-[#080A08] shadow-soft hover:bg-white",
        secondary:
          "border border-border bg-transparent text-foreground hover:bg-foreground/[0.04] hover:border-foreground/25",
        emerald:
          "border border-emerald/40 bg-emerald text-[#080A08] shadow-[0_0_16px_rgba(34,197,94,0.22)] hover:bg-[#16a34a] hover:border-[#16a34a]",
        text: "border border-transparent bg-transparent text-inherit hover:opacity-70",
      },
      size: {
        default: "h-11 min-h-11 px-5 py-2.5",
        sm: "h-10 min-h-10 px-4 py-2 text-xs leading-4",
        lg: "h-12 min-h-12 px-6 py-3 text-sm leading-5",
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
    const buttonClasses = cn(buttonVariants({ variant, size }), className);

    if (asChild) {
      const child = React.Children.only(children) as React.ReactElement<{
        className?: string;
        children?: React.ReactNode;
      }>;
      return React.cloneElement(child, {
        ...props,
        ...child.props,
        className: cn(buttonClasses, child.props?.className),
        ref,
      } as never);
    }

    return (
      <button className={buttonClasses} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
