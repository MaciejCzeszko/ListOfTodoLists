import { Card } from "../../Card";
import { MainListsSlider } from "./MainListsSlider";

export function MainContent() {
  return (
    <>
      <main className="h-screen w-screen p-4 flex flex-col gap-16">
        <Card classname="mt-32 p-2 px-8">
          <MainListsSlider />
        </Card>
        <Card>TodoList</Card>
      </main>
    </>
  );
}
