'use client'

import { TextAnimate } from "@/components/magicui/text-animate";
import Footer from "@/components/website/Footer";
import { JSX, useState } from "react";
import FileTree from "@/components/website/FileTree";
import { AnimatePresence, motion } from "motion/react"
import { Badge } from "@/components/ui/badge";
import PortfolioItem from "@/components/website/PortfolioItem";
import { BlurFade } from "@/components/magicui/blur-fade";
import { AITerminal } from "@/components/website/AiTerminal";

const images: string[] = [
  "/assets/ekky-at-google-cropped.png",
  "/assets/gallery/gemastik.jpeg",
  "/assets/gallery/gemastik2.JPG",
  "/assets/gallery/nawasena.jpg",
  "/assets/gallery/ekky-atlabkom-cbprg.jpeg",
  "/assets/gallery/ekky-atgoogleindo.JPG",
  "/assets/gallery/dinacom.JPG",
  "/assets/gallery/coinfest4.jpeg",
  "/assets/gallery/coinfest3.jpeg",
  "/assets/gallery/coinfest2.JPG",
  "/assets/gallery/coinfest.JPG"
];

export const LifeData: Record<
  string,
  {
    tag: string;
    storyTitle: string;
    shortSummary: string;
    sectionAmount: number;
    sections: JSX.Element[];
  }
> = {
  "educationformal.tsx": {
    tag: "educationformal.tsx",
    storyTitle: "Formal Education",
    shortSummary:
      "Currently a third-year Computer Science student with a strong focus on AI-driven solutions, software engineering, and cloud computing. Engaged in coursework that includes algorithms, databases, and system design.",
    sectionAmount: 1, 
    sections: [
      <>
        <div className="col-span-12 mt-6 mb-3 w-full">
          <PortfolioItem 
            imageLink="/assets/logo-ipb.png"
            title="IPB University"
            description={"Pursuing Bachelor of Applied Computer Science \n in Software Engineering Technology"}
            location="Bogor, Indonesia"
            date="2022 - Estimated 2026"
          />

          <PortfolioItem 
            imageLink="/assets/logo-gnu.png"
            title="Gyeongsang National University"
            description="Student Exchange in Department of Agronomy"
            location="Jinju-si, South Korea"
            date="March 2025 - July 2025"
          />
        </div>
        <div className="col-span-12 mt-6 mb-3 w-full">
          <div className="col-span-12">
            <h5 className="font-semibold text-md">Certifications</h5>
          </div>
          <PortfolioItem 
            imageLink="/assets/logo-bnsp.png"
            title="National Professional Certification Board (BNSP)"
            description={
              "Government-issued Level II Indonesian Qualification Framework \nCertificate of Competence in Application Programming in Software Engineering"
            }
            location=""
            date="June 2022"
          />
        </div>
      </>
    ], 
  },
  "skills.tsx": {
    tag: "skills.tsx",
    storyTitle: "Skills",
    shortSummary:
      "Proficient in full-stack development with JavaScript (React, Next.js, Node.js), PHP (Laravel), and Python (FastAPI). Strong foundation in AI/ML, cloud computing, database management (PostgreSQL, MongoDB, MySQL), and DevOps (Docker, Nginx). Experienced in API development, system design, and software architecture.",
    sectionAmount: 1, 
    sections: [
      <>
        <div className="col-span-12 mt-6 mb-3 w-full">
          <div className="col-span-12">
            <h5 className="font-semibold text-md">Programming Concepts, Architecture & Methodology</h5>
          </div>
          <div className="my-4 col-span-12 flex flex-wrap gap-2 justify-start items-start">
            <Badge>Object-Oriented</Badge> 
            <Badge>Functional Programming</Badge>  
            <Badge>MVC</Badge> 
            <Badge>Monolithic</Badge> 
            <Badge>Microservices</Badge>  
            <Badge>Client-Server</Badge>  
            <Badge>SPA/PWA</Badge>  
            <Badge>Serverless</Badge>  
            <Badge>Event-Driven Architecture</Badge>  
            <Badge>Asynchronous Programming</Badge>  
            <Badge>RESTful API</Badge>  
            <Badge>Prompt Engineering</Badge>  
            <Badge>Retrieval-Augmented Generation</Badge>  
            <Badge>Semantic Search</Badge>  
            <Badge>AI Agent</Badge>  
            <Badge>AI-Driven Automation</Badge>  
            <Badge>Vector Databases</Badge>  
            <Badge>Cloud-Native</Badge>  
            <Badge>CI/CD</Badge>
            <Badge>Session Management</Badge>  
            <Badge>Multi-Tenant Architecture</Badge>  
            <Badge>State Management</Badge>  
            <Badge>Data Pipelines</Badge>  
            <Badge>Scrum</Badge>  
            <Badge>Agile Development</Badge>  
            <Badge>Domain-Driven Design</Badge>  
            <Badge>Kanban Board</Badge>  
          </div>

        </div>

        <div className="col-span-12 mt-6 mb-3 w-full">
          <div className="col-span-12">
            <h5 className="font-semibold text-md">Main Programming Languages</h5>
          </div>
          <PortfolioItem 
            imageLink="https://cdn.simpleicons.org/javascript/javascript"
            title="Javascript & Typescript"
            location="Language Usecase:"
            date="Work, Hobby/Competition"
          />

          <PortfolioItem 
            imageLink="https://cdn.simpleicons.org/php/php"
            title="PHP"
            location="Language Usecase:"
            date="Work, Hobby/Competition"
          />

          <PortfolioItem 
            imageLink="https://cdn.simpleicons.org/python/python"
            title="Python"
            location="Language Usecase:"
            date="Hobby/Competition"
          />

        </div>

        <div className="col-span-12 mt-6 mb-3 w-full">
          <div className="col-span-12">
            <h5 className="font-semibold text-md">Main Programming Frameworks/Libraries</h5>
          </div>

          <PortfolioItem 
            imageLink="https://cdn.simpleicons.org/react/react"
            title="React (NextJS, RemixJS)"
            location="Framework/Library Usecase:"
            date="Work, Hobby/Competition"
          />

          <PortfolioItem 
            imageLink="https://cdn.simpleicons.org/laravel/laravel"
            title="Laravel"
            location="Framework/Library Usecase:"
            date="Work, Hobby/Competition"
          />

          <PortfolioItem 
            imageLink="https://cdn.simpleicons.org/jquery/jquery"
            title="jQuery"
            location="Framework/Library Usecase:"
            date="Work, Hobby/Competition"
          />

          <PortfolioItem 
            imageLink="https://cdn.simpleicons.org/fastapi/fastapi"
            title="FastAPI"
            location="Framework/Library Usecase:"
            date="Hobby/Competition"
          />

          <PortfolioItem 
            imageLink="https://cdn.simpleicons.org/langchain/langchain"
            title="Langchain & Crew AI"
            location="Framework/Library Usecase:"
            date="Hobby/Competition"
          />

          <PortfolioItem 
            imageLink="https://cdn.simpleicons.org/bootstrap/bootstrap"
            title="Bootstrap"
            location="Framework/Library Usecase:"
            date="Work, Hobby/Competition"
          />

          <PortfolioItem 
            imageLink="https://cdn.simpleicons.org/tailwindcss/tailwindcss"
            title="Tailwind CSS"
            location="Framework/Library Usecase:"
            date="Work, Hobby/Competition"
          />

        </div>

        <div className="col-span-12 mt-6 mb-3 w-full">
          <div className="col-span-12">
            <h5 className="font-semibold text-md">Deployment & Database</h5>
          </div>
          <PortfolioItem 
            imageLink="https://cdn.simpleicons.org/mysql/mysql"
            title="MySQL"
            location="Database Usecase:"
            date="Work, Hobby/Competition"
          />

          <PortfolioItem 
            imageLink="https://cdn.simpleicons.org/postgresql/postgresql"
            title="PostgreSQL"
            location="Database Usecase:"
            date="Work, Hobby/Competition"
          />

          <PortfolioItem 
            imageLink="https://cdn.simpleicons.org/mongodb/mongodb"
            title="MongoDB"
            location="Database Usecase:"
            date="Hobby/Competition"
          />

          <PortfolioItem 
            imageLink="https://cdn.simpleicons.org/firebase/firebase"
            title="Firebase & Firestore"
            location="Usecase:"
            date="Hobby/Competition"
          />

          <PortfolioItem 
            imageLink="https://cdn.simpleicons.org/docker/docker"
            title="Docker"
            location="Usecase:"
            date="Hobby/Competition"
          />

          <PortfolioItem 
            imageLink="https://cdn.simpleicons.org/cpanel/cpanel"
            title="Cpanel"
            location="Usecase:"
            date="Work, Hobby/Competition"
          />

          <PortfolioItem 
            imageLink="https://cdn.simpleicons.org/vercel/vercel"
            title="Vercel"
            location="Usecase:"
            date="Hobby/Competition"
          />

          <PortfolioItem 
            imageLink="https://cdn.simpleicons.org/github/github"
            title="Github & Gitlab"
            location="Usecase:"
            date="Work, Hobby/Competition"
          />
        </div>
      </>
    ], 
  },
  "workformal.tsx": {
    tag: "workformal.tsx",
    storyTitle: "Formal Work Experiences",
    shortSummary:
      "Experienced Software Engineer with a strong background in AI-driven applications, automation, and full-stack development. Proven track record in freelancing, university projects, and award-winning hackathons.",
    sectionAmount: 1, 
    sections: [
      <>
        <div className="col-span-12 mt-6 mb-3 w-full">
          <PortfolioItem 
            imageLink="" // Add image link if needed
            title="Self-Employed"
            description="Software Engineer"
            location="Remote"
            date="April 2023 - Current"
            listItem={[
              "Achieved 20+ full-stack development projects remotely, translating client specs to functional code; met all deadlines and boosted client satisfaction by 25%.",
              "Developed and launched over 15+ websites and automated software solutions with Python, Selenium, JavaScript, Node.js, and Laravel.",
              "Implemented robust Front-End and Back-End systems for various web applications, improving user experience and system performance."
            ]}
          />
                

          <PortfolioItem 
            imageLink="/assets/logo-ipb.png"
            title="IPB University"
            description="Frontend Developer Intern"
            location="Bogor, Indonesia"
            date="January 2023 - March 2023"
            listItem={[
              "Executed 2 IPB University projects by developing front-end components using Vue.js with other intern teams."
            ]}
          />

          <PortfolioItem 
            imageLink="/assets/logo-onedek.png"
            title="SMK Negeri 1 Depok"
            description="Software Developer Intern"
            location="Depok, Indonesia"
            date="October 2021 - April 2021"
            listItem={[
              "Created 3+ web-based and mobile applications with LAMP Stack, Laravel, and Java Android to increase client productivity by 30%.",
              "Collaborated in a team of 15+ members and completed projects successfully."
            ]}
          />

          <PortfolioItem 
            imageLink="/assets/logo-ciptadra.png"
            title="PT. Ciptadra Softindo"
            description="Full Stack Developer Intern"
            location="Depok, Indonesia"
            date="January 2021 - July 2021"
            listItem={[
              "Contributed to 3+ web-based projects using LAMP Stack and CodeIgniter, enhancing ERP analytics by optimizing queries, resulting in a 25% reduction in processing time and significantly improving system efficiency.",
              "Guided apprentices in project development, improving project quality and completion rates by 20%."
            ]}
          />

        </div>

      </>
    ], 
  },
  "freelance.tsx": {
    tag: "freelance.tsx",
    storyTitle: "Freelance Work Experiences",
    shortSummary:
      "Experienced Software Engineer with a strong background in AI-driven applications, automation, and full-stack development. Proven track record in freelancing, university projects, and award-winning hackathons.",
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

        </div>

      </>
    ], 
  },
  "awards.tsx": {
    tag: "awards.tsx",
    storyTitle: "Won Competitions",
    shortSummary:
      "Beyond the accolades, each project represents a leap in AI-driven problem-solving—enhancing education, identity verification, civic engagement, and student support. From leading teams to pioneering Web 3.0 KYC security, redefining self-evaluating exams, and streamlining public issue reporting, these innovations have not only won competitions but also driven real-world impact and showcase of domain driven design.",
    sectionAmount: 1, 
    sections: [
      <>
        <div className="col-span-12 mt-6 mb-3 w-full">
   
          <PortfolioItem 
            imageLink=""
            clearThumbnailImage={true}
            title="Self-Evaluating and Custom-Generated Exams with AI"
            description={"AI-driven examination system leveraging Generative AI to create tailored exam questions, analyze student responses, and generate reports with pedagogical recommendations."}
            location="Top 20 Finalist"
            date="Sept. 2024"
            listItem={[
              "Developed an AI-driven examination system using Langchain, Crew AI, React, FastAPI, and Python.",
              "Enabled automated self-evaluation by analyzing student responses and dynamically generating personalized exam questions.",
              "Provided comprehensive reports with pedagogical recommendations to improve learning outcomes.",
              "Implemented retrieval-augmented generation (RAG) for accurate and context-aware responses towards learning materials.",
              "Integrated AI Agents and Chain of Thought reasoning to improve response quality and efficiency.",
              "Officially registered as Intellectual Property with the Directorate General of Intellectual Property Indonesia.",
              "Achieved Top 20 out of 358 teams in the Gemastik Competition held by Indonesian Ministry of Education, Culture, Research, and Technology and Top 12 in the Indonesia AI Innovation Challenge 2024."
            ]}
          />

          <PortfolioItem 
            imageLink=""
            clearThumbnailImage={true}
            title="KYChain - Web 2.0 and Web 3.0 Integration for KYC"
            description={"KYChain integrates Web 2.0 and Web 3.0 in KYC processes using AI-driven facial recognition technology, enhancing security and streamlining identity verification."}
            location="3rd Place"
            date="Sept. 2024"
            listItem={[
              "Act as a Team Lead, Collaborated with Syah Bintang and Nafis Faturrahman on the development of KYChain, a solution for KYC processes.",
              "Integrated HTTPS outcalls for secure communication and used AI-powered facial recognition for enhanced KYC verification.",
              "Facilitated businesses' transition from Web 2.0 to Web 3.0, focusing on security and user trust.",
              "Created an educational platform within the app with user testimonials, demonstrating effectiveness in improving security.",
              "Utilized industry events and partnerships to position KYChain as a leader in identity verification technology.",
              "Implemented a user flow allowing for independent account creation, KYC profile checks, and sign-in with AI face validation.",
              "Won 3rd Place in Hackathon 5.0 by Codefest Indonesia (ICP).",
            ]}
          />

          <PortfolioItem 
            imageLink=""
            clearThumbnailImage={true}
            title="Soegijapranata Catholic University AI Help Center"
            description={"AI-driven help center platform enhancing student and stakeholder support through RAG, AI Agent, Chain of Thought, and Semantic Search."}
            location="1st Place"
            date="Feb. 2024"
            listItem={[
              "Act as a Team Lead, Collaborated with Luthfi Dika Chandra, Engineered an AI-powered help center platform using Langchain, Laravel, JQuery, MySQL, and PostgreSQL.",
              "Implemented retrieval-augmented generation (RAG) for accurate and context-aware responses.",
              "Created two roles: for Student and Support Center, with a Take Over button allowing the Support Center to intervene in AI auto-responses.",
              "Won 1st place in the Ficpact Cup at Soegijapranata Catholic University, Semarang."
            ]}
          />

          <PortfolioItem 
            imageLink=""
            clearThumbnailImage={true}
            title="Semapor - Public Issue Reporting System"
            description={"Public issue reporting platform integrated with 'Sapa Mbak Ita' for interactive mapping and direct communication with officials."}
            location="1st Place"
            date="Jan. 2024"
            listItem={[
              "Act as a Team Lead, Collaborated with Mochammad Fadiil Thoriq and Naufal Rizqullah Firdaus, Developed a Laravel based reporting system for efficient public issue handling.",
              "Integrated interactive mapping and real-time updates for improved transparency and accountability.",
              "Created Facilitated direct communication between citizens and officials to streamline urban development feedback.",
              "Secured 1st place in the Dinacom Competition 2024 at Dian Nuswantoro University, Semarang."
            ]}
          />

        </div>

      </>
    ], 
  },
  "journal.tsx": {
    tag: "journal.tsx",
    storyTitle: "Publications",
    shortSummary: "A collection of published research contributions covering AI-driven evaluation systems, software testing methodologies, deep learning for facial recognition, and usability analysis in mobile applications.",
    sectionAmount: 1, 
    sections: [
      <>
        <div className="col-span-12 mt-6 mb-3 w-full">
        
        <PortfolioItem 
          imageLink=""
          clearThumbnailImage={true}
          title="The Role of Evaloexam in Fostering Technological Innovation and Entrepreneurship in Education"
          description={"Published research exploring the impact of AI-driven evaluation systems in education, enhancing learning outcomes and fostering entrepreneurship."}
          location="International Journal of Information Engineering and Science"
          date="2025"
          listItem={[
            "Co-authored a paper on Evaloexam's role in technological innovation and AI-driven assessment.",
            "Published in the International Journal of Information Engineering and Science, Volume 2, Issue 1.",
            "Discussed the integration of AI-based evaluation in modern educational settings.",
            "Available online: https://international.arteii.or.id/index.php/IJIES/article/view/132"
          ]}
        />

        <PortfolioItem 
          imageLink=""
          clearThumbnailImage={true}
          title="Decision Table Testing for Blackbox Testing of the IPB Disaster Study Center Website"
          description={"Research on applying Decision Table Testing methodology for blackbox testing of an academic website."}
          location="Jurnal Teknik Informatika dan Sistem Informasi (JATISI)"
          date="2024"
          listItem={[
            "Conducted blackbox testing using Decision Table Testing on the IPB Disaster Study Center Website.",
            "Co-authored and published in JATISI, Volume 11, Issue 4.",
            "Analyzed software testing methodologies for improved web system reliability.",
            "Available online: https://jurnal.mdp.ac.id/index.php/jatisi/article/view/9618"
          ]}
        />

        <PortfolioItem 
          imageLink=""
          clearThumbnailImage={true}
          title="Facial Expression Pattern Recognition Using Convolutional Neural Networks"
          description={"Developed and analyzed a CNN-based model for facial expression pattern recognition in image processing."}
          location="Jurnal Teknik Informatika dan Sistem Informasi (JATISI)"
          date="2024"
          listItem={[
            "Implemented CNN-based facial expression recognition for image processing applications.",
            "Co-authored and published in JATISI, Volume 11, Issue 4.",
            "Explored deep learning methodologies for accurate facial emotion detection.",
            "Available online: https://jurnal.mdp.ac.id/index.php/jatisi/article/view/9585"
          ]}
        />

        <PortfolioItem 
          imageLink=""
          clearThumbnailImage={true}
          title="Measuring Usability Using the USE Questionnaire on the MyTelkomsel Application"
          description={"Usability study analyzing MyTelkomsel app using the USE questionnaire to assess user experience and satisfaction."}
          location="SiTekIn Journal"
          date="Dec. 2024"
          listItem={[
            "Conducted usability testing of the MyTelkomsel application using the USE Questionnaire.",
            "Co-authored and accepted for publication in SiTekIn Journal, Volume 22, Issue 1.",
            "Analyzed user experience data to assess the app’s usability and effectiveness.",
            "Available at https://ejournal.uin-suska.ac.id/index.php/sitekin/article/view/29652"
          ]}
        />

        </div>

      </>
    ], 
  },
  "gdgoc.tsx": {
    tag: "gdgoc.tsx",
    storyTitle: "Google Developer Group on Campus IPB University",
    shortSummary: "Previously serving as Machine Learning Core Team now Selected as Chapter Lead by Google and serving since September 2024, the Google Developer Group on Campus (GDGoC) 2024–2025 is driven by the vision “Progressing Beyond the Capacity.” Focused on education, skill validation, and cross-campus collaboration, GDGoC fosters an inclusive, high-quality, and sustainable tech community. Membership has grown from 320 to 537, expanding opportunities for students at IPB University and beyond, regardless of academic background.",
    sectionAmount: 1, 
    sections: [
      <>
        <div className="col-span-12 mt-6 mb-3 w-full">
        <div className="col-span-12">
          <h5 className="font-semibold text-md">Event Hosted</h5>
        </div>
        
        <PortfolioItem 
          imageLink=""
          clearThumbnailImage={true}
          title="Intro to Google Developer Community: Connect, Learn, and Grow"
          description="A workshop introducing the Google Developer Community, fostering connections, learning, and collaboration among students and tech enthusiasts."
          location="GDG on Campus IPB University - Bogor, Indonesia"
          date="Jan 11, 2025"
          listItem={[
            "Provided an overview of Google Developer Communities and their benefits.",
            "Encouraged students to connect, learn, and grow within the tech ecosystem.",
            "Hands-on activities to help participants get started with the community."
          ]}
        />

        <PortfolioItem 
          imageLink=""
          clearThumbnailImage={true}
          title="SONDER: Google Dev World Tour in Indonesia"
          description="A major conference featuring Google Developer Experts and industry leaders, exploring the latest advancements in technology."
          location="Collaboration with GDG On Campus Phillipines and Indonesia"
          date="Jan 11, 2025"
          listItem={[
            "Featured keynote speakers from Google and the developer community.",
            "Covered emerging trends in AI, Cloud, and Web3 technologies.",
            "Networking opportunities for students and professionals."
          ]}
        />

        <PortfolioItem 
          imageLink=""
          clearThumbnailImage={true}
          title="Web Mechanics: Understanding How the Internet Works"
          description="A hands-on workshop explaining the fundamentals of internet infrastructure, networking, and web technologies."
          location="GDG on Campus IPB University - Bogor, Indonesia"
          date="Jan 10, 2025"
          listItem={[
            "Explored core web technologies, including HTTP, DNS, and networking basics.",
            "Discussed client-server architecture and web security principles.",
            "Provided practical exercises to deepen understanding."
          ]}
        />

        <PortfolioItem 
          imageLink=""
          clearThumbnailImage={true}
          title="Mobile Apps Unveiled: Exploring the Foundations of Modern Applications"
          description="A beginner-friendly workshop on mobile app development, covering core concepts and industry practices."
          location="GDG on Campus IPB University - Bogor, Indonesia"
          date="Jan 9, 2025"
          listItem={[
            "Introduced mobile app development frameworks and platforms.",
            "Discussed UI/UX principles for mobile applications.",
            "Live coding session demonstrating app development basics."
          ]}
        />

        <PortfolioItem 
          imageLink=""
          clearThumbnailImage={true}
          title="Starter Learning Path: Introduction to GIT"
          description="A fundamental session on version control using Git, enabling participants to manage code efficiently."
          location="GDG on Campus IPB University - Bogor, Indonesia"
          date="Jan 9, 2025"
          listItem={[
            "Covered Git fundamentals: repositories, commits, branches, and merges.",
            "Hands-on session using GitHub for collaboration.",
            "Best practices for version control in software development."
          ]}
        />

        <PortfolioItem 
          imageLink=""
          clearThumbnailImage={true}
          title="Core Team Monthly Meetup"
          description="A strategic gathering of the GDGoC core team to discuss plans, events, and future collaborations."
          location="GDG on Campus IPB University - Bogor, Indonesia"
          date="Jan 6, 2025"
          listItem={[
            "Reviewed past events and discussed improvements.",
            "Planned upcoming workshops, conferences, and study groups.",
            "Strengthened internal collaboration among GDGoC members."
          ]}
        />

        <PortfolioItem 
          imageLink=""
          clearThumbnailImage={true}
          title="Unlocking Data Insights: Mastering Python for Analysis"
          description="A hands-on workshop on leveraging Python for data analysis, visualization, and decision-making."
          location="GDG on Campus IPB University - Bogor, Indonesia"
          date="Dec 22, 2024"
          listItem={[
            "Covered Python libraries for data analysis: Pandas, NumPy, Matplotlib.",
            "Demonstrated real-world data manipulation and visualization.",
            "Provided practical exercises to solidify learning."
          ]}
        />

        <PortfolioItem 
          imageLink=""
          clearThumbnailImage={true}
          title="Web3 101: Understanding the Future of Decentralized Technology"
          description="An introductory session on Web3, blockchain, and decentralized applications."
          location="GDG on Campus IPB University - Bogor, Indonesia"
          date="Dec 21, 2024"
          listItem={[
            "Explored blockchain fundamentals and Web3 ecosystem.",
            "Demonstrated smart contracts and decentralized applications (dApps).",
            "Discussed the future impact of Web3 technology."
          ]}
        />

        <PortfolioItem 
          imageLink=""
          clearThumbnailImage={true}
          title="The Product Management Kickstart"
          description="A foundational session on product management principles, covering agile methodologies and market analysis."
          location="GDG on Campus IPB University - Bogor, Indonesia"
          date="Dec 20, 2024"
          listItem={[
            "Introduced product lifecycle and management strategies.",
            "Discussed Agile, Scrum, and user-centered design.",
            "Case study on successful tech product launches."
          ]}
        />

        <PortfolioItem 
          imageLink=""
          clearThumbnailImage={true}
          title="Onboarding Member x Tech Talk: AI Event Pack"
          description="An onboarding event introducing new members to GDGoC, followed by a tech talk on AI advancements."
          location="Collaboration with GDG On Campus Esa Unggul, Jakarta"
          date="Dec 20, 2024"
          listItem={[
            "Welcomed new GDGoC members and explained community goals.",
            "Tech talk on AI trends and applications in industry.",
            "Interactive Q&A session with AI experts."
          ]}
        />

        <PortfolioItem 
          imageLink=""
          clearThumbnailImage={true}
          title="GLOBAL TECH TALK: Future of AI and Data Analytics – Challenges and Opportunities"
          description="A high-level discussion on the future of AI and data analytics, featuring industry experts."
          location="Collaboration with GDG On Campus Widyatama University, Bandung"
          date="Dec 20, 2024"
          listItem={[
            "Analyzed trends in AI and big data analytics.",
            "Discussed ethical considerations and challenges in AI adoption.",
            "Engaged participants in an open discussion with experts."
          ]}
        />

        <PortfolioItem 
          imageLink=""
          clearThumbnailImage={true}
          title="Starter Learning Path: Introduction to Python"
          description="A beginner-friendly introduction to Python programming, focusing on syntax and basic logic."
          location="GDG on Campus IPB University - Bogor, Indonesia"
          date="Dec 17, 2024"
          listItem={[
            "Covered Python basics: syntax, loops, functions, and data structures.",
            "Hands-on coding exercises to reinforce learning.",
            "Guidance on how to continue learning Python effectively."
          ]}
        />

        <PortfolioItem 
          imageLink=""
          clearThumbnailImage={true}
          title="Info Session and Welcome Party GDGoC IPB"
          description="A kickoff event to introduce GDGoC, its mission, and upcoming opportunities."
          location="GDG on Campus IPB University - Bogor, Indonesia"
          date="Dec 15, 2024"
          listItem={[
            "Introduced GDGoC's new direction and initiatives.",
            "Encouraged networking among new and existing members.",
            "Shared insights on personal and career growth within the community."
          ]}
        />

        <PortfolioItem 
          imageLink=""
          clearThumbnailImage={true}
          title="Transfer Knowledge: Former GDSC IPB Lead to the New GDGoC IPB Lead"
          description="A knowledge transfer session between past and new GDGoC leadership."
          location="GDG on Campus IPB University - Bogor, Indonesia"
          date="Nov 4, 2024"
          listItem={[
            "Shared insights from past GDSC leadership experience.",
            "Discussed strategies for growing and managing the community.",
            "Outlined the vision for GDGoC moving forward."
          ]}
        />

        </div>

      </>
    ], 
  },
  "selfie.png": {
    tag: "selfie.png",
    storyTitle: "Best Memories",
    shortSummary: "A collection of unforgettable moments, capturing some important part of my live with the essence of friendship, achievements, and personal growth.",
    sectionAmount: 1, 
    sections: [
      <>
        <div className="col-span-12 mt-6 mb-3 w-full">
          <div className="col-span-12">
            <h5 className="font-semibold text-md">Some of the pictures</h5>
          </div>
          
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mt-4">
            {images.map((imageUrl, idx) => (
              <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
                <img
                  className="w-full h-auto rounded-lg object-cover"
                  src={imageUrl}
                  alt={`Gallery image ${idx + 1}`}
                />
              </BlurFade>
            ))}
          </div>
        </div>

      </>
    ], 
  },
};

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