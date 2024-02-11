import { ReactNode } from "react";

type CardChildren = {
  children: ReactNode;
  classname?: string;
};

export function Card({ children, classname }: CardChildren) {
  return (
    <div
      className={`flex flex-col items-center mx-auto bg-gray-50 p-8 px-16 rounded-lg shadow-md ${classname}`}
    >
      {children}
    </div>
  );
}
