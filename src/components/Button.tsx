import styles from "./Button.module.css";
import type { ReactNode } from "react";

interface Props {
  className?: string;
  id?: string;
  children?: ReactNode;
  onClick: any;
}

export default function Button({
  className = "",
  id,
  children,
  onClick,
}: Props) {
  const classNames = `${styles.button} ${className}`;
  return (
    <button className={classNames} id={id} onClick={onClick}>
      {children}
    </button>
  );
}
