import Image from "next/image";
import { services } from "@/data/services";
import ServicesSection from "@/components/ServicesSection";
export default function Home() {
  return (
    <>
      {/* template one header */}
      <header className="my-[30px] mx-auto flex w-9/10 justify-between">
        <h1 className="text-3xl font-bold">Logo</h1>
        <button className="px-[30px] py-[10px] bg-primary rounded-2xl text-white font-bold">
          Contact us
        </button>
      </header>

      {/* main banner section background and caption */}
      <figure>
        <Image
          src="/assets/template-one-imgs/home-background.png"
          alt="Home Background"
          width={1200}
          height={800}
          className="w-full h-[30vh] mx-auto md:h-[70vh] lg:h-[80vh] bg-cover"
        />
        <figcaption
          className="w-[95%] my-[30px] mx-auto md:w-[85%]
            text-center text-[30px] md:text-[50px] font-bold"
        >
          Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing elit, sed
          diam nonu~mmy nibh
        </figcaption>
      </figure>
      <div className="flex justify-center gap-[20px] my-[40px]">
        <button className="px-[30px] md:px-[60px]  py-[20px] bg-primary rounded-2xl text-white font-bold">
          Contact us
        </button>
        <button className="px-[30px] md:px-[60px]  py-[20px] border border-[#2f82ab] rounded-3xl text-[#2f82ab] font-bold">
          Download Pdf
        </button>
      </div>
      {/* main container view */}
      <main className=" relative mx-auto px-[15px] w-[100%] md:w-[94%]">
        {/* our services section */}
        <div className=" flex flex-col gap-[20px] mt-[80px] mb-[60px] md:flex-row md:gap-0 md:justify-between items-center">
          <h1 className="text-header">Our Services</h1>
          <p className="text-color md:w-[60%] w-full">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad
          </p>
        </div>
        {/* 3 services cards */}
        <section className=" relative flex flex-col gap-[20px] md:flex-row md:gap-0 md:justify-between">
          {/* article one */}
          <article className="md:w-[calc(33.3333%-12px)]">
            <div className="relative h-[300px] w-full">
              <Image
                src="/assets/template-one-imgs/our-services-img.png"
                alt="Home Background"
                fill
                className="object-cover rounded-xl border-1  border-blue-400"
              />
            </div>
            <h3 className="font-bold text-lg">Article one</h3>
          </article>
          {/* article two */}
          <article className="md:w-[calc(33.3333%-12px)]">
            <div className="relative h-[300px] w-full">
              <Image
                src="/assets/template-one-imgs/our-services-img.png"
                alt="Home Background"
                fill
                className="object-cover rounded-xl border-1  border-blue-400"
              />
            </div>
            <h3 className="font-bold text-lg">Article two</h3>
          </article>
          {/* article 3 */}
          <article className="md:w-[calc(33.3333%-12px)]">
            <div className="relative h-[300px] w-full">
              <Image
                src="/assets/template-one-imgs/our-services-img.png"
                alt="Home Background"
                fill
                className="object-cover rounded-xl border-1  border-blue-400"
              />
            </div>
            <h3 className="font-bold text-lg">Article three</h3>
          </article>
        </section>
        {/* case study section */}
        <section className="flex flex-col  w-full h-[780px] lg:h-[82vh] mt-[80px] lg:mt-[40px] mb-[60px] bg-[#F4F4F4] rounded-2xl relative lg:flex-row-reverse items-center">
          <div className="relative h-[300px] lg:h-[500px] w-[95%] md:w-[97%] lg:mr-3 mt-[2.5%] md:mt-[1.5%] mx-auto rounded-2xl overflow-hidden">
            <Image
              src="/assets/template-one-imgs/our-services-img.png"
              alt="Home case study"
              fill
              className="object-cover rounded-2xl mt-[2.5%]  md:mt-[1.5%] lg:mt-[-2%]"
            />
          </div>
          <div className="flex flex-col gap-[30px] mt-[30px] px-6 lg:w-[800px]">
            <h1 className="text-header ">Case Study</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea Lorem
              ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea nibh
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut{" "}
            </p>
            <button className="px-[30px] max-w-[150px] py-[10px] bg-primary rounded-2xl text-white font-bold">
              Read more
            </button>
          </div>
        </section>
        {/* second our services section 2nd*/}
        <div className=" flex flex-col gap-6 mt-[80px] mb-8">
          <h1 className="text-header ">Our Services</h1>
          <p className="text-color md:w-[80%] w-full">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad
          </p>
        </div>
        {/* 3 services cards with shadows */}
        {/* article 1 */}
        <ServicesSection services={services} />
      </main>
    </>
  );
}
