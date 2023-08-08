import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { NavIcon } from "./NavIcon";

import styles from "./styles.module.css";

type Props = {
  iconPath: string;
  tooltipText: string;
  isActive?: boolean;
  onClick?: () => void;
};

const NavButton = ({ iconPath, tooltipText, isActive, onClick }: Props) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <NavIcon
          src={iconPath}
          width={65}
          height={65}
          alt="Navigation Icon"
          isActive={isActive}
          onClick={onClick}
        />
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={35} className={styles.tooltip}>
        {tooltipText}
      </TooltipContent>
    </Tooltip>
  );
};

export default NavButton;
