"use client";

import type React from "react";

<<<<<<< HEAD
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Clock, User, BookOpen } from "lucide-react";
=======
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { Clock, User, BookOpen } from "lucide-react"
import { PhoneInput } from "@/components/ui/phone-input"
import type { E164Number } from "libphonenumber-js/core"
import SuccessDialog from "./submit-dialog"
>>>>>>> refs/remotes/origin/dev

interface TrialRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TrialRequestModal({ isOpen, onClose }: TrialRequestModalProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    country: "",
    courses: "",
    duration: "",
  });

<<<<<<< HEAD
  const courses = ["Backend", "Frontend"];

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Spain",
    "Italy",
    "Netherlands",
    "Sweden",
    "Other",
  ];
=======
  const courses = [
    "Backend Development",
    "Frontend Development",
    "Fullstack Development",
    "Game Development",
  ]

const countryList = require('country-list');
const countries = countryList.getNames();
>>>>>>> refs/remotes/origin/dev

const handlePhoneChange = (value: E164Number | undefined) => {
    setFormData((prev) => ({
      ...prev,
      phone: value ? String(value) : "",
    }))
  }
  const handleCourseChange = (course: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      courses: checked
        ? [...prev.courses, course]
        : prev.courses.filter((c) => c !== course),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.parentName ||
      !formData.email ||
      !formData.phone ||
      !formData.country ||
      formData.courses.length === 0 ||
      !formData.duration
    ) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to book your trial class.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const appointmentDate = new Date().toISOString();

      const requestData = {
        appointment: appointmentDate,
        parent: {
          name: formData.parentName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
        },
        course: formData.courses,
        duration: Number.parseInt(formData.duration),
      };

      const response = await fetch("http://127.0.0.1:4000/trials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit trial request");
      }

      toast({
        title: "Trial Request Submitted!",
        description:
          "We'll contact you within 24 hours to schedule your free trial class.",
      });

      // Reset form and close modal
      setFormData({
        parentName: "",
        email: "",
        phone: "",
        country: "",
        courses: [],
        duration: "",
      });
      onClose();
    } catch (error) {
      console.error("Error submitting trial request:", error);
      toast({
        title: "Submission Failed",
        description:
          error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-5">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-blue-800">
            Book Your Free Trial Class
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Parent Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Parent Information
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="parentName">Parent Name *</Label>
                <Input
                  id="parentName"
                  value={formData.parentName}
<<<<<<< HEAD
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      parentName: e.target.value,
                    }))
                  }
                  placeholder="Enter your full name"
=======
                  onChange={(e) => setFormData((prev) => ({ ...prev, parentName: e.target.value }))}
                  placeholder="Enter your parent name"
>>>>>>> refs/remotes/origin/dev
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
<<<<<<< HEAD
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  placeholder="Enter your phone number"
=======
                 <PhoneInput
                  international
                  countryCallingCodeEditable={false}
                  value={formData.phone as E164Number | undefined}
                  onChange={handlePhoneChange}
                  addInternationalOption={true}
                  formNoValidate
                  placeholder="+1 (555) 000-0000"
                  className="bg-background/50 border-accent/20 focus:border-accent/50 transition-colors"
>>>>>>> refs/remotes/origin/dev
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Country *</Label>

                <Select
                  value={formData.country}
<<<<<<< HEAD
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, country: value }))
                  }
=======
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, country: value }))}
                  required
>>>>>>> refs/remotes/origin/dev
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country: string) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Course Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Course Interest *
            </h3>
            <p className="text-sm text-muted-foreground">
              Select all courses you'd like to try (you can choose multiple)
            </p>

            {/* <div className="grid md:grid-cols-2 gap-3">
              {courses.map((course) => (
                <div key={course} className="flex items-center space-x-2">
                  <Checkbox
                    id={course}
                    checked={formData.courses.includes(course)}
                    onCheckedChange={(checked) => handleCourseChange(course, checked as boolean)}
                  />
                  <Label htmlFor={course} className="text-sm font-normal">
                    {course}
                  </Label>
                </div>
              ))}
            </div> */}
            {courses.map((course) => (
              <div key={course} className="flex items-center space-x-2">
                <RadioGroup 
                  value={formData.courses}
                  onValueChange={(value) =>{
                    setFormData((prev) => ({ ...prev, courses: value}))
                  }}
                  >
                    <RadioGroupItem value={course} id={course} />
                  <Label htmlFor={course} className="text-sm font-normal">
                    {course}
                  </Label>
                </RadioGroup>
              </div>
            ))}
          </div>

          {/* Duration Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Trial Duration *
            </h3>

            <RadioGroup
              value={formData.duration}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, duration: value }))
              }
              className="grid md:grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="30" id="30min" />
                <Label htmlFor="30min" className="flex-1 cursor-pointer">
                  <div className="font-medium">30 Minutes</div>
                  <div className="text-sm text-muted-foreground">
                    Perfect for a quick introduction
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="60" id="60min" />
                <Label htmlFor="60min" className="flex-1 cursor-pointer">
                  <div className="font-medium">60 Minutes</div>
                  <div className="text-sm text-muted-foreground">
                    Full experience with hands-on activities
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 bg-transparent"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl duration-200 transform hover:scale-105 flex-1 hover:bg-accent hover:text-accent-foreground transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
