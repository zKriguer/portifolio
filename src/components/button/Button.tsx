import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  error?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  primary,
  error,
  className,
  secondary,
  ...props
}: Props) => {
  const classNames = variants(
    styles.base,
    primary && styles.primary,
    secondary && styles.secondary,
    error && styles.error
  );
  return (
    <button className={clsx(classNames, className)} {...props}>
      {children}
    </button>
  );
};

function variants(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default Button;
