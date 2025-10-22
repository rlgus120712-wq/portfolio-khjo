import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <TechStack />
      <Contact />
    </main>
  );
}