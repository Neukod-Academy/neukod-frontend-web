import Image, { StaticImageData } from 'next/image'
import JSlogo from '../assets/courses/js-logo.webp'
import Minecraftlogo from '../assets/courses/minecraft-logo.png'
import Pythonlogo from '../assets/courses/python-logo.png'
import Unitylogo from '../assets/courses/unity-logo.png'
import Awoklogo from '../assets/courses/awok-logo.webp'
import Xixi2logo from '../assets/courses/xixi2-logo.webp'
import Alamaklogo from '../assets/courses/alamak-logo.webp'
import Kiwir from '../assets/courses/kiwir.png'

export interface CourseHighlight {
    id: number;
    alt: string;
    image: StaticImageData;
  }
export const courseHighlight: CourseHighlight[] = [

    {
        id: 1,
        alt: 'Javascript',
        image: JSlogo,
    },
    {
        id: 2,
        alt: 'Minecraft Edu',
        image: Minecraftlogo,
    },
    {
        id: 3,
        alt: 'Phyton',
        image: Pythonlogo,
    },
    {
        id: 4,
        alt: 'Unity',
        image: Unitylogo,
    },
    {
        id: 5,
        alt: 'Awok',
        image: Awoklogo,
    },
    {
        id: 6,
        alt: 'Alamak',
        image: Alamaklogo,
    },
    {
        id: 7,
        alt: 'Xixi2',
        image: Xixi2logo,
    },
];

export interface COURSES{
    id: number;
    title: string;
    subtitle: string;
    categories: string[];
    alt: string;
    image: StaticImageData;
}
export const courses: COURSES[] =[
    {
        id: 1,
        title: 'Learn Data with Pyton',
        subtitle: 'this class is for beginner learning about data processing using the python language',
        categories: ['Beginner', 'Fcukin Python', 'Do not learn'],
        alt: 'Python Course',
        image: Awoklogo,
    },
    {
        id: 2,
        title: 'Check your khodam',
        subtitle: 'khodam dalam bahasa arab memiliki arti umum yaitu pembantu, penjaga, atau pengawal, namun karena istilah berbau mistis ini khodam biasanya dianggap dari alam ghaib entah dari bangsa jin atau malaikat.',
        categories: ['Knowledge','Khodam build'],
        alt: 'Khodam power',
        image: Alamaklogo,
    },
    {
        id: 3,
        title: 'Be farmer better',
        subtitle: 'Kita pewaris bukan perintis.',
        categories: ['Stop belajar','Mending nandur'],
        alt: 'Belajar tidak perlu',
        image: Kiwir,
    },
]