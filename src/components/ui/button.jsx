import * as React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
          variant === "default"
            ? "bg-white text-black hover:bg-gray-200 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
            : "",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
