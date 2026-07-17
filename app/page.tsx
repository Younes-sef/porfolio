import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row gap-6 w-full relative">
      <Sidebar />
      <MainContent />
    </div>
  );
}
