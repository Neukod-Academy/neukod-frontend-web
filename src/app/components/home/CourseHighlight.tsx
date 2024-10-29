'use client';

import * as React from "react"
import Image from "next/image"
import { courseHighlight, CourseHighlight } from "../../utils/constant"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const CourseProgram = () => {
  return (
    <div className="flex w-full px-0 py-8 justify-center">
      <div className="relative flex flex-col md:flex-row gap-5 items-center">
        <div className="relative justify-start mx-2 w-auto p-2">
          <h1 className="text-3xl font-bold sm:texlt-left text-blue-900">
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
                          className="w-full h-full object-cover rounded-md"
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