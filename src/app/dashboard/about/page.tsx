'use client'

import AnimatedBody from "@/app/animations/animated-body";
import AnimatedTitle from "@/app/animations/animated-title";
import { NavbarDemo } from "@/app/components/NavbarDemo";

const About = () => {
  return (
<>
<NavbarDemo/>
<section
      className="relative mt-10 z-10 w-full items-center justify-center overflow-hidden bg-cover bg-center pt-16 pb - 36 md:pt-20 md:pb - 44 lg:pt-20 lg:pb - 56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "RESTORING THE PAST WITH GENERATIVE AI."
          }
          className={
            "font-clash-display-semibold mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
          <AnimatedBody
              text={"Hello! We're Nadaan Parinde."}
              className={"underline underline-offset-4 hover:no-underline"}
            />
            <AnimatedBody
              text={
                "We are a passionate team dedicated to harnessing the power of generative AI for restoration projects. Our goal is to restore and revive objects, images, and environments that are lost or damaged."
              }
            />
            <AnimatedBody
              text={
                "With our innovative solutions, we combine state-of-the-art AI techniques with creative design to bring new life to historical artifacts, art, and personal memories."
              }
            />
            <AnimatedBody
              text={
                "Our expertise lies in developing web applications that integrate Python restoration libraries and APIs, enabling users to easily restore their cherished items."
              }
            />
            <AnimatedBody
              text={
                "We're driven by the desire to push the boundaries of technology and art. By collaborating with cultural institutions and individuals, we aim to make restoration accessible and impactful."
              }
            />
            <AnimatedBody
              text={
                "When we're not working on exciting restoration projects, we enjoy exploring the latest trends in AI and technology, and sharing our findings with the community."
              }
            />
            <AnimatedBody
              text={
                "Join us on this journey of innovation and creativity. Together, let's restore the past and inspire the future!"
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Frontend Tools"}
                className={
                  "text-[24px] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "JavaScript (ES6+), React, Next.js, Tailwind CSS, TypeScript, Redux, Git/GitHub, NextAuth."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Backend Tools"}
                className={
                  "text-[24px] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Python, Flask, FastAPI, MongoDB, REST APIs, Generative AI Libraries."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"AI Tools"}
                className={
                  "text-[24px] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "TensorFlow, PyTorch, OpenCV, Generative Adversarial Networks (GANs)."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
</>
  );
};

export default About;