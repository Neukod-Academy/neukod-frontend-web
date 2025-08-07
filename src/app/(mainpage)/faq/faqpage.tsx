import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { faqData } from "@/app/utils/constant"

export default function Component() {
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
