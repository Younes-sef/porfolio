import { BookOpen, Briefcase, Code2 } from "lucide-react";

export default function Resume() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8 relative inline-block">
        <h2 className="text-3xl font-bold text-ink">Resume</h2>
        <div className="w-12 h-1 bg-accent rounded-full mt-3"></div>
      </div>

      {/* Education Timeline */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 bg-paper border border-line rounded-xl flex items-center justify-center shadow-sm">
            <BookOpen className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-2xl font-bold text-ink">Education</h3>
        </div>

        <div className="ml-[19px] border-l border-line pl-8 relative space-y-8">
          <TimelineItem 
            title="Bachelor’s Degree in Computer Science" 
            date="Expected Graduation: 2026"
            subtitle="University of M’Hamed Bougara Boumerdes (UMBB)"
            description="Relevant Coursework: Data Structures and Algorithms, Database Systems, Operating Systems, Software Engineering, Object-Oriented Programming, Web Development."
          />
        </div>
      </section>

      {/* Experience / Projects Timeline */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 bg-paper border border-line rounded-xl flex items-center justify-center shadow-sm">
            <Briefcase className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-2xl font-bold text-ink">Experience & Projects</h3>
        </div>

        <div className="ml-[19px] border-l border-line pl-8 relative space-y-8">
          <TimelineItem 
            title="Real-Time ISO Container Identification System" 
            date="Python, YOLO26, PaddleOCR, FastAPI, Redis, Docker"
            description={
              <ul className="list-disc list-outside ml-4 space-y-1">
                <li>Built an automated intelligent system capable of detecting and recognizing ISO 6346 container identification codes directly from real-time video streams.</li>
                <li>Implemented a YOLO26 object detection model to locate and crop text regions, paired with an image preprocessing pipeline and PaddleOCR to accurately extract text in both horizontal and vertical orientations.</li>
                <li>Improved system scalability and real-time performance by architecting an asynchronous microservices backend using Redis message queues and FastAPI.</li>
              </ul>
            }
          />
          <TimelineItem 
            title="AI PDF Chat Application" 
            date="Next.js, MongoDB, AI"
            description={
              <ul className="list-disc list-outside ml-4 space-y-1">
                <li>Built a Retrieval-Augmented Generation (RAG) application that allows users to interact with uploaded PDF documents using AI.</li>
                <li>Implemented vector embeddings, semantic search, and document chunking to generate precise, context-aware responses.</li>
                <li>Improved overall scalability through asynchronous document indexing and background processing.</li>
              </ul>
            }
          />
          <TimelineItem 
            title="Task Management Platform" 
            date="Next.js, NestJS, MongoDB, Clerk, Socket.IO, React Query, Docker"
            description={
              <ul className="list-disc list-outside ml-4 space-y-1">
                <li>Built a full-stack task management platform featuring Kanban boards, file management, real-time notifications, and secure user authentication using a modular NestJS backend and Next.js frontend.</li>
                <li>Implemented JWT-based authentication with Clerk, where the backend validates session tokens using JWKS and secures every API request through custom authentication guards and user-scoped authorization.</li>
                <li>Developed a real-time notification system using Socket.IO, creating private user rooms to deliver secure event-driven updates for background operations such as file uploads.</li>
              </ul>
            }
          />

        </div>
      </section>

      {/* Skills Section */}
      <section>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 bg-paper border border-line rounded-xl flex items-center justify-center shadow-sm">
            <Code2 className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-2xl font-bold text-ink">Technical Skills</h3>
        </div>
        
        <div className="bg-paper border border-line rounded-2xl p-6 md:p-8 space-y-6">
          <SkillCategory title="Programming Languages" skills={["JavaScript", "TypeScript", "Python", "Java", "PHP", "SQL"]} />
          <SkillCategory title="Frontend" skills={["React", "Next.js", "Tailwind CSS", "HTML5"]} />
          <SkillCategory title="Backend" skills={["Node.js", "Express.js", "NestJS", "REST APIs", "JWT", "OAuth", "Socket.io"]} />
          <SkillCategory title="Databases" skills={["MongoDB", "MySQL", "Prisma ORM"]} />
          <SkillCategory title="Tools & Platforms" skills={["Git", "GitHub", "Docker", "Postman", "Vercel", "Linux", "Figma"]} />
        </div>
      </section>
    </div>
  );
}

function TimelineItem({ title, date, subtitle, description }: { title: string, date: string, subtitle?: string, description: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Timeline Dot */}
      <div className="absolute -left-[41px] top-1.5 w-[18px] h-[18px] rounded-full bg-paper border-[4px] border-accent z-10 shadow-[0_0_0_4px_var(--color-card)]"></div>
      
      <h4 className="text-lg font-bold text-ink mb-1">{title}</h4>
      <div className="text-accent text-sm font-medium mb-2">{date}</div>
      {subtitle && <div className="text-ink text-sm mb-3 font-medium">{subtitle}</div>}
      <div className="text-muted text-sm leading-relaxed">
        {description}
      </div>
    </div>
  );
}

function SkillCategory({ title, skills }: { title: string, skills: string[] }) {
  return (
    <div>
      <h5 className="text-ink font-semibold mb-3">{title}</h5>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="bg-card border border-line px-3 py-1.5 rounded-lg text-sm text-muted">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
