"use client";

import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <Navbar rounded={true}>
      <Navbar.Brand as={"a"} to="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Bui Duc Binh
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <a
          href="/"
          className="block py-2 pl-3 pr-4 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 dark:text-white md:dark:text-red-500"
          aria-current="page"
        >
          Home
        </a>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
