import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import Preview from '@/components/sections/Preview'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import Stat from '@/components/sections/Stat'
import ProductsSection from '@/components/sections/ProductsSection'

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <Features />
      <HowItWorks />
      <Preview />
      <Testimonials />
      <Stat />
      <CTA />
    </>
  )
}
