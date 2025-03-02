import { Meteors } from "@/components/magicui/meteors";
import { ShinyButton } from "@/components/magicui/shiny-button";
import Footer from "@/components/website/Footer";
import { ProjectsData } from "@/data/projectdata";

export default function Projects() {
  
    return (
        <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen px-4 sm:px-8 pb-12 sm:pb-16 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-6 sm:gap-8 row-start-2 w-full max-w-screen-lg">
                
                <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-6 sm:gap-8 my-5 pt-8 sm:pt-10 mt-8 sm:mt-10 text-center sm:text-left">
                    <div className="sm:col-span-9 flex flex-col">
                        <Meteors number={30} />
                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight pb-3 sm:pb-4">  
                            My Projects 🚀  
                        </h1>  
                        <p className="text-lg sm:text-xl text-gray-700 font-semibold tracking-tight leading-relaxed">  
                            A curated collection of my personal, competition, and professional projects—crafted with passion and innovation.
                        </p>
                    </div>
                </div>

                {/* Personal/Hobby Projects */}
                <div className="flex flex-col">
                    <span className="text-xl sm:text-2xl font-semibold tracking-tight pb-3 sm:pb-4">Personal/Hobby Projects</span>
                    
                    <p className="text-justify text-base sm:text-lg text-gray-500 font-semibold tracking-tight leading-relaxed">
                        These projects showcase my passion for integrating innovative technologies such as AI, Web3, and interactive systems to solve real-world problems. From automating dynamic question generation and real-time analytics in exam systems to developing Web3 identity verification solutions, I focus on creating platforms that enhance user experience, improve transparency, and enable efficient communication.
                    </p>

                    <div className="w-full mt-5 sm:mt-6">
                        {ProjectsData["personalhobbycompetitionproject"].sections.map((item, index) => (
                            <div key={index}>{item}</div>
                        ))}
                    </div>

                    <div className="mt-3 sm:mt-4">
                        <ShinyButton>
                            <span className="flex items-center gap-2">... and still more</span>
                        </ShinyButton>
                    </div>
                </div>

                {/* Freelance/Work Projects */}
                <div className="flex flex-col">
                    <span className="text-xl sm:text-2xl font-semibold tracking-tight pb-3 sm:pb-4">Freelance/Work Projects</span>
                    
                    <p className="text-justify text-base sm:text-lg text-gray-500 font-semibold tracking-tight leading-relaxed">
                        Throughout my freelance career, I have independently designed and developed robust systems tailored to client needs, with a focus on multi-tenancy, real-time analytics, and seamless integrations.
                    </p>

                    <div className="w-full mt-5 sm:mt-6">
                        {ProjectsData["freelanceworkproject"].sections.map((item, index) => (
                            <div key={index}>{item}</div>
                        ))}
                    </div>

                    <div className="mt-3 sm:mt-4">
                        <ShinyButton>
                            <span className="flex items-center gap-2">... and still more</span>
                        </ShinyButton>
                    </div>
                </div>

                <Footer />
            </main>
        </div>
    )

}