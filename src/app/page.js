import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import MyActivities from "./components/MyActivities";
import AwardsSection from "./components/Awards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0B0C10]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <MyActivities/>
        <AwardsSection/>
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}