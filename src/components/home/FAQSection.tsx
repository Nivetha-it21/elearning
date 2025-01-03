import React from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How do I enroll in a course?',
    answer: 'Simply browse our course catalog, select the course you are interested in, and click the "Enroll Now" button. You can pay securely using your preferred payment method.',
  },
  {
    question: 'Are the courses accredited?',
    answer: 'Yes, many of our courses are accredited by leading industry organizations. Each course page specifies its accreditation status and the certifications you wll receive upon completion.',
  },
  {
    question: 'Can I access the courses on mobile devices?',
    answer: 'Absolutely! Our platform is fully responsive and works seamlessly on all devices. You can learn on your computer, tablet, or smartphone.',
  },
  {
    question: 'What happens if I am not satisfied with a course?',
    answer: 'We offer a 30-day money-back guarantee. If you are not completely satisfied with your course, you can request a full refund within the first 30 days of enrollment.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-gray-600">Find answers to common questions about our platform</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                className="w-full px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-teal-600" />
                ) : (
                  <Plus className="h-5 w-5 text-teal-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
