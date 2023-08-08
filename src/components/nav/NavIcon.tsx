import React from "react";
import Image, { ImageProps } from "next/image";

type Props = { isActive?: boolean } & ImageProps;

export const NavIcon = ({ isActive = false, ...props }: Props) => {
  return (
    <div className="flex items-center">
      <Image
        data-active={isActive}
        className="transition-transform hover:scale-150 hover:translate-x-4 duration-300 ease-in-out cursor-pointer data-[active=true]:scale-150 data-[active=true]:translate-x-4"
        {...props}
        alt="Nav-icon"
      />
    </div>
  );
};
