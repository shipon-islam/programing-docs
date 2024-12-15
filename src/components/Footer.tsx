import codelogo from "@/../public/code.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white  shadow dark:bg-slate-900 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image src={codelogo} className="h-8 w-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              LWS
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-slate-500 sm:mb-0 dark:text-slate-400">
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-slate-200 sm:mx-auto dark:border-slate-700 lg:my-8" />
        <span className="block text-sm text-slate-500 sm:text-center dark:text-slate-400">
          © 2023{" "}
          <Link href="https://flowbite.com/" className="hover:underline">
            LWS™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
