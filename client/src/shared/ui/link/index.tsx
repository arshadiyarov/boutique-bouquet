import React, { AnchorHTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "shared/ui/button";
import { cn } from "shared/utils";
import Link from "next/link";

interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, href = "", children, ...props }, ref) => {
    return (
      <Link
        href={href}
        className={cn(
          "group uppercase",
          buttonVariants({ variant, className }),
        )}
        ref={ref}
        {...props}
      >
        <span className="absolute transition-transform group-hover:-translate-y-[200%] duration-300">
          {children}
        </span>
        <span className="translate-y-[200%] transition-transform group-hover:-translate-y-0 duration-300">
          {children}
        </span>
      </Link>
    );
  },
);
LinkButton.displayName = "LinkButton";

export { LinkButton };
