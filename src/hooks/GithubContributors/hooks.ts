import { REACT_QUERY_KEYS } from "@/enums/query-keys";
import { useQuery } from "@tanstack/react-query";
import { getContributors, getLanguagesPaths } from "./fetchers";

export const useGetGithubContributors = (contributorUrl: string) => {
  return useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_GITHUB_CONTRIBUTORS, contributorUrl],
    queryFn: () => getContributors(contributorUrl),
  });
};

export const useGetLanguagesPaths = (languagesUrl: string) => {
  return useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_GITHUB_LANGUAGES, languagesUrl],
    queryFn: () => getLanguagesPaths(languagesUrl),
  });
};
