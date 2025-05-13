import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    
    // Create email content
    const subject = `New Project Inquiry from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Budget Range: ${formData.budget}
Project Type: ${formData.projectType}

Message:
${formData.message}
    `.trim();

    // Open mailto link
    window.location.href = `mailto:alan.s.holding@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setFormSubmitted(true);
    
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
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
            Ready to <span className="gradient-text">Transform</span> Your Project?
          </h2>
          <p className="text-gray-300">
            Let's discuss how we can help you build something amazing.
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
                    <a href="mailto:alan.s.holding@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                      alan.s.holding@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-8">
            <div className="card p-8">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-indigo-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail size={32} className="text-indigo-500" />
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
                          <option value="£500 - £1,000">£500 - £1,000</option>
                          <option value="£1,000 - £2,000">£1,000 - £2,000</option>
                          <option value="£2,000 - £3,500">£2,000 - £3,500</option>
                          <option value="Custom">Custom Quote</option>
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
                          <option value="Basic Website">Basic Website</option>
                          <option value="Advanced Website">Advanced Website</option>
                          <option value="Custom Solution">Custom Solution</option>
                          <option value="Technical Consulting">Technical Consulting</option>
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