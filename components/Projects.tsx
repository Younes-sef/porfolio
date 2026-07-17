import { Image as ImageIcon } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Real-Time ISO Container ID",
      category: "Computer Vision & Microservices",
      description: "Python, YOLO26, PaddleOCR, FastAPI, Redis, Docker"
    },
    {
      title: "AI PDF Chat Application",
      category: "AI & Full-Stack",
      description: "Next.js, MongoDB, RAG, Vector Embeddings"
    },
    {
      title: "Task Management Platform",
      category: "Full-Stack & Real-Time",
      description: "Next.js, NestJS, MongoDB, Clerk, Socket.IO"
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
        {projects.map((project, index) => (
          <div key={index} className="group cursor-pointer">
            {/* Image Placeholder */}
            <div className="w-full aspect-[4/3] bg-paper border border-line rounded-2xl mb-4 overflow-hidden relative flex items-center justify-center group-hover:border-accent transition-colors">
              {/* Optional overlay effect on hover */}
              <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center scale-75 group-hover:scale-100 transition-transform">
                  <ImageIcon className="w-6 h-6 text-paper" />
                </div>
              </div>
              
              {/* Placeholder Content */}
              <div className="text-muted flex flex-col items-center gap-2">
                <ImageIcon className="w-8 h-8 opacity-50" />
                <span className="text-xs font-medium uppercase tracking-wider">Image Placeholder</span>
              </div>
            </div>

            {/* Project Info */}
            <h3 className="text-lg font-bold text-ink mb-1 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <div className="text-sm text-accent mb-2">{project.category}</div>
            <p className="text-sm text-muted line-clamp-2">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
