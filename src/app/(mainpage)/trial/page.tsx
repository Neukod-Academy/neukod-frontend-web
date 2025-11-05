"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Users,
  BookOpen,
  Star,
  CheckCircle,
  Calendar,
} from "lucide-react";
import { TrialRequestModal } from "@/app/(mainpage)/trial/trial-request";
import BannerTrial from "@/app/images/trial/banner_trial2.jpg";
import Image from "next/image";

export default function TrialPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const courses = [
    {
      course_id: 1,
      title: "Mathematics",
      description: "Build strong foundations in math concepts",
      duration: "30-60 min",
      level: "All Levels",
      icon: "📊",
    },
    {
      course_id: 2,
      title: "Science",
      description: "Explore the wonders of science through experiments",
      duration: "30-60 min",
      level: "All Levels",
      icon: "🔬",
    },
    {
      course_id: 3,
      title: "Language Arts",
      description: "Improve reading, writing, and communication skills",
      duration: "30-60 min",
      level: "All Levels",
      icon: "📚",
    },
    {
      course_id: 4,
      title: "Programming",
      description: "Learn coding fundamentals in a fun way",
      duration: "30-60 min",
      level: "Beginner",
      icon: "💻",
    },
  ];

  const benefits = [
    "Experience our teaching methodology firsthand",
    "Meet our qualified instructors",
    "Assess if our approach fits your child's learning style",
    "No commitment required - completely free",
    "Flexible scheduling to fit your family's needs",
    "Small class sizes for personalized attention",
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent",
      content:
        "The trial class convinced us immediately. My daughter loved the interactive approach!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Parent",
      content:
        "Excellent teachers and engaging curriculum. We signed up after just one trial session.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Parent",
      content:
        "The personalized attention my son received was amazing. Highly recommend trying it!",
      rating: 5,
    },
  ];

  return (
    <main className="relative">
      <div className="relative  h-[40vh] lg:h-[60vh] w-full overflow-hidden items-center justify-center">
        <Image
          alt="Banner Trial"
          fill
          src={BannerTrial}
          className="w-full object-cover"
        />
          <div className="z-20 pt-24 relative text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 text-blue-200">
              Experience Learning Like Never Before!
            </h1>
            <p className="text-xl md:text-2xl text-white text-balance mb-8 max-w-3xl mx-auto">
              Give your child the opportunity to discover their potential with
              our free trial classes. No commitment, just pure learning
              excitement.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-base lg:text-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 p-8"
              onClick={() => setIsModalOpen(true)}
            >
              Start Your Free Trial
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
          </div>
      </div>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
              Why Try <span className="text-blue-800">Our Classes</span>?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-16 px-4 bg-card">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
              Available <span className="text-blue-800">Trial Courses</span>
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12 text-balance">
              Choose from our diverse range of subjects and find what sparks
              your child's interest
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{course.icon}</div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {course.level}
                    </div>
                    <Badge
                      variant="secondary"
                      className="w-full justify-center"
                    >
                      Available for Trial
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance text-blue-800">
              What Parents Are Saying
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="flex justify-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-accent text-accent"
                        />
                      ))}
                    </div>
                    <CardDescription className="text-base italic">
                      "{testimonial.content}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-card text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-blue-800">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Book your free trial class today and see the difference our
              personalized approach can make
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              onClick={() => setIsModalOpen(true)}
            >
              Book Your Free Trial Now
              <BookOpen className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
        {isModalOpen && (
          <TrialRequestModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </main>
  );
}
