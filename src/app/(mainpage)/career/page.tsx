import CareerSection from "./careertrack";
import FAQPage from "../faq/faqpage";
import TeacherSection from "../teacher-section/page";
import TestimonialSection from "./careerComponent/testimonialSection";

export default function Page() {
  return (
    <main className="flex flex-col justify-center gap-10 py-5 overflow-hidden">
      <CareerSection />
      <FAQPage />
      <TeacherSection />
      <TestimonialSection />
    </main>
  );
}
