import styles from "./Button.module.css";
import type { MouseEvent, ReactNode } from "react";

interface Props {
  className?: string;
  id?: string;
  children?: ReactNode;
  onClick: (e: MouseEvent) => void; // 또는 MouseEventHandler<HTMLButtonElement>
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
