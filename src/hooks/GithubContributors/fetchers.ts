import { IContributors } from "@/lib/types/GithubRepository";
import { GithubApiService } from "@/lib/utils";

export const getContributors = async (contributorUrl: string) => {
  const responseData: IContributors[] = await GithubApiService(
    contributorUrl
  ).then((response) => response);
  return responseData;
};

export const getLanguagesPaths = async (languagesUrl: string) => {
  const responseData = await GithubApiService(languagesUrl).then(
    (response) => response
  );

  const languages = Object.keys(responseData).map((language) => {
    return {
      languageName: language.toLowerCase(),
    };
  });

  return languages;
};
