/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Members = () => {
  return (
    <section className=" py-11 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-6">
          <h2 className="text-5xl font-bold text-black">
            What Our Members Say
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Hear from our satisfied members about their experience at Fitness
            Forge.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage
                    alt="Member Avatar"
                    src="/placeholder-avatar.jpg"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg font-bold">John Doe</h4>
                  <p className="text-gray-500">Member since 2020</p>
                </div>
              </div>
              <p className="text-gray-500">
                "I've been a member of Gym name for over a year now, and it's
                been a game-changer for my fitness journey. The trainers are
                knowledgeable and supportive, and the facilities are top-notch.
                Highly recommend!"
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage
                    alt="Member Avatar"
                    src="/placeholder-avatar.jpg"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg font-bold">Jane Smith</h4>
                  <p className="text-gray-500">Member since 2018</p>
                </div>
              </div>
              <p className="text-gray-500">
                "I've been coming to Gym name for years, and it's become a
                second home to me. The community is so welcoming, and the
                variety of classes keeps me motivated and engaged. I can't
                imagine my fitness journey without this gym."
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage
                    alt="Member Avatar"
                    src="/placeholder-avatar.jpg"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg font-bold">Michael Johnson</h4>
                  <p className="text-gray-500">Member since 2021</p>
                </div>
              </div>
              <p className="text-gray-500">
                "I'm so glad I joined Gym name. The trainers have helped me
                achieve my fitness goals in a way that's sustainable and
                enjoyable. The facilities are always clean and well-maintained,
                and the overall experience has been fantastic."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Members;
