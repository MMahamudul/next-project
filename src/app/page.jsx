import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import CTA from '@/components/sections/CTA'
import Stat from '@/components/sections/Stat'
import ProductsSection from '@/components/sections/ProductsSection'
import Reviews from '@/components/sections/Reviews'
import Categories from '@/components/sections/Categories'

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <Features />
      <HowItWorks />
      <Categories />
      <Reviews />
      <Stat />
      <CTA />
    </>
  )
}
