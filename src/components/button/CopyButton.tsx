"use client";

import { Check, Copy } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useClipboard } from "@/hooks/use-clipboard";
import { useScopedI18n } from "@/app/locales/client";
import Button from "./Button";

type CopyButtonProps = {
  className?: string;
  valueToCopy: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function CopyButton({
  valueToCopy,
  className,
  onClick,
  ...props
}: CopyButtonProps) {
  const { copy, copied } = useClipboard();
  const t = useScopedI18n("copy-button");

  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <Button
            secondary
            onClick={(e) => {
              e.preventDefault();
              copy(valueToCopy);
              onClick?.(e);
            }}
            aria-label={t("copy")}
            className={className}
            {...props}
          >
            {copied ? (
              <Check className="h-3 w-3 animate-in fade-in" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent
          onPointerDownOutside={(e) => {
            e.preventDefault();
          }}
          className="select-none"
        >
          <p>{copied ? t("copied") : t("copy")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
