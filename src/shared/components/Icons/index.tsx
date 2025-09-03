import React from "react";
import type { IconType } from "react-icons";
import styles from "./Icon.module.css";

interface IconProps {
  icon: IconType;
  size?: number | string;
  color?: string;
  className?: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size = 20,
  color = "inherit",
  className = "",
  onClick,
}) => {
  return (
    <IconComponent
      size={size}
      color={color}
      className={`${styles.icon} ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    />
  );
};

export default Icon;
