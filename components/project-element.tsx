import { Project } from "@/types/project";
import MarkdownRenderer from "./markdown-renderer";

export interface ProjectElementProps {
  project: Project;
}

export function ProjectElement({ project }: ProjectElementProps) {
  return (
    <div className="flex flex-col">
      <h1 className="font-vt323 text-3xl">title: {project.meta.title}</h1>
      <h2 className="font-vt323 text-xl">ts: {project.meta.timestamp}</h2>
      <h2 className="font-vt323 text-xl">desc: {project.meta.description}</h2>
      <div className="divider"/>
      <MarkdownRenderer content={project.body} />
    </div>
  );
}
