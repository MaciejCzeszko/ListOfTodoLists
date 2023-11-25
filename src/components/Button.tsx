import { ReactNode } from "react";

type ButtonParams = {
  type?: "button" | "submit";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export function Button({
  type = "button",
  className,
  onClick,
  children,
}: ButtonParams) {
  return (
    <button
      type={type}
      className={`text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm py-2 px-4 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
