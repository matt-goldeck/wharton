import Link from "next/link";

export function HomeMenu() {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="flex flex-col space-y-4">
        <Link
          href="about"
          className="btn rounded-lg w-56 text-center text-xl font-vt323">
          about
        </Link>
        <Link
          href="projects"
          className="btn rounded-lg w-56 text-center text-xl font-vt323">
          projects
        </Link>
        <Link
          href="faq"
          className="btn rounded-lg w-56 text-center text-xl font-vt323">
          faq
        </Link>
      </div>
    </div>
  );
}
