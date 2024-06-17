import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className=" text-white py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <DumbbellIcon className="h-8 w-8" />
              <span className="text-2xl font-bold">Gym name</span>
            </div>
            <p className="text-gray-400">
              Unleash your fitness potential at Gym name. Experience world-class
              facilities, expert trainers, and a supportive community.
            </p>
            <div className="flex gap-4">
              <Link className="text-gray-400 hover:text-white" href="#">
                <FacebookIcon className="h-6 w-6" />
              </Link>
              <Link className="text-gray-400 hover:text-white" href="#">
                <TwitterIcon className="h-6 w-6" />
              </Link>
              <Link className="text-gray-400 hover:text-white" href="#">
                <InstagramIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            {/* <h4 className="text-lg font-bold">Quick Links</h4>
            <nav className="space-y-2">
              <Link className="text-gray-400 hover:text-white" href="#">
                Home
              </Link>
              <Link className="text-gray-400 hover:text-white" href="#">
                About
              </Link>
              <Link className="text-gray-400 hover:text-white" href="#">
                Classes
              </Link>
              <Link className="text-gray-400 hover:text-white" href="#">
                Trainers
              </Link>
              <Link className="text-gray-400 hover:text-white" href="#">
                Membership
              </Link>
              <Link className="text-gray-400 hover:text-white" href="#">
                Gallery
              </Link>
              <Link className="text-gray-400 hover:text-white" href="#">
                Blog
              </Link>
              <Link className="text-gray-400 hover:text-white" href="#">
                Contact
              </Link>
            </nav> */}
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-6 w-6 text-gray-400" />
                <p className="text-gray-400">123 Fitness Street, Anytown USA</p>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-6 w-6 text-gray-400" />
                <p className="text-gray-400">(123) 456-7890</p>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="h-6 w-6 text-gray-400" />
                <p className="text-gray-400">info@fitnessforge.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          © 2024 Gym name. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;

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

function DumbbellIcon(props) {
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
      <path d="M14.4 14.4 9.6 9.6" />
      <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
      <path d="m21.5 21.5-1.4-1.4" />
      <path d="M3.9 3.9 2.5 2.5" />
      <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
    </svg>
  );
}

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon(props) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
