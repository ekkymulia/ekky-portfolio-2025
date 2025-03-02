import { Meteors } from "@/components/magicui/meteors";
import { ShinyButton } from "@/components/magicui/shiny-button";
import Footer from "@/components/website/Footer";
import PortfolioItem from "@/components/website/PortfolioItem";
import { JSX } from "react";

export const ProjectsData: Record<
  string,
  {
    tag: string;
    storyTitle: string;
    shortSummary: string;
    sectionAmount: number;
    sections: JSX.Element[];
  }
> = {
  "personalhobbycompetitionproject": {
    tag: "personalhobbycompetitionproject",
    storyTitle: "Personal/Hobby Projects",
    shortSummary:
      "These projects showcase my passion for integrating innovative technologies such as AI, Web3, and interactive systems to solve real-world problems. From automating dynamic question generation and real-time analytics in exam systems to developing Web3 identity verification solutions, I focus on creating platforms that enhance user experience, improve transparency, and enable efficient communication. My work includes AI-driven help centers, urban issue reporting systems, and modern KYC processes leveraging facial recognition and blockchain technologies.",
    sectionAmount: 1, 
    sections: [
      <>
        <div className="col-span-12 mt-6 mb-3 w-full">
            <PortfolioItem 
                imageLink=""
                clearThumbnailImage={true}
                title="ExamAI / EvaloExam"
                description={"An AI-powered exam system automating dynamic question generation, evaluation, grading, \n and real-time analytics using Retrieval-Augmented Generation (RAG), AI agents, and vector databases for adaptive real-time learning insights."}
                location="Remote"
                date="April 2024 - September 2024"
                listItem={[
                    "Led the development of ExamAI, an AI-powered assessment platform utilizing generative AI, NLP, and Retrieval-Augmented Generation (RAG) for personalized exam creation and automated grading.",
                    "Engineered dynamic question generation aligned with learning objectives, supporting multiple-choice and essay evaluations.",
                    "Implemented multiple AI agents for analyzing student responses, generating adaptive learning feedback, and refining recommendations based on performance data.",
                    "Integrated multiple vector databases (FAISS, PostgreSQL PGVector) for efficient semantic search and retrieval of relevant learning materials.",
                    "Designed and implemented a client-server architecture using REST API with React, Next.js, Google OAuth, Tailwind, FastAPI, PostgreSQL, FAISS Vector DB, Langchain, and CrewAI.",
                    "Deployed the platform for production using VPS and Vercel, ensuring scalability and reliability.",
                    "Intellectual Property is registered with the Directorate General of Intellectual Property of the Republic of Indonesia."
                ]}
                links={[
                    {
                        text: "Congratulatory Post",
                        link: "https://www.instagram.com/p/C_IeIryvIGY/?hl=en&img_index=3"
                    },
                    {
                        text: "Linkedin Post",
                        link: "https://www.linkedin.com/posts/ekkymulialasardi_ai-education-edtech-activity-7253696161503424512-v7eh?utm_source=share&utm_medium=member_desktop"
                    },
                    {
                        text: "Youtube Demo 1",
                        link: "https://www.youtube.com/watch?v=6VcNNZTpgdo"
                    },
                    {
                        text: "Youtube Demo 2",
                        link: "https://www.youtube.com/watch?v=ihhmleUrxDU"
                    }
                ]}
            />

            <PortfolioItem 
                imageLink=""
                clearThumbnailImage={true}
                title="Kychain Web3"
                description={"A Web3 application utilizing the ICP Network to bridge Web 2.0 and Web 3.0 for KYC processes, \n leveraging AI-driven facial recognition, secure communication, and blockchain-based data storage."}
                location="Remote"
                date="September 2024"
                listItem={[
                    "Engineered a seamless identity verification system by integrating ICP’s Internet Identity and HTTPS outcalls for secure communication.",
                    "Implemented AI-driven facial recognition powered by OpenAI to enhance KYC accuracy and efficiency.",
                    "Developed a blockchain-based data storage solution using the ICP Network to ensure transparency, security, and immutability of KYC records.",
                    "Built a user-friendly platform that streamlines business adoption of Web3 identity verification.",
                    "Strengthened security and trust through robust authentication mechanisms and educational content.",
                    "Positioned Kychain as a leader in modern identity verification through industry events and strategic partnerships.",
                    "Deployed with typescript and ICP Web 3 to ICP main network."
                ]}
                links={[
                    {
                        text: "Github Repo",
                        link: "https://github.com/ekkymulia/icp-hackahton-5-0"
                    },
                    {
                        text: "Congratulatory Post",
                        link: "https://www.instagram.com/p/C_awKX7Twhs/?hl=en"
                    },
                    {
                        text: "Youtube Demo ",
                        link: "https://www.youtube.com/watch?v=vyFZ8WZqwqc&t=218s"
                    }
                ]}
            />

            <PortfolioItem 
                imageLink=""
                clearThumbnailImage={true}
                title="AI Help Center Information System"
                description={"An AI-driven help center utilizing Retrieval-Augmented Generation (RAG), AI Agents, Chain of Thought, and Semantic Search to deliver intelligent, \n context-aware responses by referencing structured university SOP documents and custom file management."}
                location="Remote"
                date="February 2024"
                listItem={[
                    "Engineered an AI-powered help center integrating Retrieval-Augmented Generation (RAG), AI Agent, Chain of Thought, and Semantic Search to improve response accuracy.",
                    "Developed a system that references university SOP documents and custom file management to provide contextually relevant answers.",
                    "Optimized assistance performance for students and stakeholders by enabling real-time and personalized support.",
                    "Built using PHP, Laravel, MySQL for the website and Python, FastAPI, Langchain for the AI backend, ensuring robust and scalable architecture.",
                    "Deployed on AWS EC2 for high availability and performance."
                ]}
                links={[
                    {
                        text: "Github Repo 1",
                        link: "https://github.com/ekkymulia/Help_Center_Soegijapranata"
                    },
                    {
                        text: "Github Repo 2",
                        link: "https://github.com/ekkymulia/rag-ai-crud-api"
                    },
                    {
                        text: "Congratulatory Post 1",
                        link: "https://www.instagram.com/p/C4hyqHLyJbR/?utm_source=ig_web_copy_link"
                    },
                    {
                        text: "Congratulatory Post 2",
                        link: "https://www.instagram.com/p/C6LvbsUv_4Y/?utm_source=ig_web_copy_link"
                    },
                    {
                        text: "Linkedin Post",
                        link: "https://www.linkedin.com/posts/ekkymulialasardi_what-an-exhilarating-week-its-been-me-and-activity-7176246580407148544-uprO?utm_source=share&utm_medium=member_desktop"
                    },
                    {
                        text: "Youtube Demo",
                        link: "https://youtu.be/d2iYX8_VqMo"
                    }
                ]}
            />

            <PortfolioItem 
                imageLink=""
                clearThumbnailImage={true}
                title="City Public Engagement and Issue Reporting Management System "
                description={"An interactive web application designed to facilitate efficient issue reporting and urban development tracking in cities, \n incorporating real-time GIS mapping, direct communication with officials, and comprehensive analytics."}
                location="Remote"
                date="January 2024"
                listItem={[
                    "Developed an app to address the issues raised through existing platform, promoting transparency and accelerating government response times.",
                    "Implemented interactive mapping features for reporting and tracking urban development issues, providing real-time visibility for both users and officials.",
                    "Integrated direct communication channels with city officials to streamline issue resolution and improve public engagement.",
                    "Engineered multi-role support, including Log Book, Chat Support, GIS Map, and Interactive Analytics to facilitate smooth operations and user interactions.",
                    "Built using PHP, Laravel, and MySQL for the backend, ensuring a robust and scalable application.",
                    "Deployed on an Apache server for stable production performance."
                ]}

                links={[
                    {
                        text: "Github Repo",
                        link: "https://github.com/ekkymulia/thena-smartcity"
                    },
                    {
                        text: "Congratulatory Post",
                        link: "https://www.instagram.com/p/C2ydHJtJpBl/?utm_source=ig_web_copy_link"
                    },
                    {
                        text: "Congratulatory Post",
                        link: "https://www.instagram.com/p/C6LvbsUv_4Y/?utm_source=ig_web_copy_link"
                    },
                    {
                        text: "Linkedin Post",
                        link: "https://www.linkedin.com/posts/ekkymulialasardi_what-an-incredible-month-it-has-been-in-activity-7161018209410711552-BMQr?utm_source=share&utm_medium=member_desktop"
                    },
                    {
                        text: "Youtube Demo",
                        link: "https://www.youtube.com/watch?v=PcgB3cVx1zY&t=291s"
                    }
                ]}
            />
        </div>
      </>
    ], 
  },
  "freelanceworkproject": {
    tag: "freelanceworkproject",
    storyTitle: "Freelance/Work Projects",
    shortSummary:
      "Throughout my freelance career, I have independently designed and developed robust systems tailored to client needs, with a focus on multi-tenancy, real-time analytics, and seamless integrations. My projects range from complex asset management systems for hospitals to efficient e-commerce platforms and livestock management solutions. I prioritize creating user-centric platforms that optimize business operations, streamline workflows, and provide valuable data insights for decision-making. My tech stack includes PHP, Laravel, JavaScript, and integration with external APIs, ensuring reliable and scalable deployments for clients.",
    sectionAmount: 1, 
    sections: [
      <>
        <div className="col-span-12 mt-6 mb-3 w-full">
            <PortfolioItem 
                imageLink=""
                clearThumbnailImage={true}
                title="Self-Photo Studio Information System"
                description={"Multi Branch Office Account, Booking Orders, Editing & Printing Photos, \n Capturing Photos, Sync photos to Google Drive and Transaction Analytics"}
                location="Remote"
                date="December 2024 - February 2025"
                listItem={[
                "Independently designed and engineered the system, translating client needs and domain requirements into a fully functional application.",
                "Developed and deployed a feature-rich platform, enabling multi-branch management, booking orders, photo editing, and seamless photo syncing to Google Drive.",
                "Automated workflows for capturing, editing, and printing photos, optimizing studio efficiency and user experience.",
                "Built and integrated real-time transaction analytics, providing data-driven insights for business growth and performance monitoring.",
                "Developed and launched using PHP, Laravel, Jquery, JavaScript to CPanel."
                ]}
            />

            <PortfolioItem 
                imageLink=""
                clearThumbnailImage={true}
                title="Hospital Asset Management System"
                description={"Multi-Tenancy, Asset Tracking, Equipment Booking, \n Maintenance Scheduling, Real-Time Analytics, and Reporting"}
                location="Remote"
                date="August 2024 - November 2024"
                listItem={[
                "Independently developed Hospital Asset Management System, ensuring seamless multi-tenancy for multiple hospitals and branches.",
                "Implemented real-time asset tracking and automated equipment booking, optimizing resource utilization and reducing downtime.",
                "Built an intuitive dashboard with real-time analytics and detailed reporting for hospital administrators to monitor asset performance and usage trends.",
                "Designed and deployed the platform using PHP, Laravel, jQuery, JavaScript, and successfully hosted on cPanel."
                ]}
            />

            <PortfolioItem 
                imageLink=""
                clearThumbnailImage={true}
                title="E-Commerce System"
                description={"Multi-Tenancy, Order Management, Payment Integration, \n Inventory Tracking, Real-Time Analytics, and Courrier Pickup"}
                location="Remote"
                date="June 2024 - September 2024"
                listItem={[
                "Independently developed a scalable multi-tenant E-Commerce platform, enabling seamless store management for multiple vendors.",
                "Implemented robust order management and automated inventory tracking, ensuring accurate stock updates and reducing overselling risks.",
                "Integrated secure payment gateways, supporting multiple transaction methods for a seamless checkout experience.",
                "Built real-time analytics and customer insights dashboard to help vendors optimize sales, track user behavior, and improve retention strategies.",
                "Designed and deployed the platform using PHP, Laravel, jQuery, JavaScript, and successfully hosted on cPanel."
                ]}
            />

            <PortfolioItem 
                imageLink=""
                clearThumbnailImage={true}
                title="Livestock and Agriculture Management System"
                description={"Multi-Tenancy, Farm Management, Livestock Management and Tracking, \n Payment Integration, Inventory Tracking, MRP Request"}
                location="Remote"
                date="June 2023 - March 2024"
                listItem={[
                "Independently developed a multi-tenant Livestock and Agriculture Management platform, allowing multiple farmers and suppliers to manage their businesses efficiently.",
                "Implemented an MRP processing system with automated inventory tracking, ensuring real-time stock updates for livestock, crops, and farming supplies.",
                "Built real-time analytics and reporting tools, helping farmers optimize their farms, monitor supply chain performance, and enhance decision-making.",
                "Designed and deployed the platform using PHP, Laravel, jQuery, JavaScript, and successfully hosted on cPanel."
                ]}
            />

            <PortfolioItem 
                imageLink=""
                clearThumbnailImage={true}
                title="Patient Medical Record Tracking Management System"
                description={"Multi-Hospital, ERP, Medical Record Management and Tracking, \n Patient Management, API Integration with Other Health Systems"}
                location="Remote"
                date="January 2021 - July 2021"
                listItem={[
                    "Developed a secure multi-hospital medical record management system, ensuring seamless patient data tracking across facilities to enhance hospital efficiency.",
                    "Implemented role-based access control (RBAC) to safeguard patient data and comply with healthcare privacy regulations.",
                    "Integrated API connections with external health systems for real-time data exchange, improving interoperability.",
                    "Optimized database performance for large-scale patient records using MySQL and API Integration.",
                    "Built the platform using PHP, Codeigniter, jQuery, and JavaScript."
                ]}
            />
        </div>
      </>
    ], 
  },
}

export default function Myself() {
  
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