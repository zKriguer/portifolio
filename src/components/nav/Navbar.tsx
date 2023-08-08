"use client";

import { useEffect, useState } from "react";
import { TooltipProvider } from "../ui/tooltip";

import NavButton from "./NavButton";
import Link from "next/link";
import { useI18n, useScopedI18n } from "@/app/locales/client";

export const Navbar = () => {
  const t = useScopedI18n("navigation");
  const navData = [
    {
      iconPath: "/assets/coffee.svg",
      tooltipText: t("home"),
      href: "#home",
    },
    {
      iconPath: "/assets/calculator.svg",
      tooltipText: t("projects"),
      href: "#projects",
    },
    {
      iconPath: "/assets/pin.svg",
      tooltipText: t("skills"),
      href: "#skills",
    },
    {
      iconPath: "/assets/mail.svg",
      tooltipText: t("contact"),
      href: "#contact",
    },
  ];

  const [activeButtons, setActiveButtons] = useState([
    true,
    false,
    false,
    false,
  ]);

  const onScroll = () => {
    const scrollPos = window.scrollY;
    const sectionPositions = [
      document.getElementById("home")?.offsetTop,
      document.getElementById("projects")?.offsetTop,
      document.getElementById("skills")?.offsetTop,
      document.getElementById("contact")?.offsetTop,
    ];

    const newActiveButtons = activeButtons.map(() => false);

    if (scrollPos < 50) {
      newActiveButtons[0] = true;
    }

    if (sectionPositions) {
      sectionPositions.forEach((sectionPos, index) => {
        if (sectionPos && scrollPos >= sectionPos - 100) {
          if (newActiveButtons.includes(true)) {
            newActiveButtons[newActiveButtons.indexOf(true)] = false;
          }
          newActiveButtons[index] = true;
        }
      });
    }

    setActiveButtons(newActiveButtons);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();

    const newActiveButtons = activeButtons.map(() => false);
    newActiveButtons[index] = true;
    setActiveButtons(newActiveButtons);

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);

    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="h-screen w-fit absolute flex justify-center items-center">
      <div className="flex-col rounded-full w-fit gap-4 fixed left-2 text-center bg-brand-primary py-4 px-1 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 font-bold border border-1 border-brand-primary hidden lg:flex z-10">
        <TooltipProvider delayDuration={200}>
          {navData.map((navItem, index) => (
            <Link
              className="lg:w-16 lg:h-16 w-12 h-12"
              href={navItem.href}
              key={index}
              onClick={(e) => handleClick(e, index)}
            >
              <NavButton
                iconPath={navItem.iconPath}
                tooltipText={navItem.tooltipText}
                isActive={activeButtons[index]}
              />
            </Link>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
};
