import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const packages = [
  {
    name: 'Quantum Start',
    price: '£299',
    description: 'Perfect for small businesses just beginning their digital journey',
    features: [
      { name: 'Responsive 5-page website', included: true },
      { name: 'Basic SEO optimization', included: true },
      { name: 'Contact form setup', included: true },
      { name: 'Google Business profile setup', included: true },
      { name: 'Social media integration', included: true },
      { name: '1 month of support', included: true },
      { name: 'Monthly performance reports', included: false },
      { name: 'Advanced analytics dashboard', included: false },
      { name: 'Custom copywriting', included: false },
      { name: 'Conversion optimization', included: false },
    ],
    isPopular: false,
    ctaText: 'Get Started',
  },
  {
    name: 'Quantum Growth',
    price: '£549',
    description: 'Designed for established businesses seeking to expand their digital footprint',
    features: [
      { name: 'Responsive 10-page website', included: true },
      { name: 'Advanced SEO optimization', included: true },
      { name: 'Contact form & lead capture setup', included: true },
      { name: 'Google Business & local SEO', included: true },
      { name: 'Social media integration & strategy', included: true },
      { name: '3 months of support', included: true },
      { name: 'Monthly performance reports', included: true },
      { name: 'Advanced analytics dashboard', included: true },
      { name: 'Custom copywriting (5 pages)', included: true },
      { name: 'Conversion optimization', included: false },
    ],
    isPopular: true,
    ctaText: 'Most Popular',
  },
  {
    name: 'Quantum Enterprise',
    price: '£849',
    description: 'Comprehensive solution for businesses serious about digital dominance',
    features: [
      { name: 'Responsive 15+ page website', included: true },
      { name: 'Comprehensive SEO strategy', included: true },
      { name: 'Custom forms & automation setup', included: true },
      { name: 'Full local SEO & citation building', included: true },
      { name: 'Social media strategy & content', included: true },
      { name: '6 months of priority support', included: true },
      { name: 'Weekly performance reports', included: true },
      { name: 'Custom analytics & KPI dashboard', included: true },
      { name: 'Full website copywriting', included: true },
      { name: 'Conversion optimization', included: true },
    ],
    isPopular: false,
    ctaText: 'Get Enterprise',
  },
];

const Packages: React.FC = () => {
  return (
    <section id="packages" className="section bg-gray-950/50 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">
            Choose Your <span className="gradient-text">Growth Path</span>
          </h2>
          <p className="text-gray-300">
            Strategic packages designed to deliver measurable results at every stage of business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`card relative overflow-hidden transition-all duration-300 ${
                pkg.isPopular ? 'border-indigo-500 transform md:-translate-y-4' : 'border-gray-700/50'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 inset-x-0 flex justify-center">
                  <div className="bg-indigo-500 text-white text-xs font-semibold px-4 py-1 rounded-b-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="heading-sm mb-2">{pkg.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-gray-400 ml-2">/ one-time</span>
                </div>
                <p className="text-gray-300 mb-6">{pkg.description}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      {feature.included ? (
                        <CheckCircle size={18} className="text-indigo-500 mr-2 flex-shrink-0" />
                      ) : (
                        <XCircle size={18} className="text-gray-500 mr-2 flex-shrink-0" />
                      )}
                      <span 
                        className={`text-sm ${
                          feature.included ? 'text-gray-200' : 'text-gray-500'
                        }`}
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`btn w-full ${
                    pkg.isPopular
                      ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                      : 'btn-secondary'
                  }`}
                >
                  {pkg.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">
            Need a custom solution? We also offer tailored packages to meet specific business needs.
          </p>
          <a href="#contact" className="btn btn-secondary">
            Request Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Packages;