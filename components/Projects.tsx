import { Image as ImageIcon, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Bookified (AI PDF Chat)",
      category: "AI & Full-Stack",
      description: "Next.js, MongoDB, RAG, Vector Embeddings. Convert your books into interactive AI conversations.",
      link: "https://bookifeid-t9ts-psi.vercel.app/",
      image: "/bookified.png"
    },
    {
      title: "Real-Time ISO Container ID",
      category: "Computer Vision & Microservices",
      description: "Python, YOLO26, PaddleOCR, FastAPI, Redis, Docker"
    },
    {
      title: "Task Management Platform",
      category: "Full-Stack & Real-Time",
      description: "Next.js, NestJS, MongoDB, Clerk, Socket.IO",
      link: "https://tasks-managment-xbg5.vercel.app/dashboard",
      image: "/Screenshot 2026-07-17 234209.png"
    },
    {
      title: "Language Learning Platform",
      category: "Mobile App",
      description: "React Native, Expo, Stream Video/Chat SDK"
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8 relative inline-block">
        <h2 className="text-3xl font-bold text-ink">Projects</h2>
        <div className="w-12 h-1 bg-accent rounded-full mt-3"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const ProjectCard = (
            <div className="group cursor-pointer h-full flex flex-col">
              {/* Image / Placeholder */}
              <div className="w-full aspect-[4/3] bg-paper border border-line rounded-2xl mb-4 overflow-hidden relative flex items-center justify-center group-hover:border-accent transition-colors">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                      <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center scale-75 group-hover:scale-100 transition-transform">
                        {project.link ? (
                          <ExternalLink className="w-6 h-6 text-paper" />
                        ) : (
                          <ImageIcon className="w-6 h-6 text-paper" />
                        )}
                      </div>
                    </div>
                    <div className="text-muted flex flex-col items-center gap-2">
                      <ImageIcon className="w-8 h-8 opacity-50" />
                      <span className="text-xs font-medium uppercase tracking-wider">Image Coming Soon</span>
                    </div>
                  </>
                )}
                {project.image && project.link && (
                  <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center scale-75 group-hover:scale-100 transition-transform shadow-lg">
                      <ExternalLink className="w-6 h-6 text-paper" />
                    </div>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <h3 className="text-lg font-bold text-ink mb-1 group-hover:text-accent transition-colors flex items-center gap-2">
                {project.title}
                {project.link && <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />}
              </h3>
              <div className="text-sm text-accent mb-2">{project.category}</div>
              <p className="text-sm text-muted line-clamp-2 mt-auto">
                {project.description}
              </p>
            </div>
          );

          return project.link ? (
            <Link href={project.link} key={index} target="_blank" rel="noopener noreferrer" className="block">
              {ProjectCard}
            </Link>
          ) : (
            <div key={index}>
              {ProjectCard}
            </div>
          );
        })}
      </div>
    </div>
  );
}
