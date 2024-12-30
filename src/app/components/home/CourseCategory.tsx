import Image from "next/image"
import { ArrowUpRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Course1 from "../../assets/form/1.jpg"

export default function CourseCategories() {
    const categories = [
        {
            title: "Data Analytics",
            description: "Master data-driven decision-making with essential analytics skills and tools.",
            image: Course1,
        },
        {
            title: "Marketing",
            description: "Marketing is the art of connecting brands with people, driving engagement.",
            image: Course1,
        },
        {
            title: "UI/UX",
            description: "UI/UX design focuses on creating seamless, intuitive, and visually appealing experiences.",
            image: Course1,
        },
    ]

    return (
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
            <div className="max-w-3xl mb-12 lg:mb-16">
                <h1 className="text-4xl md:text-5xl font-semibold mb-4">
                    Start Exploring: Find Your Perfect{" "}
                    <span className="text-blue-800">Category</span>
                </h1>
                <p className="text-gray-600 text-lg">
                    Dive into our diverse range of categories and discover the ideal course to match your interests and goals.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
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
                                <div className="p-2 bg-teal-600 rounded-full text-white transform translate-y-[-8px] group-hover:translate-y-[-12px] transition-transform duration-300">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                            <p className="text-gray-600">{category.description}</p>
                        </div>
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

