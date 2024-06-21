import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="w-full  text-white">
      <div className="  py-6 px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <DumbbellIcon className="h-8 w-8 mr-1" />
          <h1 className="text-2xl font-bold">Gym name</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="#Classes">
            Classes
          </Link>
          <Link className="hover:underline" href="#Trainers">
            Trainers
          </Link>
          <Link className="hover:underline" href="#Membership">
            Membership
          </Link>
          <Link className="hover:underline" href="#Gallery">
            Gallery
          </Link>
          <Link className="hover:underline" href="#Contact">
            Contact
          </Link>
        </nav>
        <Button className="hidden md:inline-flex ">Join Now</Button>
        <Button className="md:hidden" size="icon" variant="outline">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;

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

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
