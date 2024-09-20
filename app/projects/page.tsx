import fs from "fs";
import path from "path";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProjectList } from "@/components/project-list";

export default function ProjectsPage() {
  const publicDirectory = path.join(process.cwd(), "public/projects");

  // retrieve project folders
  const folders = fs
    .readdirSync(publicDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  // grab the metadata from each project
  const projectsMetadata = folders.map((folder) => {
    const filePath = path.join(publicDirectory, folder, "meta.json");
    const fileContents = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContents);
  });

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />
      <div className="text-4xl font-vt323 mb-10">/projects</div>
      <ProjectList projects={projectsMetadata} />
      <Footer />
    </div>
  );
}
