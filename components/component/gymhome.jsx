import { Button } from "@/components/ui/button";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Classes from "./Classes";
import Members from "./Members";
import Offers from "./Offers";
import Facilities from "./Facilities";
import Trainers from "./Trainers";
import Image from "next/image";

export function Gymhome() {
  return (
    <>
      <Navbar />
      <main>
        {/* <section className="relative w-full h-[80vh] md:h-[90vh]  overflow-hidden">
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
        </section> */}
        <section className="text-white py-10 ">
          <div className="container mx-auto px-4 md:px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-extrabold tracking-tight capitalize">
                Welcome to our Gym
              </h2>
              <p className="text-lg font-serif">
                Unlock your full potential with our state-of-the-art gym and
                expert trainers. Join us on your fitness journey.
              </p>
              <div className="flex space-x-4">
                <Button>Join Now</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg"
                width={300}
                height={300}
                alt="Gym Hero"
                className="w-full h-auto rounded-lg"
              />
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
