'use client';

import * as React from "react"
import Image from "next/image"
import { courseHighlight } from "../../utils/constant"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const CourseProgram = () => {
  return (
    <div className="flex w-full px-24 py-4 justify-center bg-gray-100 rounded-md">
      <div className="relative flex flex-col md:flex-row gap-4 items-center">
        <div className="flex justify-start mx-2 w-auto p-2">
          <h1 className="text-xl md:text-3xl font-bold sm:text-left text-blue-900">
            Our Programs
          </h1>
        </div>
        <div
          className="invisible md:visible relative h-auto min-h-[1em] w-0.5 items-center justify-center self-stretch bg-neutral-200 dark:bg-white/10">
          </div>
          <div
          className="invisible sm:visible h-[0.5px] w-full sm:w-auto self-stretch bg-neutral-200 dark:bg-white/10"></div>
        <div className="flex justify-end mx-auto right-0 pl-10">
          {/* Perlu dikasih Lazy Loading Embla */}
          <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-[900px]"
          >
            <CarouselContent>
              {courseHighlight.map((course, index) => (
                <CarouselItem key={index} className="relative basis-1/3 md:basis-1/4 lg:basis-1/6">
                  <div className="relative h-full w-full bg-transparent">
                    <Card className="flex h-full items-center justify-center bg-transparent border-transparent">
                      <CardContent className="relative w-full items-center p-0">
                        <Image
                          src={course.image}
                          alt={course.alt}
                          className="w-full h-full min-w-[20px] object-cover rounded-md"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  )
}
export default CourseProgram;