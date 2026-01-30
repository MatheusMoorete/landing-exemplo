import { Hero } from "@/components/sections/hero";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { Curriculum } from "@/components/sections/curriculum";
import { SocialProof } from "@/components/sections/social-proof";
import { Bonuses } from "@/components/sections/bonuses";
import { FAQ } from "@/components/sections/faq";
import { Pricing } from "@/components/sections/pricing";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <Curriculum />
      <SocialProof />
      <Bonuses />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
