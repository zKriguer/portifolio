import { GitHubRepository } from "@/lib/types/GithubRepository";

import { GithubApiService } from "@/lib/utils";
import { getScopedI18n } from "@/app/locales/server";

import { ProjectCards } from "./ProjectCards";

export const ProjectsSection = async () => {
  const t = await getScopedI18n("navigation");

  const repos: GitHubRepository[] = await GithubApiService(
    "https://api.github.com/users/zKriguer/repos"
  ).then((res) =>
    res?.map((repo: GitHubRepository) => {
      if (repo != undefined && repo.topics.includes("projects")) {
        return repo != undefined && repo;
      }
    })
  );

  repos.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  return (
    <div className="flex items-center w-full h-full justify-around gap-16 flex-col xl:flex-row flex-shrink">
      <ProjectCards repos={repos} />
    </div>
  );
};
