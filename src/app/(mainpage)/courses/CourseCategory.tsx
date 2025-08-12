"use client"
import Image from "next/image"
import { ArrowUpRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
// import Course1 from '../../images/form/1.jpg'
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react"
import Link from "next/link"
import { categories } from "@/app/utils/constant"

const CourseCategory = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    // const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 bg-gray-100">
            <div className="max-w-3xl mb-12 lg:mb-16 items-center justify-center mx-auto">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center text-blue-800">
                    Start Exploring & Find Your Perfect Category
                </h1>
                <hr className="w-48 h-1 mx-auto my-4 bg-blue-400 border-0 rounded md:my-10 dark:bg-gray-700" />
                <p className="text-sm md:text-base lg:text-lg text-gray-600 text-center">
                    Dive into our diverse range of categories and discover the ideal course to match your interests and goals.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                    <div
                        key={category.title}
                        className="group relative bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="aspect-[4/3] relative">
                            <Image
                                src={category.image}
                                alt={category.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="text-xl font-semibold">{category.title}</h3>
                                <Link href={category.link} target="_blank" rel="noopener noreferrer">
                                    <motion.div
                                        key={index}
                                        className="group h-10 md:h-12 px-3 md:px-2 bg-redFlag dark:bg-slate-600 rounded-full text-neutral-50 font-bold flex items-center overflow-hidden"
                                        initial={{ width: '25px'}}
                                        animate={{ width: hoveredIndex === index ? '100px' : '50px' }}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        transition={{ duration: 0.3 }}
                                    >

                                        <ArrowUpRight
                                            className="text-white w-6 h-6 md:w-8 md:h-8 shrink-0 group-hover:rotate-45 duration-200 transform-all"
                                        />
                                        <AnimatePresence>
                                            {hoveredIndex === index && (
                                                <motion.span
                                                    className="ml-2 origin-left dark:text-teal-500 text-left text-sm md:text-lg whitespace-nowrap group-hover:rotate-0"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    Visit
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </Link>
                            </div>
                            <p className="text-gray-600">{category.description}</p>
                        </div>
                        {/* <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center mx-auto py-5">
                <Button className="bg-redFlag">
                    <span>See More</span>
                </Button>
            </div>
        </div>
    )
}
export default CourseCategory;
