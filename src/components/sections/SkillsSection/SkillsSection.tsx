"use client";
import { timeExperience } from "@/lib/timeExperience";
import { tecnologies } from "../HomeSection/Tecnologies";
import Image from "next/image";
import clsx from "clsx";
import { useScopedI18n } from "@/app/locales/client";

export const SkillsSection = () => {
  const t = useScopedI18n("home.timeExperience");

  return (
    <ul className="grid md:grid-cols-2 xl:grid-cols-3 w-full gap-6 xl:gap-12">
      {tecnologies.map((tecnology) => {
        return (
          <div key={tecnology.name}>
            <li className="flex items-center justify-between gap-2 w-full bg-brand-secondary rounded-xl px-2 md:px-6 py-2 md:py-4 relative select-none hover:bg-brand-primary group h-full">
              <div className="flex gap-1 md:gap-2 items-center">
                <Image
                  src={tecnology.logo}
                  alt={"LANGUAGE-ICON"}
                  className="h-4 w-4 xl:h-6 lg:w-6"
                  width={0}
                  height={0}
                />
                <p className="text-xs md:text-base text-white">
                  {tecnology.name}
                </p>
              </div>

              <div className="flex gap-1 items-center text-xs md:text-base">
                <p className="text-gray-400">
                  {timeExperience(tecnology.startDate).years > 0 &&
                  timeExperience(tecnology.startDate).years === 1
                    ? t("year", {
                        years: timeExperience(tecnology.startDate).years,
                      })
                    : t("years", {
                        years: timeExperience(tecnology.startDate).years,
                      })}
                </p>
                <p className="text-gray-400">
                  {timeExperience(tecnology.startDate).months > 0 &&
                  timeExperience(tecnology.startDate).months === 1
                    ? t("month", {
                        months: timeExperience(tecnology.startDate).months,
                      })
                    : t("months", {
                        months: timeExperience(tecnology.startDate).months,
                      })}
                </p>
              </div>
              <div
                className={clsx(
                  "absolute bg-brand-primary w-full left-1 top-1 md:left-2 md:top-2 h-full rounded-xl -z-10 group-hover:top-0 group-hover:left-0 transition-all duration-100 ease-in-out"
                )}
              />
            </li>
          </div>
        );
      })}
    </ul>
  );
};
