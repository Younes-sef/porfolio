import { Monitor, Smartphone, Camera, Code } from "lucide-react";

export default function About() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* About Me Section */}
      <section className="mb-10 md:mt-4">
        <div className="mb-6 relative inline-block">
          <h2 className="text-3xl font-bold text-ink">About Me</h2>
          <div className="w-12 h-1 bg-accent rounded-full mt-3"></div>
        </div>
        
        <div className="text-muted space-y-4 leading-relaxed">
          <p>
            Computer Science student and aspiring Software Engineer with hands-on experience developing scalable full-stack applications using Next.js, React, Node.js, NestJS, and MongoDB. Strong foundation in software engineering principles, RESTful API design, and asynchronous microservices.
          </p>
          <p>
            Passionate about system design, backend engineering, and integrating artificial intelligence, machine learning, and computer vision models into real-world applications.
          </p>
        </div>
      </section>

      {/* What I'm Doing Section */}
      <section className="mb-10">
        <h3 className="text-2xl font-bold text-ink mb-6">What I'm Doing</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard 
            icon={<Code className="w-8 h-8 text-accent" />}
            title="Full-Stack Development"
            description="High-quality development of web applications using React, Next.js, and Node.js."
          />
          <ServiceCard 
            icon={<Monitor className="w-8 h-8 text-accent" />}
            title="Backend Architecture"
            description="Designing scalable microservices, REST APIs, and database structures."
          />
          <ServiceCard 
            icon={<Smartphone className="w-8 h-8 text-accent" />}
            title="Mobile Development"
            description="Professional development of applications for iOS and Android using React Native."
          />
          <ServiceCard 
            icon={<Camera className="w-8 h-8 text-accent" />}
            title="AI & Computer Vision"
            description="Integrating AI models and computer vision systems into real-world software."
          />
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-paper border border-line rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-bold text-ink mb-2">{title}</h4>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
