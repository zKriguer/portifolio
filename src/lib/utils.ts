import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function GithubApiService(githubUrl: string) {
  const accessToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  const headers = {
    Authorization: `token ${accessToken}`,
  };

  const res = await fetch(githubUrl, { headers });
  return res.json();
}

export function arrRandomColors(arr: any[]) {
  const colors = arr.map((item: any) => {
    const colors = [
      "bg-pink-400",
      "bg-yellow-400",
      "bg-green-400",
      "bg-blue-400",
      "bg-indigo-400",
      "bg-purple-400",
      "bg-pink-500",
      "bg-yellow-500",
      "bg-green-500",
      "bg-blue-500",
      "bg-indigo-500",
      "bg-purple-500",
    ];

    const outlinedColors = [
      "outline-pink-400",
      "outline-yellow-400",
      "outline-green-400",
      "outline-blue-400",
      "outline-indigo-400",
      "outline-purple-400",
      "outline-pink-500",
      "outline-yellow-500",
      "outline-green-500",
      "outline-blue-500",
      "outline-indigo-500",
      "outline-purple-500",
    ];

    const textColors = [
      "hover:text-pink-400",
      "hover:text-yellow-400",
      "hover:text-green-400",
      "hover:text-blue-400",
      "hover:text-indigo-400",
      "hover:text-purple-400",
      "hover:text-pink-500",
      "hover:text-yellow-500",
      "hover:text-green-500",
      "hover:text-blue-500",
      "hover:text-indigo-500",
      "hover:text-purple-500",
    ];

    const randomValue = Math.floor(Math.random() * colors.length);

    const randomColor = colors[randomValue];

    const randomOutlinedColor = outlinedColors[randomValue];

    const randomTextColor = textColors[randomValue];

    return {
      backgroundColors: randomColor,
      outlinedColors: randomOutlinedColor,
      textColors: randomTextColor,
    };
  });

  return colors;
}
