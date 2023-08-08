import { useI18n, useScopedI18n } from "@/app/locales/client";

import Button from "@/components/button/Button";
import { GitHubRepository } from "@/lib/types/GithubRepository";
import clsx from "clsx";
import Image from "next/image";

import Link from "next/link";

type Props = {
  repo: GitHubRepository;
};

export const ProjectCard = ({ repo }: Props) => {
  const t = useI18n();

  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-between gap-2 p-6 h-full"
      )}
    >
      <h1 className="text-2xl capitalize">{repo.name}</h1>

      {!repo.topics.includes("backend") ? (
        <Image
          src={`/assets/images/${repo.name.toLowerCase()}.png`}
          alt={"PROJECT-ICON"}
          width={400}
          height={400}
          className="rounded-xl h-60 object-cover"
        />
      ) : (
        <p className="text-sm text-red-300 lg:text-lg text-center">
          {t("cardText.backend")}
        </p>
      )}

      <div className="flex gap-4 w-full justify-end">
        <Button>
          <Link href={repo.html_url} target="_blank">
            Github
          </Link>
        </Button>

        {repo.homepage !== "" && (
          <Button primary>
            <Link
              className={clsx(repo.homepage === null ? "hidden" : "flex")}
              href={repo.homepage as string}
              target="_blank"
            >
              {t("buttons.visit")}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};
