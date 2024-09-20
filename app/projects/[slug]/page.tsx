import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProjectElement } from "@/components/project-element";
import { Project, ProjectMeta } from "@/types/project";
import fs from "fs";
import { notFound } from "next/navigation";
import path from "path";

export interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = params!;
  const folderPath = path.join(process.cwd(), "public/projects", `${slug}`);

  // Check if the file exists
  if (!fs.existsSync(folderPath)) {
    notFound();
  }

  const metaPath = path.join(folderPath, "meta.json");
  const metaContent = fs.readFileSync(metaPath, "utf-8");
  const projectMeta = JSON.parse(metaContent) as ProjectMeta;

  const bodyPath = path.join(folderPath, "blog.md");
  const bodyContent = fs.readFileSync(bodyPath, "utf-8");

  const project: Project = {
    meta: projectMeta,
    body: bodyContent,
    slug: slug,
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />
      <ProjectElement project={project} />
      <Footer />
    </div>
  );
}

// TODO:
// - create a list of projects in projects/page.tsx
// - complete this page
//   - markdown display?
