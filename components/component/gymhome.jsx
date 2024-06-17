import { Button } from "@/components/ui/button";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Classes from "./Classes";
import Members from "./Members";
import Offers from "./Offers";
import Facilities from "./Facilities";
import Trainers from "./Trainers";

export function Gymhome() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative w-full h-[80vh] md:h-[90vh]  overflow-hidden">
          <span className="absolute w-full h-full object-cover opacity-50 rounded-md bg-muted" />
          <div className="absolute inset-0 /70" />
          <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex flex-col items-center justify-center text-center space-y-6 text-white">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Transform Your Body, Transform Your Life
            </h1>
            <p className="text-lg md:text-xl max-w-4xl">
              Experience the ultimate fitness journey at Gym name, where
              state-of-the-art facilities and expert trainers come together to
              help you reach your goals.
            </p>
            <div className="flex gap-2">
              <Button size="lg">Join Now</Button>
              <Button size="lg">Contact us</Button>
            </div>
          </div>
        </section>
        <Classes />
        <Members />
        <Offers />
        <Facilities />
        <Trainers />
      </main>
      <Footer />
    </>
  );
}
