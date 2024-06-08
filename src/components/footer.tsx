import Section from "./Section";

export default function Footer() {
  return (
    <Section
        crosses
        customPaddings="py-4"
    >
        <footer className="max-w-7xl px-8 lg:mx-auto">
            <div className="flex justify-between">
                <h2>
                    Made By{" "}
                    <a href={"/"} className="text-primary hover:text-accent font-black">
                    Amaru
                    </a>
                </h2>
                <span>Copyright &copy; 2024</span>
            </div>     
            </footer>
    </Section>
   
  );
}