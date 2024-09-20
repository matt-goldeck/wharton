export type Project = {
  meta: ProjectMeta;
  body: string;
  slug: string;
};

export type ProjectMeta = {
  title: string;
  description: string;
  timestamp: string;
  slug: string;
};
