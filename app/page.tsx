import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HomeMenu } from "@/components/home-menu";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <div className="font-vt323 text-center text-xl">
        <p className="mt-4">bat-stō: noun</p>
        <p className="mt-4">
          a ruin squatting in the coastal pine barrens of southern new jersey
        </p>
        <p className="mt-4">
          acidic soil, a forest of craggy pitch pine, perennial wildfire, a
          staggeringly comic series of boom-and-bust cycles
        </p>
        <p className="mt-4">
          utterly unremarkable shade for retirees, a
          backdrop for wedding photos
        </p>
        <p className="mt-4">
          yet a subtle magic lingers; a defiance, a restless persistence, an
          unyielding drive to invent and reinvent
        </p>
        <p className="mt-4">we are kindred spirits</p>
      </div>

      <HomeMenu />
      <Footer />
    </div>
  );
}
