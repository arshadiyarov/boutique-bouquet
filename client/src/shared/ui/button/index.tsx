import React, { ButtonHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "shared/utils";

const buttonVariants = cva(
  "relative flex items-center justify-center py-4 md:px-6 overflow-hidden transition-colors duration-500 overflow-hidden active:duration-100",
  {
    variants: {
      variant: {
        primary:
          "bg-black text-white hover:bg-dark-gray active:bg-black disabled:bg-light-gray",
        secondary:
          "bg-transparent text-black border-[1px] border-black hover:bg-black hover:text-white active:bg-transparent active:text-black disabled:bg-transparent disabled:border-light-gray",
        tertiary:
          "bg-transparent text-white border-[1px] border-white hover:bg-white hover:text-dark-gray hover:border-none active:bg-white active:text-black active:border-none disabled:border-light-gray disabled:text-light-gray",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <button
        className={cn("group", buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        <span className="absolute transition-transform group-hover:-translate-y-[200%] duration-300">
          {children}
        </span>
        <span className="translate-y-[200%] transition-transform group-hover:-translate-y-0 duration-300">
          {children}
        </span>
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
