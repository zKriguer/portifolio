import Image from "next/image";

export const tecnologies = [
  {
    name: "Javascript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "javascript logo",
    startDate: "2021-05-02",
  },
  {
    name: "ReactJS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "react logo",
    startDate: "2021-09-05",
  },
  {
    name: "NextJS",
    logo: "https://devicons.railway.app/i/nextjs-light.svg",
    alt: "nextjs logo",
    startDate: "2021-09-09",
  },
  {
    name: "NodeJS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "nodejs logo",
    startDate: "2021-05-02",
  },
  {
    name: "NestJS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
    alt: "nestjs logo",
    startDate: "2021-12-01",
  },
  {
    name: "Typescript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    alt: "typescript logo",
    startDate: "2021-12-01",
  },
  {
    name: "React Native",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "react logo",
    startDate: "2022-09-01",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    alt: "java logo",
    startDate: "2022-10-01",
  },
  {
    name: "tailwindcss",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    alt: "tailwindcss logo",
    startDate: "2022-11-01",
  },
  {
    name: "Prisma",
    logo: "https://devicons.railway.app/i/prisma-light.svg",
    alt: "prisma logo",
    startDate: "2022-12-01",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    alt: "postgresql logo",
    startDate: "2022-12-01",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    alt: "mongodb logo",
    startDate: "2021-05-01",
  },
];

tecnologies.sort((a, b) => a.name.localeCompare(b.name));

export const Tecnologies = () => {
  return (
    <div className="flex gap-4 flex-wrap items-center justify-center select-none">
      {tecnologies.map((tecnology) => (
        <div
          className="flex items-center gap-2 text-xs md:text-xl"
          key={tecnology.name}
        >
          <Image
            className=" w-5 h-5 md:w-6 md:h-6"
            width={0}
            height={0}
            src={tecnology.logo}
            alt={tecnology.alt}
          />
          <span>{tecnology.name}</span>
        </div>
      ))}
    </div>
  );
};
