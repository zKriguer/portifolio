import React from "react";

import { getScopedI18n } from "@/app/locales/server";
import { Tecnologies } from "./Tecnologies";
import { timeExperience } from "@/lib/timeExperience";
import Button from "@/components/button/Button";
import { YoutubeButton } from "./YoutubeButton";
import Link from "next/link";
import clsx from "clsx";
import { Github } from "lucide-react";

export const HomeSection = async () => {
  const t = await getScopedI18n("home");
  const time = await getScopedI18n("home.timeExperience");
  const startDate = "2021-02-01";

  return (
    <section
      id="home"
      className="h-screen w-full lg:p-12 flex flex-col justify-center items-center gap-8"
    >
      <iframe
        className="w-full h-1/2 md:w-1/2 md:h-1/2"
        src="https://www.youtube.com/embed/N8cWxZbCGo0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <div className="flex gap-4">
        <Button
          primary
          className={
            "!bg-white hover:!bg-brand-primary hover:!text-white !text-black !font-bold"
          }
        >
          <Link
            href={"https://github.com/zKriguer/portifolio"}
            className="flex items-center"
            target="_blank"
          >
            GitHub
            <Github className={clsx("ml-2")} />
          </Link>
        </Button>
        <YoutubeButton videoUrl="https://www.youtube.com/watch?v=N8cWxZbCGo0&embeds_referring_euri=http%3A%2F%2Flocalhost%3A3000%2F&feature=emb_imp_woyt" />
      </div>

      <div className="flex flex-col gap-16 items-center">
        <div className="text-base md:text-xl text-justify md:text-center gap-4 flex flex-col 2xl:flex-row items-start 2xl:items-end">
          <h1 className="text-xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-highlight via-brand-pink to-brand-orange">
            {t("greeting")}
          </h1>
          <p className="text-xl lg:text-2xl first-letter:capitalize">
            {t("timeExperience.sentence")}
            <span className="text-pink-400">
              {timeExperience(startDate).years > 0 &&
              timeExperience(startDate).years === 1
                ? time("year", {
                    years: timeExperience(startDate).years,
                  })
                : time("years", {
                    years: timeExperience(startDate).years,
                  })}
              {timeExperience(startDate).months > 0 &&
              timeExperience(startDate).months === 1
                ? time("month", {
                    months: timeExperience(startDate).months,
                  })
                : time("months", {
                    months: timeExperience(startDate).months,
                  })}
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-16 items-center">
        <div className="text-base md:text-xl text-justify md:text-center gap-4 flex flex-col">
          <p>{t("curiosities")}</p>
          <p>{t("worked")}</p>
        </div>

        <Tecnologies />
      </div>
    </section>
  );
};
