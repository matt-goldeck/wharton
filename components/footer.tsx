import { FaLinkedin, FaGithub, FaStrava, FaMountain } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="my-24">
      <div className="container flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/matt-goldeck/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400">
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/matt-goldeck"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400">
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="https://www.strava.com/athletes/mgoldeck"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400">
            <FaStrava className="h-6 w-6" />
          </a>
          <a
            href="https://www.mountainproject.com/user/201579798/matt-goldeck"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400">
            <FaMountain className="h-6 w-6" />
          </a>
        </div>

        <p className="text-md text-gray-400 font-vt323">
          built with love in boulder, co
        </p>
      </div>
    </footer>
  );
}
