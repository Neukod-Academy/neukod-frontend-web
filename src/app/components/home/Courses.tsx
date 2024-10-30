"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { courses, COURSES } from "../../utils/constant"
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function NewsCarousel() {
    return (
        <div className="w-full max-w-max mx-auto px-24 py-2">
            <h1 className="text-4xl font-bold mb-4">
                Courses
            </h1>
            <div className="text-orange-950 mb-6 flex items-center">
                <span>Try harder kids</span>
                <ChevronRight className="w-4 h-4 ml-1" />
            </div>

            <Carousel className="w-full max-w-[800px]">
                <CarouselContent className="p-3 relative">
                    {courses.map((paramcourse, index) => (
                        <CarouselItem key={index} className="relative md:basis-1/1 lg:basis-1/1 hover:scale-105 duration-500 transition-transform">
                            <div className="p-0 m-0 items-center justify-center w-full">
                                <Card className="relative h-[500px] w-full rounded-md">
                                    <CardContent className="relative justify-center w-full h-full p-1">
                                        <Image
                                            src={paramcourse.image}
                                            alt={paramcourse.alt}
                                            className="w-full h-full object-cover rounded-md"
                                        />
                                        <div className="absolute bottom-0 left-0 p-4 text-white w-full">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 from-50% to-transparent rounded-md m-1" />
                                            <div className="flex space-x-1 mb-4 mx-2">
                                                {paramcourse.categories.map((categories, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-redFlag px-2 py-1 text-white text-xs rounded"
                                                    >
                                                        {categories}
                                                    </span>
                                                ))}
                                            </div >
                                            <div>
                                                <h6 className="mx-2 font-semibold text-left text-base text-black lg:text-sm">
                                                    {paramcourse.title}
                                                </h6>
                                                <span className="mt-1 mb-2 mx-2 text-xs text-black">
                                                    {paramcourse.subtitle}
                                                </span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}