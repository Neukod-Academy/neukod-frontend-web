"use client"
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const CoursePage = () => {
  return (
    <main>
      <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4">Empower</p>
              <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Unlock Your Potential with Our Expertise
              </h1>
              <p className="mb-6 md:mb-8 md:text-md">
                Partnering with us means gaining access to top-tier IT services
                tailored to your needs. Our consultancy empowers your business
                to thrive in a digital landscape.
              </p>
              <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                <div>
                  <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                    Expert Guidance
                  </h6>
                  <p>
                    Leverage our expertise to navigate complex IT challenges
                    with confidence.
                  </p>
                </div>
                <div>
                  <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                    Tailored Solutions
                  </h6>
                  <p>
                    Customized strategies designed to meet your unique business
                    requirements.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Learn More" variant="secondary">
                  Learn More
                </Button>
                <Button title="Sign Up" variant="link" size="lg">
                  Sign Up <ChevronRight />
                </Button>
              </div>
            </div>
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="w-full object-cover"
                alt="Relume placeholder image"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
            <div>
              <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                Discover Our Impressive Achievements and Client Satisfaction
                Metrics
              </h2>
              <p className="mb-6 md:mb-8 md:text-md">
                Our commitment to excellence is reflected in our outstanding
                results. With a client satisfaction rate that speaks volumes, we
                are proud of our achievements.
              </p>
              <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                    95%
                  </h3>
                  <p>Client satisfaction rate based on recent surveys.</p>
                </div>
                <div>
                  <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                    100%
                  </h3>
                  <p>Projects delivered on time and within budget.</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="w-full object-cover"
                alt="Relume placeholder image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-8">
      {/* Introduction Section */}
      <motion.section
        className="mb-12 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Courses</h1>
        <p className="text-xl text-muted-foreground">
          Discover a wide range of courses designed to enhance your skills and knowledge in various fields. From
          programming to design, we have something for everyone.
        </p>
      </motion.section>

      {/* Categories and Recommendations Section */}
      <motion.section className="mb-16" initial="hidden" animate="visible" variants={staggerChildren}>
        <h2 className="text-3xl font-semibold mb-6 text-center">Course Categories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Beginner", "Intermediate", "Advanced"].map((level) => (
            <motion.div key={level} variants={fadeIn}>
              <Card className="h-full transition-transform duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle>{level} Courses</CardTitle>
                  <CardDescription>Recommended for {level.toLowerCase()} learners</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Introduction to Web Development</li>
                    <li>Basic Data Analysis</li>
                    <li>Fundamentals of UX Design</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">View {level} Courses</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* All Courses Section */}
      <motion.section initial="hidden" animate="visible" variants={staggerChildren}>
        <h2 className="text-3xl font-semibold mb-6 text-center">Explore Our Courses</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3, 4, 5, 6].map((course) => (
            <motion.div key={course} variants={fadeIn}>
              <Card className="h-full transition-transform duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle>Course Title {course}</CardTitle>
                  <CardDescription>Brief description of the course</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Course details and highlights...</p>
                </CardContent>
                <CardFooter>
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button size="lg">Explore All Courses</Button>
        </motion.div>
      </motion.section>
    </section>
    </main>
  );
};
export default CoursePage;
