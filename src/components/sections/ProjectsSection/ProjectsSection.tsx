import { GitHubRepository } from "@/lib/types/GithubRepository";
import { GithubApiService } from "@/lib/utils";
import { getScopedI18n } from "@/app/locales/server";
import { ProjectCards } from "./ProjectCards";

export const ProjectsSection = async () => {
  const t = await getScopedI18n("navigation");

  try {
    const res = await GithubApiService(
      "https://api.github.com/users/zKriguer/repos"
    );

    if (!Array.isArray(res)) {
      console.error("GitHub API response is not an array:", res);
      return null;
    }

    const filteredRepos: GitHubRepository[] = res.filter(
      (repo: GitHubRepository) =>
        repo != undefined && repo.topics.includes("projects")
    );

    filteredRepos.sort((a, b) => {
      return (
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    });

    return (
      <div className="flex items-center w-full h-full justify-around gap-16 flex-col xl:flex-row flex-shrink">
        <ProjectCards repos={filteredRepos} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching or processing GitHub repositories:", error);
    return (
      <div>
        An error occurred while fetching or processing GitHub repositories.
      </div>
    );
  }
};
