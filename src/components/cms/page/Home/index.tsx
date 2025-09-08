import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { HomeDataFragmentDoc, type HomeDataFragment } from "@/gql/graphql";
import { getSdk } from "@/gql";
import Image from "next/image";
import Link from "next/link";

/**
 * Home Page - CMS Component
 * This will be displayed in the CMS visual builder
 */
export const HomePage : CmsComponent<HomeDataFragment> = ({ data: _data, children: _children }) => {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Welcome to Our Company Live Mode
        </h1>
        
        <p className="text-lg text-center sm:text-left max-w-2xl">
          This is a Next.js application integrated with Optimizely CMS SaaS. 
          You can preview all pages in the CMS interface.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <Link
            className="rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex flex-col items-center justify-center hover:bg-[f2f2f2] dark:hover:bg-[#1a1a1a] p-6 text-center"
            href="/about"
          >
            <Image
              className="dark:invert mb-4"
              src="/globe.svg"
              alt="About"
              width={48}
              height={48}
            />
            <h3 className="text-xl font-semibold mb-2">About Us</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Learn about our company and mission
            </p>
          </Link>
          
          <Link
            className="rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex flex-col items-center justify-center hover:bg-[f2f2f2] dark:hover:bg-[#1a1a1a] p-6 text-center"
            href="/services"
          >
            <Image
              className="dark:invert mb-4"
              src="/window.svg"
              alt="Services"
              width={48}
              height={48}
            />
            <h3 className="text-xl font-semibold mb-2">Our Services</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Explore what we can do for you
            </p>
          </Link>
          
          <Link
            className="rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex flex-col items-center justify-center hover:bg-[f2f2f2] dark:hover:bg-[#1a1a1a] p-6 text-center"
            href="/contact"
          >
            <Image
              className="dark:invert mb-4"
              src="/file.svg"
              alt="Contact"
              width={48}
              height={48}
            />
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Get in touch with our team
            </p>
          </Link>
          
          <Link
            className="rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex flex-col items-center justify-center hover:bg-[f2f2f2] dark:hover:bg-[#1a1a1a] p-6 text-center"
            href="/"
          >
            <Image
              className="dark:invert mb-4"
              src="/next.svg"
              alt="Home"
              width={48}
              height={48}
            />
            <h3 className="text-xl font-semibold mb-2">Home</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Back to home page
            </p>
          </Link>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/about"
          >
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="About"
              width={20}
              height={20}
            />
            Learn More
          </Link>
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
            href="/services"
          >
            Our Services
          </Link>
        </div>
      </main>
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/about"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="About"
            width={16}
            height={16}
          />
          About
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/services"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Services"
            width={16}
            height={16}
          />
          Services
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/contact"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Contact"
            width={16}
            height={16}
          />
          Contact
        </Link>
      </footer>
    </div>
  );
}

HomePage.displayName = "Home Page (Page/Home)"
HomePage.getDataFragment = () => ['HomeData', HomeDataFragmentDoc]
HomePage.getMetaData = async (contentLink, locale, client) => {
  const _sdk = getSdk(client);
  return {}
}

export default HomePage