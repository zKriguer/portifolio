"use client";
import { GitHubRepository } from "@/lib/types/GithubRepository";
import { arrRandomColors } from "@/lib/utils";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";

import "./cards.styles.modules.css";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

import { useEffect, useRef, useState } from "react";

import { ProjectCard } from "./fragments/ProjectCard";
import { ProjectDetails } from "./fragments/ProjectDetails";

type Props = {
  repos: GitHubRepository[];
};

export const ProjectCards = ({ repos }: Props) => {
  const [colors] = useState(arrRandomColors(repos));

  const [swiper, setSwiper] = useState(0);
  const [repoContent, setRepocontent] = useState(repos[swiper]);

  const slideSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    slideSoundRef.current = new Audio("/assets/slidesound.mp3");
    slideSoundRef.current.volume = 0.1;

    return () => {
      if (slideSoundRef.current) {
        slideSoundRef.current.pause();
        slideSoundRef.current.src = "";
      }
    };
  }, []);

  const playSlideSound = () => {
    if (slideSoundRef.current) {
      slideSoundRef.current.play();
    }
  };

  useEffect(() => {
    setRepocontent(repos[swiper]);
  }, [swiper, repos]);

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="h-fit"
        loop={true}
        onSlideChange={(swiper) => {
          setSwiper(swiper.realIndex);
          playSlideSound();
        }}
      >
        {repos &&
          repos.map((repo: GitHubRepository, index: number) => {
            return (
              <SwiperSlide
                key={repo.id}
                className={clsx(
                  "bg-brand-primary shadow-sm shadow-brand-secondary hover:outline outline-2",
                  colors[index].outlinedColors,
                  colors[index].textColors
                )}
              >
                <ProjectCard repo={repo} />
              </SwiperSlide>
            );
          })}
      </Swiper>

      <ProjectDetails
        className="hidden xl:flex"
        repoContent={repoContent}
        swiper={swiper}
        colors={colors}
      />
    </>
  );
};
