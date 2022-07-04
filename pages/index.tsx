import type { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from 'components/navbar/navbar';
import { HeroSection } from 'components/sections/hero/hero';
import { BrandsSection } from 'components/sections/brands/brands';
import { ServicesSection } from 'components/sections/services/services';
import { LatestWorksSection } from 'components/sections/latest-works/latest-works';
import { TestimonialsSection } from 'components/sections/testimonials/testimonials';
import { AboutSection } from 'components/sections/about/about';
import { ContactSection } from 'components/sections/contact/contact';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>André Soares Eletricista</title>
        <meta name="description" content="Generated by create next app" />        
      </Head>
      <Navbar />
      <main style={{paddingBottom: '100vh'}}>
        <HeroSection />
        <BrandsSection/>
        <ServicesSection />
        <LatestWorksSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection/>
      </main>
    </>
  )
}

export default Home
