import BackgroundGrid from "./BackgroundGrid";
import { Button } from "./ui/button";
import curve from "../assets/hero/cuarve.png";
import Section from "./Section";
import FileUpload from "./file-uploader";
import { ScrollParallax } from "react-just-parallax";
import leaf from "../assets/hero/leaf.png";
import leaf2 from "../assets/hero/leaf2.png";
import detaction from "../assets/Asset_1.webp";



export const Gradient = () => {
    return (
        <>
            <div className="relative z-1 h-6 mx-1.5 bg-primary shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-4" />
            <div className="relative z-1 h-6 mx-2.5 bg-secondary shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
            <div className="relative z-1 h-6 mx-6 bg-accent shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
        </>
    );
};
export default function Hero(){
    return (
        <Section
            crosses
            id="hero"
        >
            <BackgroundGrid />
            <div className="container relative">
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[2.875rem] ">
                    <h1 className="font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem] mb-6">
                        AI-driven tools for early potato disease {" "}
                        <span className="inline-block relative">
                         detection{" "}
                            <img
                                src={curve}
                                className="absolute top-full left-0 w-full"
                                width={624}
                                height={100}
                                alt="Curve"
                            />
                        </span>
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                        Integrating AI and IoT in agriculture allows for real-time monitoring and precise disease detection, empowering farmers to take immediate action and protect their crops from devastating diseases.
                    </p>
                </div>
                <div className="relative z-1 rounded-2xl border border-primary w-fu">
                        <div className="relative rounded-[1rem]">
                        <div className="px-12 py-6 z-10">
                        <img
                            className="w-full object-cover flex justify-center items-center mx-auto"
                            src={detaction} width={200} height={200} alt={"icon"}
                         />
                        </div>
                        </div>
                        <ScrollParallax isAbsolutelyPositioned>
                                    <ul className="hidden absolute -left-[3.1rem] top-80 px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                                            <li className="px-5 py-3">
                                                <img src={leaf} width={28} height={28} alt={"icon"} />
                                            </li>
                                    </ul>
                                </ScrollParallax>
                        <Gradient />
                        
                    </div>
                    <ScrollParallax isAbsolutelyPositioned>
                        <img
                            className="hidden absolute -right-[3.9rem] bottom-[9rem] w-[10rem] xl:flex"
                            src={leaf2} width={15} height={15} alt={"icon"}
                         />
                    </ScrollParallax>
            </div>
        </Section>
    )
}