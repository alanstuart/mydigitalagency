import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    projectType: '',
    message: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        budget: '',
        projectType: '',
        message: '',
      });
    }, 5000);
  };

  return (
    <section id="contact" className="section">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">
            Ready to <span className="gradient-text">Transform</span> Your Digital Presence?
          </h2>
          <p className="text-gray-300">
            Let's discuss how we can help you achieve measurable growth through strategic digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-4">
            <div className="card p-8 h-full">
              <h3 className="heading-sm mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 mr-4 flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-indigo-400 font-medium mb-1">Email Us</h4>
                    <a href="mailto:hello@quantnexsolutions.com" className="text-gray-300 hover:text-white transition-colors">
                      hello@quantnexsolutions.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 mr-4 flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-indigo-400 font-medium mb-1">Call Us</h4>
                    <a href="tel:+441234567890" className="text-gray-300 hover:text-white transition-colors">
                      +44 123 456 7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 mr-4 flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-indigo-400 font-medium mb-1">Visit Us</h4>
                    <address className="not-italic text-gray-300">
                      123 Tech Hub Street<br />
                      London, UK EC1V 4PW
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-semibold mb-3">Office Hours</h4>
                <p className="text-gray-300">Monday - Friday: 9am - 6pm</p>
                <p className="text-gray-300">Saturday: 10am - 2pm</p>
                <p className="text-gray-300">Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-8">
            <div className="card p-8">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-indigo-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-indigo-500" />
                  </div>
                  <h3 className="heading-md mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-300 mb-6">
                    Thank you for reaching out. We'll be in touch with you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="heading-sm mb-6">Let's Discuss Your Project</h3>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-300 mb-2">
                          Full Name <span className="text-indigo-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="e.g. John Smith"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-300 mb-2">
                          Email Address <span className="text-indigo-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="e.g. john@company.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="e.g. +44 123 456 7890"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-gray-300 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="e.g. Acme Inc."
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="budget" className="block text-gray-300 mb-2">
                          Budget Range <span className="text-indigo-500">*</span>
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <option value="" disabled>Select your budget range</option>
                          <option value="£250 - £500">£250 - £500</option>
                          <option value="£500 - £1,000">£500 - £1,000</option>
                          <option value="£1,000 - £2,500">£1,000 - £2,500</option>
                          <option value="£2,500+">£2,500+</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="projectType" className="block text-gray-300 mb-2">
                          Project Type <span className="text-indigo-500">*</span>
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <option value="" disabled>Select project type</option>
                          <option value="Web Development">Web Development</option>
                          <option value="SEO Strategy">SEO Strategy</option>
                          <option value="Copywriting">Copywriting</option>
                          <option value="Complete Digital Solution">Complete Digital Solution</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="message" className="block text-gray-300 mb-2">
                          Project Details <span className="text-indigo-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="Tell us about your project and goals..."
                        ></textarea>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <p className="text-gray-400 text-sm">
                        <span className="text-indigo-500">*</span> Required fields
                      </p>
                      <button
                        type="submit"
                        className="btn btn-primary"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;