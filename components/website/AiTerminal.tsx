'use client'

import { JSX, useState } from "react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { AnimatedSpan, Terminal, TypingAnimation } from "../magicui/terminal";
import { AnimatePresence, motion } from "motion/react"
import { askingAI } from "@/lib/openai";

export function AITerminal() {

  const [buttons, setButtons] = useState<string[]>([
    "Who is Ekky/Kiki?",
    "Why the input for the chat is a button?",
    "What is the difference with other chatbots?",
    "How Kiki makes this?",
  ]);

  const [terminalText, setTerminalText] = useState<string>("Hi, I'm Kiki assistant. Ask me anything :)")

  const [terminalState, setTerminalState] = useState<JSX.Element>(
    <>
      <TypingAnimation>&gt; npm run dev ./ai-kiki</TypingAnimation>

      <AnimatedSpan delay={1500} className="text-green-500">
        <span>✔ Preflight checks.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2000} className="text-green-500">
        <span>✔ Verifying Data. Kiki Data Found.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2500} className="text-green-500">
        <span>✔ Checking AI.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-green-500">
        <span>✔ Checking registry.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4000} className="text-green-500">
        <span>✔ Checking dependencies.</span>
      </AnimatedSpan>

      {/* Uncomment if needed */}
      {/* <AnimatedSpan delay={6000} className="text-blue-500">
        <span>ℹ Updated 1 file:</span>
        <span className="pl-2">- lib/utils.ts</span>
      </AnimatedSpan> */}

      <TypingAnimation delay={6500} className="text-muted-foreground">
        System OK! You may ask me now!
      </TypingAnimation>
    </>
  );

  async function handleAskAI(text: string) {
    const response = await askingAI(text);
    setTerminalText(response.answer);
    setButtons(response.followUpQuestion ?? [])
  }
    
  const handleClick = (index: number, text: string): void => {
    //clear buttons
    setButtons([]);

    setTerminalText("Okay, please wait a moment...");

    handleAskAI(text)
  };


  return (
    <>
      <div className="lg:col-span-6 col-span-12">
        <Terminal>
          {terminalState}

              
          {/* <AnimatedSpan delay={6000} className="text-blue-500">
            <span>ℹ Updated 1 file:</span>
            <span className="pl-2">- lib/utils.ts</span>
          </AnimatedSpan> */}
    
          {/* <TypingAnimation delay={7000} className="text-muted-foreground">
            You may now add components.
          </TypingAnimation> */}
        </Terminal>
      </div>

      {/* Right Column - Additional Content */}
      <div className="lg:col-span-6 col-span-12">
        <div className="relative flex h-auto min-h-[300px] w-full flex-col overflow-hidden rounded-lg border bg-background p-4">
          {/* Top-left text */}
          {
            terminalText === "Okay, please wait a moment..." ? (
              <div className="flex items-center">
                <svg className="animate-spin mt-2 mr-1 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <TypingAnimation className="text-lg font-semibold self-start ml-2 mt-2">{terminalText}</TypingAnimation>
              </div>
            ) : (
              <TypingAnimation className="text-lg font-semibold self-start ml-2 mt-2">{terminalText}</TypingAnimation>
            )
          }

          {/* Multiple-choice buttons */}
          <div className="grid grid-cols-2 gap-4 mt-6 w-full">
            <AnimatePresence>
              {buttons.map((text, index) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{ delay: 0.7 + index * 1, duration: 0.6 }}
                >
                  <InteractiveHoverButton
                    className="text-xs w-full h-14"
                    additionalClick={() => handleClick(index, text)}
                  >
                    {text}
                  </InteractiveHoverButton>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
