import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

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
    </main>
  );
};
export default CoursePage;
