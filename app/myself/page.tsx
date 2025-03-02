'use client'

import { TextAnimate } from "@/components/magicui/text-animate";
import Footer from "@/components/website/Footer";
import { useState } from "react";
import FileTree from "@/components/website/FileTree";
import { AnimatePresence, motion } from "motion/react"
import { AITerminal } from "@/components/website/AiTerminal";
import { LifeData } from "@/data/lifedata";

export default function Myself() {
  
  const [fileViewId, setFileViewId] = useState<string | null>("educationformal.tsx");

  const selectedFile = fileViewId ? LifeData[fileViewId] : null;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen px-8 pb-16 sm:px-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2  w-full max-w-screen-lg">
                
        <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-8 my-5 pt-10 mt-10">
          {/* Left Image Section */}
          <div className="sm:col-span-3 flex justify-start">
            <img 
              src="/assets/ekky-at-google-cropped.png" 
              alt="Ekky Mulia Lasardi" 
              className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full shadow-lg"
            />
          </div>

          {/* Right Text Section */}
          <div className="sm:col-span-9 flex flex-col">
            <TextAnimate animation="blurInUp" by="character" once className="text-2xl font-semibold tracking-tight pb-2">
              Hi there, thanks for dropping by!
            </TextAnimate>

            <h1 className="text-4xl font-bold tracking-tight pb-4">
              I'm Ekky Mulia Lasardi (Ekky/Kiki) 👋
            </h1>
            
            <p className="text-xl text-gray-700 font-semibold tracking-tight">
              A Software Engineer based in Jakarta,<br />
              mainly focused on Fullstack and Generative AI.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-2xl font-semibold tracking-tight pb-4">Professional Summary</span>
          
          <p className="text-justify text-lg text-gray-500 font-semibold tracking-tight">
            Specializing in full-stack development and AI-driven solutions, I have over a year of remote freelancing experience, completing more than 20 projects that enhance user satisfaction and performance. Currently, I am pursuing a Bachelor’s degree in Software Engineering Technology at IPB University, where I lead the Google Developer Group on campus and mentor students in web development.
            <br /><br />
            My achievements include developing an award-winning AI integrated help center system and an AI self-evaluating examination system recognized in competitions hosted by the Indonesian Ministry of Education, Culture, Research, and Technology. I hold certifications in DevOps, Cloud Technology, and Front-End Development, showcasing my commitment to innovation in technology.
          </p>
        </div>

        <div className="flex flex-col mt-6 w-full">
          <span className="text-2xl font-semibold tracking-tight pb-4">Let's Have a Chat (Powered by Chat GPT Omni 3)</span>

          <div className="grid lg:grid-cols-12 md:grid-cols-1 gap-8 w-full">
            
            {/* Left Column - Tree View */}
            <AITerminal/>

          </div>
        </div>

        <div className="flex flex-col mt-6 w-full">
          <span className="text-2xl font-semibold tracking-tight pb-4">My Life Story</span>

          <div className="grid lg:grid-cols-12 md:grid-cols-1 gap-8 w-full">
            
            {/* Left Column - Tree View */}
            <div className="lg:col-span-3 col-span-12">
              <FileTree setFileViewId={setFileViewId} />
            </div>

            {/* Right Column - File Content */}
            <div className="lg:col-span-9 col-span-12">
              <div className="relative flex h-auto min-h-[300px] w-full flex-col items-start justify-start overflow-hidden rounded-lg border bg-background p-4">
              <AnimatePresence mode="wait">
                {selectedFile ? (
                  <motion.div
                    key={fileViewId} // 🔥 Ensure animation is applied when switching
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="col-span-12">
                      <h4 className="font-semibold text-lg">{selectedFile.storyTitle}</h4>
                    </div>
                    <div className="col-span-12 mt-5 mb-3">
                      <p className="text-gray-800 text-md text-justify">{selectedFile.shortSummary}</p>
                    </div>

                    {selectedFile.sections.map((section, index) => (
                      <div key={index}>{section}</div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Select a file to view
                  </motion.div>
                )}
              </AnimatePresence>
              </div>
            </div>

          </div>
        </div>


        <Footer />
      </main>
    </div>
  );
}