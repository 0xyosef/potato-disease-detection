import Section from "./Section";
import accuracy from "../assets/accuracy.png";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "./ui/use-toast";


export default function About() {
    const {isAuth}=useAuth();
    const {toast}=useToast();
    const navigate = useNavigate();

    return (
      <Section
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        id="about"
        className="w-full py-12 md:py-24 lg:py-32"
        >
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gray-100 text-muted px-3 py-1 text-sm dark:bg-gray-800">About Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-ring">Ai model to  potato disease detection </h2>
            <p className=" dark:text-gray-400 text-muted">
                 Our project focuses on developing and implementing AI-driven tools for early detection of potato diseases.
            </p>
            <p className=" dark:text-gray-400 text-muted">
            By utilizing machine learning algorithms and image processing techniques, our system can accurately identify various potato diseases at their initial stages.
            </p>
            <p className="text-muted dark:text-gray-400">
            This early detection empowers farmers to take timely action, preventing the spread of diseases and minimizing damage to their crops.
            </p>
            <a
             href={isAuth ? "#uploading" : "/signin"}>
                  <Button
                    onClick={() => {
                      if (!isAuth) {
                        toast({title: "Please sign in to continue", variant:"destructive"});
                      }
                    }}
                  >
                      Get started
                      
                  </Button>
              </a>
          </div>
          <img
            src={accuracy}
            alt="About Us"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center w-4/5"
          />
        </div>
      </Section>
    )
  }