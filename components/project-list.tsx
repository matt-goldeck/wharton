"use client";

import { useState } from "react";
import { ProjectMeta } from "@/types/project";
import { ProjectListElement } from "./project-list-element";

export interface ProjectListProps {
  projects: ProjectMeta[];
}

export function ProjectList({ projects }: ProjectListProps) {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  // Sort the projects by date
  const sortedProjects = projects.sort((a: ProjectMeta, b: ProjectMeta) => {
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });

  // Calculate the total number of pages
  const totalPages = Math.ceil(sortedProjects.length / itemsPerPage);

  // Get the projects for the current page
  const currentProjects = sortedProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handler for page change
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex flex-col text-center space-y-10">
      <div className="flex flex-col space-y-4 text-center">
        {currentProjects.map((project, x) => (
          <ProjectListElement project={project} key={x} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <div className="join">
          <button
            className="join-item btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}>
            «
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`join-item btn ${currentPage === i + 1 ? "btn-active" : ""}`}
              onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </button>
          ))}
          <button
            className="join-item btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}>
            »
          </button>
        </div>
      </div>
    </div>
  );
}
