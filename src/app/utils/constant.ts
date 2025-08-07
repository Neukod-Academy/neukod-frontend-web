import Image, { StaticImageData } from "next/image";
import JSlogo from "../images/courses/js-logo.webp";
import Minecraftlogo from "../images/courses/minecraft-logo.png";
import Pythonlogo from "../images/courses/python-logo.png";
import Unitylogo from "../images/courses/unity-logo.png";
import Awoklogo from "../images/courses/awok-logo.webp";
import Xixi2logo from "../images/courses/xixi2-logo.webp";
import Alamaklogo from "../images/courses/alamak-logo.webp";
import Kiwir from "../images/courses/kiwir.png";
import ImgFillform from "../images/form/formfill.png";
import ImgSubmitform from "../images/form/formsubmitted.png";
import BeginnerImg from "../images/course/beginner.jpg";
import InterImg from "../images/course/intermed.jpg";
import AdvanceImg from "../images/course/advance.jpg";

// DATA TESTIMONIAL - CARRER
import Testi1 from "../images/career-track/testimoni/testi1.jpeg";
import Testi2 from "../images/career-track/testimoni/testi2.jpeg";
import Testi3 from "../images/career-track/testimoni/testi3.jpeg";
import Testi4 from "../images/career-track/testimoni/testi4.jpeg";
import Testi5 from "../images/career-track/testimoni/testi5.jpeg";

// -------------- COURSE DATA --------------

export interface CourseHighlight {
  id: number;
  alt: string;
  image: StaticImageData;
}
export const courseHighlight: CourseHighlight[] = [
  {
    id: 1,
    alt: "Javascript",
    image: JSlogo,
  },
  {
    id: 2,
    alt: "Minecraft Edu",
    image: Minecraftlogo,
  },
  {
    id: 3,
    alt: "Phyton",
    image: Pythonlogo,
  },
  {
    id: 4,
    alt: "Unity",
    image: Unitylogo,
  },
  {
    id: 5,
    alt: "Awok",
    image: Awoklogo,
  },
  {
    id: 6,
    alt: "Alamak",
    image: Alamaklogo,
  },
  {
    id: 7,
    alt: "Xixi2",
    image: Xixi2logo,
  },
];

export interface COURSES {
  id: number;
  title: string;
  subtitle: string;
  categories: string[];
  alt: string;
  image: StaticImageData;
}
export const courses: COURSES[] = [
  {
    id: 1,
    title: "Learn Data with Pyton",
    subtitle:
      "this class is for beginner learning about data processing using the python language",
    categories: ["Beginner", "Fcukin Python", "Do not learn"],
    alt: "Python Course",
    image: Awoklogo,
  },
  {
    id: 2,
    title: "Check your khodam",
    subtitle:
      "khodam dalam bahasa arab memiliki arti umum yaitu pembantu, penjaga, atau pengawal, namun karena istilah berbau mistis ini khodam biasanya dianggap dari alam ghaib entah dari bangsa jin atau malaikat.",
    categories: ["Knowledge", "Khodam build"],
    alt: "Khodam power",
    image: Alamaklogo,
  },
  {
    id: 3,
    title: "Be farmer better",
    subtitle: "Kita pewaris bukan perintis.",
    categories: ["Stop belajar", "Mending nandur"],
    alt: "Belajar tidak perlu",
    image: Kiwir,
  },
];

export interface CoursePage {
  level: string;
  desc: string;
  list: string[];
  image: StaticImageData;
}
export const coursePage: CoursePage[] = [
  {
    level: "Beginner",
    desc: "Recommended course for beginner levels!",
    list: [
      "Fundamental UI/UX design",
      "OOP Fundamental",
      "Sample class beginner",
    ],
    image: BeginnerImg,
  },
  {
    level: "Intermediate",
    desc: "Recommended course for intermediate levels!",
    list: [
      "Sample course intermediate",
      "Sample course intermediate",
      "Sample course intermediate",
    ],
    image: InterImg,
  },
  {
    level: "Advance",
    desc: "Recommended course for advance levels!",
    list: [
      "Sample course Advance",
      "Sample course Advance",
      "Sample course Advance",
    ],
    image: AdvanceImg,
  },
];

// -------------- COURSE DATA END --------------


// -------------- FORM TRIAL --------------

export interface FormTrial {
  id: number;
  alt: string;
  image: StaticImageData;
}

export const formTrial: FormTrial[] = [
  {
    id: 1,
    alt: "Fill Form",
    image: ImgFillform,
  },
  {
    id: 2,
    alt: "Submit Form",
    image: ImgSubmitform,
  },
];


// -------------- FORM TRIAL END --------------



// -------------- TESTIMONIAL - CARRER PAGE --------------

export interface Testimonials {
  id: number;
  name: string;
  image: StaticImageData;
  quote: string;
  course: string;
}
export const testimonials: Testimonials[] = [
  {
    id: 1,
    name: "Doro",
    image: Testi1,
    quote:
      "This course completely transformed my understanding of web development. The instructor's teaching style made complex concepts easy to grasp.",
    course: "Full Stack Development",
  },
  {
    id: 2,
    name: "High Cat",
    image: Testi2,
    quote:
      "I went from zero coding knowledge to building my own applications. The hands-on projects were incredibly valuable for my learning journey.",
    course: "JavaScript Fundamentals",
  },
  {
    id: 3,
    name: "Choke kid",
    image: Testi3,
    quote:
      "The course structure was perfect for working professionals. I could learn at my own pace while getting real-world experience.",
    course: "React Development",
  },
  {
    id: 4,
    name: "Dragon neck",
    image: Testi4,
    quote:
      "Outstanding content and support from the community. This course helped me transition into a tech career successfully.",
    course: "Python for Beginners",
  },
  {
    id: 5,
    name: "Black crime",
    image: Testi5,
    quote:
      "The practical approach and real-world projects made all the difference. I'm now confident in my development skills.",
    course: "UI/UX Design",
  },
];

// -------------- TESTIMONIAL - CARRER PAGE END --------------



// -------------- FAQ DATA --------------

export interface FAQData {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQData[] = [
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

// -------------- FAQ DATA END--------------