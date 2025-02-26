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
