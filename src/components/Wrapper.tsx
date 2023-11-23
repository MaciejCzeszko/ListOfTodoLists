import { ReactNode } from "react";

type WrapperChildren = {
  children: ReactNode;
};

export function Wrapper({ children }: WrapperChildren) {
  return (
    <main className="h-screen w-screen p-4 flex items-center">
      <div className="flex flex-col items-center mx-auto bg-gray-50 p-8 px-16 rounded-lg shadow-md">
        {children}
      </div>
    </main>
  );
}
