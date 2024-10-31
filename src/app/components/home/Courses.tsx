"use client";

import * as React from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { courses, COURSES } from "../../utils/constant";
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
import Autoplay from "embla-carousel-autoplay";

export default function NewsCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full max-w-max mx-auto px-5 py-2 bg-lime-200">
      <h1 className="text-4xl font-bold mb-4">Courses</h1>
      <div className="text-orange-950 mb-6 flex items-center">
        <span>Try harder kids</span>
        <ChevronRight className="w-4 h-4 ml-1" />
      </div>
      <div className="gap-10 items-center justify-center">
        <Carousel
          setApi={setApi}
          className="w-full max-w-[900px]"
        >
          <CarouselContent className="-ml-1">
            {courses.map((paramcourse, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/1 lg:basis-1/1"
              >
                <div className="p-0 m-0 items-center">
                  <Card className="relative h-full w-auto rounded-md bg-gray-400">
                    <CardContent className="w-full md:w-[900px] h-[600px] relative mx-auto overflow-hidden rounded-lg p-0 bg-red-400">
                      <Image
                        src={paramcourse.image}
                        alt={paramcourse.alt}
                        className="w-full h-full object-cover z-0 rounded-lg transition-all duration-300 hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 p-4 text-white w-full">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 from-50% to-transparent rounded-md m-0" />
                        <div className="flex space-x-1 mb-4 mx-2">
                          {paramcourse.categories.map((categories, index) => (
                            <span
                              key={index}
                              className="bg-redFlag px-2 py-1 text-white text-lg rounded"
                            >
                              {categories}
                            </span>
                          ))}
                        </div>
                        <div>
                          <h6 className="mx-2 font-semibold text-left text-lg text-black lg:text-xl">
                            {paramcourse.title}
                          </h6>
                          <span className="mt-1 mb-2 text-lg text-black">
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
          <div className="flex gap-y-3 justify-center">
            <Button
              onClick={() => api?.scrollTo(current - 1)}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/80 transition-colors p-5 rounded-full"
            >
              <ChevronLeft />
            </Button>
            <Button
              onClick={() => api?.scrollTo(current + 1)}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/80 transition-colors p-5 rounded-full"
            >
              <ChevronRight />
            </Button>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
