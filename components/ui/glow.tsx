import { cva, VariantProps } from "class-variance-authority";
import React from "react";

import { cn } from "@/lib/utils";

const glowVariants = cva("absolute w-full", {
  variants: {
    variant: {
      top: "top-0",
      above: "-top-[128px]",
      bottom: "bottom-0",
      below: "-bottom-[128px]",
      center: "top-[50%]",
    },
  },
  defaultVariants: {
    variant: "top",
  },
});

function Glow({ className, variant, ...props }: React.ComponentProps<"div"> & VariantProps<typeof glowVariants>) {
  return (
    <div data-slot="glow" className={cn(glowVariants({ variant }), className)} {...props}>
      <div
        className={cn(
          "absolute left-1/2 h-[320px] w-[60%] -translate-x-1/2 scale-[3] rounded-[50%] bg-radial from-20% to-60% opacity-100 sm:h-[512px] dark:opacity-100",
          variant === "center" && "-translate-y-1/2",
          "from-[var(--glow-light-from)] to-[var(--glow-light-to)] dark:from-[var(--glow-dark-from)] dark:to-[var(--glow-dark-to)]"
        )}
      />
      <div
        className={cn(
          "absolute left-1/2 h-[160px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-20% to-60% opacity-100 sm:h-[256px] dark:opacity-100",
          variant === "center" && "-translate-y-1/2",
          "from-[var(--glow-light-from)] to-[var(--glow-light-to)] dark:from-[var(--glow-dark-from)] dark:to-[var(--glow-dark-to)]"
        )}
      />
    </div>
  );
}

export default Glow;
