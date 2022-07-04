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
import { Footer } from 'components/sections/footer/footer';


const Home: NextPage = () => {

  const name = "André Soares Eletricista";
  const title = name;
  const description = "André Soares: o melhor eletricista da sua região";
  const url = "https://profound-khapse-169514.netlify.app/";

  return (
    <>
      <Head>
        {/* <!-- Site Name, Title, and Description to be displayed --> */}
        <meta
          property="og:site_name"
          content={ name }
        />
        <meta property="og:title" content={ title } />
        <meta
          property="og:description"
          content={ description }
        />
        {/* <!-- Image to display -->  */}
        <meta
          property="og:image"
          content={ url + "preview.jpg" }
        />

        {/* <!-- No need to change anything here -->  */}
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/jpeg" />

        {/* <!-- Website to visit when clicked social medias-->  */}
        <meta
          property="og:url"
          content={ url }
        ></meta>  
        
        <title>{ title }</title>      
          
      </Head>
      <Navbar />
      
      <main>
        <HeroSection />
        <BrandsSection/>
        <ServicesSection />
        <LatestWorksSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection/>
      </main>
      <Footer/>
    </>
  )
}

export default Home
