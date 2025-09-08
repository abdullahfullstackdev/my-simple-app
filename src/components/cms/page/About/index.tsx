import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { AboutDataFragmentDoc, type AboutDataFragment } from "@/gql/graphql";
import { getSdk } from "@/gql";
import Image from "next/image";
import Link from "next/link";

/**
 * About Page - CMS Component
 * This will be displayed in the CMS visual builder
 */
export const AboutPage : CmsComponent<AboutDataFragment> = ({ data: _data, children: _children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About Our Company
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a forward-thinking company dedicated to innovation and excellence. 
            Our mission is to deliver exceptional value to our clients and partners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded with a vision to transform the industry, we&apos;ve grown from a small startup 
              to a leading company in our field. Our journey has been marked by continuous 
              learning, adaptation, and growth.
            </p>
            <p className="text-lg text-gray-600">
              Today, we serve clients across the globe, delivering innovative solutions 
              that drive real business results.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/globe.svg"
              alt="Our Company"
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To empower businesses with innovative solutions that drive growth and success.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">🌟</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading provider of innovative business solutions worldwide.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">💎</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Values</h3>
            <p className="text-gray-600">
              Integrity, innovation, excellence, and customer success drive everything we do.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Image
              src="/next.svg"
              alt="Home"
              width={20}
              height={20}
              className="mr-2"
            />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

AboutPage.displayName = "About Page (Page/About)"
AboutPage.getDataFragment = () => ['AboutData', AboutDataFragmentDoc]
AboutPage.getMetaData = async (contentLink, locale, client) => {
  const _sdk = getSdk(client);
  return {}
}

export default AboutPage