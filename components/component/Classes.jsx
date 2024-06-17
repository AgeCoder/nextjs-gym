import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";

const Classes = () => {
  return (
    <div>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Featured Classes</h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Explore our wide range of fitness classes to find the perfect
              workout for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card>
              <Image
                alt="Yoga Class"
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
                <h3 className="text-xl font-bold">Yoga</h3>
                <p className="text-gray-500">
                  Improve your flexibility, strength, and balance with our
                  rejuvenating yoga classes.
                </p>
                <Button size="sm">Sign Up</Button>
              </CardContent>
            </Card>
            <Card>
              <Image
                alt="Spin Class"
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
                <h3 className="text-xl font-bold">Spin</h3>
                <p className="text-gray-500">
                  Get your heart pumping and burn calories with our
                  high-intensity spin classes.
                </p>
                <Button size="sm">Sign Up</Button>
              </CardContent>
            </Card>
            <Card>
              <Image
                alt="Strength Training"
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
                <h3 className="text-xl font-bold">Strength Training</h3>
                <p className="text-gray-500">
                  Build muscle and improve your overall fitness with our
                  expert-led strength training classes.
                </p>
                <Button size="sm">Sign Up</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classes;
