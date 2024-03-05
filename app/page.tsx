import About from "@/components/About";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="h-full w-full  bg-[url('/')] bg-no-repeat">
      <div className="flex flex-col gap-20">
        <Banner />
        <About />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
