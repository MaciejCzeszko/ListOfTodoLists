import { ReactNode } from "react";
import { Card } from "./Card";

type WrapperChildren = {
  children: ReactNode;
};

export function Wrapper({ children }: WrapperChildren) {
  return (
    <div className="h-screen w-screen p-4 flex items-center">
      <Card>{children}</Card>
    </div>
  );
}
