import { CardContent, Card } from "@/components/ui/card";
import Image from "next/image";

const Trainers = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Our Expert Trainers</h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Meet our highly qualified and experienced trainers who are dedicated
            to helping you achieve your fitness goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card>
            <Image
              alt="Trainer 1"
              className="w-full h-64 object-cover rounded-t-lg"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width={400}
            />
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-500">Certified Personal Trainer</p>
              <p className="text-gray-500">
                John has over 10 years of experience in the fitness industry and
                is passionate about helping his clients achieve their goals.
              </p>
            </CardContent>
          </Card>
          <Card>
            <Image
              alt="Trainer 2"
              className="w-full h-64 object-cover rounded-t-lg"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width={400}
            />
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-gray-500">Certified Yoga Instructor</p>
              <p className="text-gray-500">
                Jane is a passionate yoga instructor with a focus on mindfulness
                and holistic well-being.
              </p>
            </CardContent>
          </Card>
          <Card>
            <Image
              alt="Trainer 3"
              className="w-full h-64 object-cover rounded-t-lg"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width={400}
            />
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold">Michael Johnson</h3>
              <p className="text-gray-500">Certified Strength Coach</p>
              <p className="text-gray-500">
                Michael specializes in strength training and has helped many
                clients build muscle and improve their overall fitness.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
