import { ProjectMeta } from "@/types/project";
import Link from "next/link";

export interface ProjectListElementProps {
  project: ProjectMeta;
}

export function ProjectListElement({ project }: ProjectListElementProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="card bg-neutral max-w-full sm:max-w-md mx-auto transition-transform transform hover:scale-105 duration-300">
        <div className="card-body items-center text-center font-vt323">
          <h2 className="card-title text-x2l sm:text-3xl">{project.title}</h2>
          <p className="text-lg sm:text-lg text-neutral-content">
            {project.timestamp}
          </p>
          <p className="text-lg sm:text-lg text-neutral-content">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
