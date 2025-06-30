import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  const faqData = [
    {
      id: "programs",
      question: "What programs does Pennant Education offer?",
      answer:
        "We offer a wide range of programs including Software Development, Cybersecurity, Gaming, Data Science/AI, Design, and STEM-anchored K-12 programs. Additionally, we provide enrichment in English language/liberal arts, SAT/College Prep, and chess.",
    },
    {
      id: "apply",
      question: "How do I apply to Pennant Education?",
      answer:
        "You can apply to Pennant Education by visiting our admissions page and completing the online application form. Our admissions team will guide you through the process, which includes submitting transcripts, letters of recommendation, and a personal statement. We also offer virtual information sessions to help you learn more about our programs.",
    },
    {
      id: "accredited",
      question: "Are the programs at Pennant Education accredited?",
      answer:
        "Yes, all of our programs are fully accredited by recognized accrediting bodies. Our institution maintains high academic standards and is regularly reviewed to ensure we meet all educational requirements. This accreditation ensures that your credits and certifications will be recognized by employers and other educational institutions.",
    },
    {
      id: "online",
      question: "Can I take courses online?",
      answer:
        "We offer flexible learning options including fully online courses, hybrid programs, and in-person classes. Our online platform provides interactive learning experiences with live virtual classrooms, recorded lectures, and collaborative projects. You can choose the format that best fits your schedule and learning preferences.",
    },
    {
      id: "support",
      question: "What support services are available for students?",
      answer:
        "We provide comprehensive support services including academic advising, tutoring, career counseling, technical support, and mental health resources. Our dedicated student success team is available to help you navigate your educational journey, and we offer 24/7 online support for technical issues.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Header and Description */}
          <div className="space-y-6">
            <Badge variant="outline" className="w-fit px-3 py-1 text-sm font-medium">
              F.A.Q
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900 leading-tight">Frequently Asked Questions</h1>

              <p className="text-gray-600 text-lg leading-relaxed">
                At Pennant Education, we understand that you may have questions about our programs, enrollment process,
                and more. Below, we have compiled a list of frequently asked questions to help you get the information
                you need.
              </p>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                    <span className="text-lg font-semibold text-blue-600 group-hover:text-blue-700 transition-colors duration-200">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
