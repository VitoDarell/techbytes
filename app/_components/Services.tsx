import Image from "next/image";

import Button from "@/components/Button";

const Services = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-4 md:px-10 gap-6 pb-10">
      <p className=" text-center text-[#0074DF] opacity-80 text-base md:w-1/2 lg:w-1/4">
        We transform your business into versatile applications to take it to the
        next level.
      </p>
      <h2
        className="
      text-center 
      font-semibold 
      text-5xl"
      >
        Here are our available services
      </h2>
      <div
        className="
          bg-[#F2F0E8] 
          w-full 
          rounded-2xl 
          flex 
          flex-col 
          lg:flex-row 
          gap-4 
          overflow-hidden"
      >
        <Image
          src="/Images/awanio.png"
          alt="awanio logo"
          width={600}
          height={600}
        />
        <div className="p-7">
          <h3 className=" text-4xl font-semibold">
            Cloud Management Platform & Virtualization (Awanio)
          </h3>
          <p className="opacity-80 mt-4 mb-4">
            Our CMP helps organizations optimize their IT infrastructure
            resources, simplify their infrastructure management and reduce
            operational costs. We have served clients in Indonesia, Netherlands,
            and Singapore
          </p>
          <Button className="bg-[#e36a4b] font-normal">Learn More</Button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-4">
        <div className="bg-[#c6e5ec] w-full lg:w-1/2 rounded-2xl overflow-hidden">
          <Image
            src="/Images/erpSystems.png"
            alt="awanio logo"
            width={900}
            height={600}
          />
          <div className="p-7">
            <h3 className="text-4xl font-semibold">ERP Systems</h3>
            <p className="opacity-80">
              In today's fast-paced business, managing various aspects such as
              finance, inventory, human resources, and customer relationships
              can quickly become overwhelming. An ERP system is like a smart
              helper for your business. It puts all the important stuff, like
              money, products, and customers, in one handy place. Imagine having
              complete control over your business processes?
            </p>
          </div>
        </div>
        <div className="bg-[#e7eaf2] w-full lg:w-1/2 rounded-2xl overflow-hidden">
          <Image
            src="/Images/webapplication.png"
            alt="awanio logo"
            width={900}
            height={600}
          />
          <div className="p-7">
            <h3 className="text-4xl font-semibold">Web Applications</h3>
            <p className="opacity-80">
              Developing web applications is challenging due to the need for
              customization to meet the unique requirements of each business.
              It&apos;s crucial that it can handle a lot of customer transaction
              without any problem, provide data security, and deliver high
              performance. Ready to take your web app to the next level?
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-4">
        <div className="bg-[#f2d7d6] w-full lg:w-1/2 rounded-2xl overflow-hidden">
          <Image
            src="/Images/mobileapplication.png"
            alt="awanio logo"
            width={900}
            height={600}
          />
          <div className="p-7">
            <h3 className="text-4xl font-semibold">Mobile Application</h3>
            <p className="opacity-80">
              Creating mobile apps for iOS and Android can be complex. Each
              platform has its own rules and features, making it important to
              ensure the app works well on all devices and operating system
              versions. Struggling to keep up with ever-changing tech trends?
            </p>
          </div>
        </div>
        <div className="bg-[#c5dfc7] w-full lg:w-1/2 rounded-2xl overflow-hidden">
          <Image
            src="/Images/webapplication.png"
            alt="awanio logo"
            width={900}
            height={600}
          />
          <div className="p-7">
            <h3 className="text-4xl font-semibold">SAP Mobility</h3>
            <p className="opacity-80">
              We have created a lot of projects to change very complex SAP
              application into simple and intuitive SAP mobile
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
