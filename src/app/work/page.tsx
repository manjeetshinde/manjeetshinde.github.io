import Navigation from "../Navigation";
import ProjectList from "./ProjectList";

export default function ProjectPage() {
  return (
    <main className="flex flex-col gap-4 p-4">
      <Navigation title="Work" />
      <ProjectList />
    </main>
  );
}
