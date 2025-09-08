import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { ServicesDataFragmentDoc, type ServicesDataFragment } from "@/gql/graphql";
import { getSdk } from "@/gql";
import Image from "next/image";
import Link from "next/link";

/**
 * Services Page - CMS Component
 * This will be displayed in the CMS visual builder
 */
export const ServicesPage : CmsComponent<ServicesDataFragment> = ({ data: _data, children: _children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of services designed to help your business 
            grow and succeed in today&apos;s competitive market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
              <span className="text-white text-2xl">💻</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Development</h3>
            <p className="text-gray-600 mb-6">
              Custom web applications built with modern technologies. 
              Responsive design that works on all devices.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• React & Next.js Applications</li>
              <li>• E-commerce Solutions</li>
              <li>• API Development</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-6">
              <span className="text-white text-2xl">📱</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Apps</h3>
            <p className="text-gray-600 mb-6">
              Native and cross-platform mobile applications 
              that deliver exceptional user experiences.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• iOS & Android Development</li>
              <li>• React Native Apps</li>
              <li>• App Store Optimization</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
              <span className="text-white text-2xl">☁️</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Solutions</h3>
            <p className="text-gray-600 mb-6">
              Scalable cloud infrastructure and DevOps solutions 
              to optimize your business operations.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• AWS & Azure Services</li>
              <li>• CI/CD Pipelines</li>
              <li>• Serverless Architecture</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mb-6">
              <span className="text-white text-2xl">🎨</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">UI/UX Design</h3>
            <p className="text-gray-600 mb-6">
              Beautiful and intuitive user interfaces that 
              enhance user engagement and satisfaction.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• User Research & Testing</li>
              <li>• Prototyping & Wireframing</li>
              <li>• Design Systems</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
              <span className="text-white text-2xl">📊</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Analytics</h3>
            <p className="text-gray-600 mb-6">
              Data-driven insights and analytics solutions 
              to help you make informed business decisions.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Business Intelligence</li>
              <li>• Data Visualization</li>
              <li>• Predictive Analytics</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-indigo-500 rounded-lg flex items-center justify-center mb-6">
              <span className="text-white text-2xl">🔒</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cybersecurity</h3>
            <p className="text-gray-600 mb-6">
              Comprehensive security solutions to protect 
              your business from cyber threats.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Security Audits</li>
              <li>• Penetration Testing</li>
              <li>• Compliance & Training</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            <Image
              src="/file.svg"
              alt="Contact"
              width={20}
              height={20}
              className="mr-2"
            />
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}

ServicesPage.displayName = "Services Page (Page/Services)"
ServicesPage.getDataFragment = () => ['ServicesData', ServicesDataFragmentDoc]
ServicesPage.getMetaData = async (contentLink, locale, client) => {
  const _sdk = getSdk(client);
    return {}
}

export default ServicesPage