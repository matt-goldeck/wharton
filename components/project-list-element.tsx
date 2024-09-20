import { ProjectMeta } from "@/types/project";
import Link from "next/link";

export interface ProjectListElementProps {
  project: ProjectMeta;
}

export function ProjectListElement({ project }: ProjectListElementProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="card bg-neutral max-w-full sm:max-w-md mx-auto transition-transform transform hover:scale-105 duration-300">
        <div className="card-body items-center text-center">
          <h2 className="card-title font-vt323 text-xl sm:text-2xl">{project.title}</h2>
          <p className="text-xs sm:text-sm text-neutral-content">{project.timestamp}</p>
          <p className="text-xs sm:text-sm text-neutral-content">{project.description}</p>
        </div>
      </div>
    </Link>
  );
}
