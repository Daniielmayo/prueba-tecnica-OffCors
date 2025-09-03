import React from "react";
import styles from "./Text.module.css";

interface TextProps {
  children: React.ReactNode;
  variant?: "title" | "subtitle" | "paragraph";
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, variant = "paragraph", className }) => {
  return (
    <p className={`${styles[variant]} ${className || ""}`}>
      {children}
    </p>
  );
};

export default Text;
