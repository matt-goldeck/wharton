import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <div className="text-4xl font-vt323">/about</div>
      <div className="flex flex-col items-center px-4 md:px-20 lg:px-40 pt-5">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          {/* Image Section */}
          <div className="w-40 h-40 md:w-60 md:h-60">
            <Image
              src="/images/matt.jpeg"
              alt="matt goldeck standing in a snowfield near mt. neva"
              className="object-cover rounded-xl shadow-lg w-40 h-40 md:w-60 md:h-60"
              width={400}
              height={400}
            />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left">
            <div className="flex flex-col space-y-1">
              <p className="text-lg md:text-xl text-gray-300 font-vt323">
                international man of mystery (i've been to Canada)
              </p>
              <p className="text-lg md:text-xl text-gray-300 font-vt323">
                software engineer by day and also by night
              </p>
              <p className="text-lg md:text-xl text-gray-300 font-vt323">
                of gloucester twp, nj; cs at montclair state in '19
              </p>
              <p className="text-lg md:text-xl text-gray-300 font-vt323">
                first hoboken, nj; then boulder, co; now los angeles, ca
              </p>
              <p className="text-lg md:text-xl text-gray-300 font-vt323">
                i like to do things
              </p>
              <p className="text-lg md:text-xl text-gray-300 font-vt323 ml-5">
                outside: running, skiing, climbing
              </p>
              <p className="text-lg md:text-xl text-gray-300 font-vt323 ml-5">
                inside: reading, coding, trucks, etc
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
