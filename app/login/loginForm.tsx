"use client";
import { Button, } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const LoginForm = () => {
  return (
    <div className="w-full min-h-screen bg-gray-600 items-center justify-center flex p-24">
      <Card className="p-10">
        <CardHeader>
          <CardTitle className="text-center text-2xl md:text-3xl lg:text-4xl mb-2">
            Neukod Dashboard
          </CardTitle>
          <CardDescription className="text-base text-center mb-4">
            Fill in the form below to Login into dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 w-full">
            <div className="mb-4">
              <h1 className="text-lg">Username</h1>
              <Input
                placeholder="enter your username"
                className="border-2 border-white/80 px-1 py-2"
              />
            </div>
            <div className="mb-4">
            <h1 className="text-lg">Password</h1>
            <Input
              placeholder="enter your password"
              className="border-2 border-white/80 px-1 py-2"
            />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-end">
          <Button variant="outline" className="p-5">
            Cancel
          </Button>
          <Button variant="outline" className="bg-red-200 p-5">
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default LoginForm;
