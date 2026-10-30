import { SiteHeader } from "../components/site-header";
import { Hero } from "../components/hero";
import { Stats } from "../components/stats";
import { Courses } from "../components/courses";
import { About } from "../components/about";
import { Testimonials } from "../components/testimonials";
import { CtaBand } from "../components/cta-band";
import { Faq } from "../components/faq";
import { Contact } from "../components/contact";
import { SiteFooter } from "../components/site-footer";
import { ScrollProgress } from "../components/ui/motion-primitives";

function Index() {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <Courses />
        <About />
        <Testimonials />
        <CtaBand />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

export default Index;
