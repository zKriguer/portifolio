"use client";
import { GitHubRepository } from "@/lib/types/GithubRepository";
import clsx from "clsx";

import React, { useState } from "react";

import { useScopedI18n } from "@/app/locales/client";
import { Languages } from "./Languages";
import { Contributors } from "./Contributors";

type Props = {
  repoContent: GitHubRepository;
  swiper: number;
  colors: any;
  className?: string;
};

export const ProjectDetails = ({
  repoContent,
  swiper,
  colors,
  className,
}: Props) => {
  const [descriptionStyle, setDescriptionStyle] = useState("description");

  return (
    <div
      className={clsx(
        "bg-brand-primary shadow-3xl shadow-slate-950 rounded-xl w-full xl:w-1/2 lg:min-h-[300px] 2xl:min-h-[400px] flex flex-col gap-4 p-8 relative flex-wrap justify-between",
        colors[swiper].textColors,
        className
      )}
      onMouseEnter={() => {
        setDescriptionStyle("description2");
      }}
      onMouseLeave={() => {
        setDescriptionStyle("description");
      }}
    >
      <h1 className={"text-lg lg:text-3xl capitalize font-semibold"}>
        {repoContent.name}
      </h1>
      <p className="text-white text-sm lg:text-base">
        {repoContent.description}
      </p>

      <div className="flex flex-col justify-around gap-8">
        <div className="flex flex-col gap-2 flex-wrap">
          <Languages languagesUrl={repoContent.languages_url} />
        </div>

        <div className="flex gap-2 select-none">
          <Contributors contributorsUrl={repoContent.contributors_url} />
        </div>
      </div>

      <div
        className={clsx(
          "w-full h-full absolute -z-10 rounded-xl transition duration-500 ease-in-out",
          descriptionStyle,
          colors[swiper].backgroundColors
        )}
      />
    </div>
  );
};
