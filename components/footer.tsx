import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="my-24">
      <div className="container flex flex-col items-center">
        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400">
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400">
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400">
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>

        <p className="text-md text-gray-400 font-vt323">
          built with love in los angeles, ca
        </p>
      </div>
    </footer>
  );
}
