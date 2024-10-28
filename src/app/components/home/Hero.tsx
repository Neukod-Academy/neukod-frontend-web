import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Banner from "../../assets/banner.jpg";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="relative w-auto h-auto md:h-[600px] max-h-[900px] overflow-hidden mt-20 py-5">
      <Image
        src={Banner}
        alt="Students studying together"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-cyan-500/50" />
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm sm:text-base font-semibold text-white mb-2">
              WELCOME TO PENNANT EDUCATION
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              EDUCATION = <br className="hidden sm:inline" />
              OPPORTUNITY
            </h1>
            <p className="text-white text-base sm:text-lg md:text-xl mb-6 max-w-2xl">
              Education is the cornerstone of a brighter future, opening doors
              to enhanced career prospects and personal growth. In today's
              fast-paced world, staying ahead means continuously developing
              skills and expertise, particularly in emerging technologies. By
              embracing education, students of all ages can unlock their
              potential, gaining the knowledge and tools necessary to excel.
            </p>
            <Button
              size="lg"
              className="bg-indigo-900 text-white hover:bg-indigo-800"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
