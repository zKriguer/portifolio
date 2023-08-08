import Image from "next/image";

import { useGetGithubContributors } from "@/hooks/GithubContributors/hooks";
import { useEffect } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useScopedI18n } from "@/app/locales/client";
import { ContributorsSkeleton } from "../skeletons/ContributorsSkeleton";

type Props = {
  contributorsUrl: string;
};

export const Contributors = ({ contributorsUrl }: Props) => {
  const t = useScopedI18n("projects");
  const { data, isLoading, refetch } =
    useGetGithubContributors(contributorsUrl);

  useEffect(() => {
    refetch();
  }, [contributorsUrl, refetch]);

  if (isLoading) {
    return <ContributorsSkeleton />;
  }

  return (
    <div className="flex flex-col gap-2 ">
      <p className="xl:text-xl font-bold">{t("contributors")}:</p>
      {data?.map((contributor) => {
        return (
          <div
            key={contributor.id}
            className="flex items-center justify-center gap-4 w-fit"
          >
            <Avatar>
              <AvatarImage src={contributor.avatar_url} />
              <AvatarFallback>{contributor.login}</AvatarFallback>
            </Avatar>

            <p className="text-sm lg:text-base text-white">
              {contributor.login}
            </p>
          </div>
        );
      })}
    </div>
  );
};
