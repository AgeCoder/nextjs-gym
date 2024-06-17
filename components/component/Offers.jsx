/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import Image from "next/image";

const Offers = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Special Offers</h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Check out our current special offers and promotions to get the most
            out of your membership.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <Card>
            <Image
              alt="Offer 1"
              className="w-full h-48 object-cover rounded-t-lg"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold">50% Off First Month</h3>
              <p className="text-gray-500">
                Join Gym name today and get 50% off your first month's
                membership.
              </p>

              <div className="flex justify-between bottom-0 ">
                <div className="text-3xl font-bold">₹99</div>
                <Button size="sm">Sign Up</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <Image
              alt="Offer 2"
              className="w-full h-48 object-cover rounded-t-lg"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold">
                Free Personal Training Session
              </h3>
              <p className="text-gray-500">
                New members get a free personal training session to help you
                achieve your goals.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold">₹99</div>
                <Button size="sm">Sign Up</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <Image
              alt="Offer 3"
              className="w-full h-48 object-cover rounded-t-lg"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold">
                Refer a Friend, Get 1 Month Free
              </h3>
              <p className="text-gray-500">
                Invite your friends to join Gym name and get one month of your
                membership for free.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold">₹99</div>
                <Button size="sm">Sign Up</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Offers;
