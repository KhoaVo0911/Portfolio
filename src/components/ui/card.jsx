import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border border-white bg-white shadow-2xl overflow-hidden dark:bg-neutral-900 dark:border-white/20",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

export { Card };
