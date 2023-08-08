"use client";
import { useScopedI18n } from "@/app/locales/client";
import Button from "@/components/button/Button";
import React from "react";

type Props = { videoUrl: string };

export const YoutubeButton = ({ videoUrl }: Props) => {
  const t = useScopedI18n("buttons");
  return (
    <Button
      error
      className="!w-fit"
      onClick={() => {
        window.open(videoUrl, "_blank");
      }}
    >
      {t("youtube")}
    </Button>
  );
};
