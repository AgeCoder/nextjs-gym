import Image from "next/image";
import Link from "next/link";

const Facilities = () => {
  return (
    <section className=" py-12 md:py-20 px-6 md:px-10" id="Gallery">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-center">Our Facilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <div>
              <Image
                alt="Gym Facility - Workout Area"
                className="rounded-lg object-cover cursor-pointer"
                height={250}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/250",
                  objectFit: "cover",
                }}
                width={400}
              />
            </div>
          </div>
          <div>
            <div>
              <Image
                alt="Gym Facility - Group Fitness Room"
                className="rounded-lg object-cover cursor-pointer"
                height={250}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/250",
                  objectFit: "cover",
                }}
                width={400}
              />
            </div>
          </div>
          <div>
            <div>
              <Image
                alt="Gym Facility - Swimming Pool"
                className="rounded-lg object-cover cursor-pointer"
                height={250}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/250",
                  objectFit: "cover",
                }}
                width={400}
              />
            </div>
          </div>
          <div>
            <div>
              <Image
                alt="Gym Facility - Sauna"
                className="rounded-lg object-cover cursor-pointer"
                height={250}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/250",
                  objectFit: "cover",
                }}
                width={400}
              />
            </div>
          </div>
          <div>
            <div>
              <Image
                alt="Gym Facility - Locker Rooms"
                className="rounded-lg object-cover cursor-pointer"
                height={250}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/250",
                  objectFit: "cover",
                }}
                width={400}
              />
            </div>
          </div>
          <div>
            <div>
              <Image
                alt="Gym Facility - Fitness Equipment"
                className="rounded-lg object-cover cursor-pointer"
                height={250}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/250",
                  objectFit: "cover",
                }}
                width={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
