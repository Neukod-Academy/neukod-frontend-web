import Image, { StaticImageData } from 'next/image'
import JSlogo from '../assets/courses/js-logo.webp'
import Minecraftlogo from '../assets/courses/minecraft-logo.png'
import Pythonlogo from '../assets/courses/python-logo.png'
import Unitylogo from '../assets/courses/unity-logo.png'
import Awoklogo from '../assets/courses/awok-logo.webp'
import Xixi2logo from '../assets/courses/xixi2-logo.webp'
import Alamaklogo from '../assets/courses/alamak-logo.webp'

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