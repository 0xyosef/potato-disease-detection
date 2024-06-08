import Section from "@/components/Section"
import About from "@/components/about-us"
import CompanySupport from "@/components/company-support"
import Feature from "@/components/feature"
import FileUpload from "@/components/file-uploader"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import HowToUse from "@/components/how-use-product"
import { useAuth } from "@/hooks/useAuth"

export default function Home() {
    const {isAuth}=useAuth();
    return (
      <div className="">
          <Hero />
          <About />
          <Section
              crosses
              crossesOffset="lg:translate-y-[5.25rem]"
              id="hero"
              className="w-full py-12"
          >
            <Feature />
            <HowToUse />
            {isAuth && <FileUpload />}
            <CompanySupport />
            
          </Section>
          <Footer />
        </div>
    )
}

