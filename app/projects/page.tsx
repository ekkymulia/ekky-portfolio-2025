import { Meteors } from "@/components/magicui/meteors";
import { ShinyButton } from "@/components/magicui/shiny-button";
import Footer from "@/components/website/Footer";
import { ProjectsData } from "@/data/projectdata";

export default function Projects() {
  
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen px-8 pb-16 sm:px-16 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2  w-full max-w-screen-lg">
                    
            <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-8 my-5 pt-10 mt-10">
                <div className="sm:col-span-9 flex flex-col">
                <Meteors number={30} />
                    <h1 className="text-4xl font-bold tracking-tight pb-4">  
                    My Projects 🚀  
                    </h1>  

                    <p className="text-xl text-gray-700 font-semibold tracking-tight">  
                    A curated collection of my personal, competition,<br />  
                    and professional projects—  <br />  
                    crafted with passion and innovation.  
                    </p>
                </div>
            </div>
    
            <div className="flex flex-col">
                <span className="text-2xl font-semibold tracking-tight pb-4">Personal/Hobby Projects</span>
                
                <p className="text-justify text-lg text-gray-500 font-semibold tracking-tight">
                These projects showcase my passion for integrating innovative technologies such as AI, Web3, and interactive systems to solve real-world problems. From automating dynamic question generation and real-time analytics in exam systems to developing Web3 identity verification solutions, I focus on creating platforms that enhance user experience, improve transparency, and enable efficient communication. My work includes AI-driven help centers, urban issue reporting systems, and modern KYC processes leveraging facial recognition and blockchain technologies.
                </p>

                <div className="col-span-12 mt-6 mb-3 w-full mt-4">
    
                    {
                        ProjectsData["personalhobbycompetitionproject"].sections.map((item, index) => (
                            <div key={index}>{item}</div>
                        ))
                    }

                    
                </div>

                <div className="mt-2">
                    <ShinyButton className=""><span className="flex items-center gap-2">... and still more</span> </ShinyButton>
                </div>
            </div>

            <div className="flex flex-col">
                <span className="text-2xl font-semibold tracking-tight pb-4">Freelance/Work Projects</span>
                
                <p className="text-justify text-lg text-gray-500 font-semibold tracking-tight">
                Throughout my freelance career, I have independently designed and developed robust systems tailored to client needs, with a focus on multi-tenancy, real-time analytics, and seamless integrations. My projects range from complex asset management systems for hospitals to efficient e-commerce platforms and livestock management solutions. I prioritize creating user-centric platforms that optimize business operations, streamline workflows, and provide valuable data insights for decision-making. My tech stack includes PHP, Laravel, JavaScript, and integration with external APIs, ensuring reliable and scalable deployments for clients.
                </p>

                <div className="col-span-12 mt-6 mb-3 w-full mt-4">

                    {
                        ProjectsData["freelanceworkproject"].sections.map((item, index) => (
                            <div key={index}>{item}</div>
                        ))
                    }
    


                </div>

                <div className="mt-2">
                    <ShinyButton className=""><span className="flex items-center gap-2">... and still more</span> </ShinyButton>
                </div>
            </div>
    
            <Footer />
            </main>
        </div>
    )

}