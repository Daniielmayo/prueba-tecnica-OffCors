import React from "react";
import styles from "./Input.module.css";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  id,
  name,
  disabled = false,
  className,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      id={id}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
      className={`${styles.input} ${className || ""}`}
    />
  );
};

export default Input;
