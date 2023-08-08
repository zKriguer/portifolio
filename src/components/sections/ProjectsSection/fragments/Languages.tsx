"use client";
import { useScopedI18n } from "@/app/locales/client";
import { useGetLanguagesPaths } from "@/hooks/GithubContributors/hooks";
import Image from "next/image";
import { LanguagesSkeleton } from "../skeletons/LanguagesSkeleton";

type Props = {
  languagesUrl: string;
};

export const Languages = ({ languagesUrl }: Props) => {
  const t = useScopedI18n("projects");
  const { data, isLoading } = useGetLanguagesPaths(languagesUrl);

  if (isLoading) {
    return <LanguagesSkeleton />;
  }

  return (
    <div className="flex flex-col gap-2">
      <p className="text-base xl:text-xl font-semibold">{t("languages")}: </p>
      <div className="flex justify-start gap-2 select-none">
        {data?.map((language) => {
          return (
            <div
              key={language.languageName}
              className="flex items-center justify-center gap-2 w-fit"
            >
              <Image
                src={`/assets/${language.languageName}.svg`}
                alt={"LANGUAGE-ICON"}
                className="h-4 w-4 xl:h-6 lg:w-6"
                width={0}
                height={0}
              />
              <p className="text-sm xl:text-base text-white">
                {language.languageName}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
