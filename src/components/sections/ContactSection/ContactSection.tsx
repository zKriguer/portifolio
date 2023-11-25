import Link from "next/link";

import { CopyButton } from "@/components/button/CopyButton";
import { Linkedin, Send, Twitter } from "lucide-react";
import styles from "./styles.module.css";
import { getScopedI18n } from "@/app/locales/server";

export const ContactSection = async () => {
  const t = await getScopedI18n("navigation");
  return (
    <div className="w-full flex flex-col gap-12 justify-center items-center">
      <h1 className="text-4xl font-bold text-start">{t("contact")}</h1>
      <div className="flex flex-col gap-2 w-full md:w-1/3">
        <div className="flex gap-2">
          <p className="bg-brand-secondary p-2 rounded-lg w-full text-center select-none hover:bg-brand-primary">
            Kriguerfreitas2020@gmail.com
          </p>
          <CopyButton
            className="h-full"
            valueToCopy={"kriguerfreitas2020@gmail.com"}
          />
          <Link
            href="mailto:kriguerfreitas2020@gmail.com"
            className="bg-brand-highlight h-full rounded-lg text-center select-none hover:bg-brand-primary items-center flex justify-center p-4"
          >
            <Send className="h-3.5 w-3.5 " />
          </Link>
        </div>

        <Link
          className={styles.link}
          href="https://www.linkedin.com/in/kriguer/"
          target="_blank"
        >
          <Linkedin className="h-full text-blue-600" />
          Linkedin
        </Link>

        <Link
          className={styles.link}
          target="_blank"
          href="https://twitter.com/Kriguer_"
        >
          <Twitter className="h-full text-blue-400" />
          Twitter
        </Link>
      </div>
    </div>
  );
};
