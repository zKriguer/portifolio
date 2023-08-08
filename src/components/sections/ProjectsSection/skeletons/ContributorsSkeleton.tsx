import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const ContributorsSkeleton = () => {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="w-24 h-4 xl:h-8 bg-brand-secondary rounded-2xl" />
      <div className="flex items-center justify-center gap-4 w-fit">
        <Skeleton className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-brand-secondary" />

        <Skeleton className="w-24 h-4 bg-brand-secondary rounded-2xl" />
      </div>
    </div>
  );
};
