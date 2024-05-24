const Procedure = () => {
  return (
    <div
      className="
            w-full 
            bg-[#F4F2EB] 
            py-40
            relative 
            overflow-hidden
            rounded-b-2xl
            flex
            flex-col
            justify-center
            items-center
            "
    >
      <p
        className="
            text-center 
            text-[#0074DF] 
            opacity-80 
            text-base
            pb-4
            "
      >
        how does this work?
      </p>
      <h2
        className="
            text-center 
            font-semibold 
            text-4xl
            md:text-5xl
            mb-10
            lg:w-1/2
            "
      >
        Here’s an A-Z guide to digitalize your business with Techbytes
      </h2>
      <div className="flex flex-col justify-center items-center gap-16 md:gap-5 z-30 pb-44 scale-100">
      <div className="flex flex-row lg:mr-96">
          <p className="row-span-2 text-[300px] opacity-30 leading-[0.8]">1</p>
          <div className=" lg:w-[450px] w-1/2 flex flex-col justify-end pb-4">
            <h3 className="font-medium text-3xl pr-10 md:text-5xl  capitalize">
            We start with you
            </h3>
            <p className="opacity-60 md:text-xl">
            We start with getting to know you and understand your business in and out. This so we can understand your needs, goals, and any specific service you need.
            </p>
          </div>
        </div>
        <div className="flex flex-row lg:ml-52">
          <p className="row-span-2 text-[300px] opacity-30 leading-[0.8]">2</p>
          <div className=" lg:w-[450px] w-1/2 flex flex-col justify-end pb-4">
            <h3 className="font-medium text-3xl pr-10 md:text-5xl  capitalize">
              Design how you want it
            </h3>
            <p className="opacity-60 md:text-xl">
              We will design the architecture, define the data structure and
              create detailed designs specifications to your desire and needs
            </p>
          </div>
        </div>
        <div className="flex flex-row lg:mr-96">
          <p className="row-span-2 text-[300px] opacity-30 leading-[0.8]">3</p>
          <div className=" lg:w-[450px] w-1/2 flex flex-col justify-end pb-4">
            <h3 className="font-medium text-3xl pr-10 md:text-5xl  capitalize">
              It is time to build
            </h3>
            <p className="opacity-60 md:text-xl">
              Our developers will get down to the actual software engineering
              process, creating the required components based on the approved
              design guides.
            </p>
          </div>
        </div>
        <div className="flex flex-row lg:ml-52">
          <p className="row-span-2 text-[300px] opacity-30 leading-[0.8]">4</p>
          <div className=" lg:w-[450px] w-1/2 flex flex-col justify-end pb-4">
            <h3 className="font-medium text-3xl pr-10 md:text-5xl  capitalize">
              It is time to build
            </h3>
            <p className="opacity-60 md:text-xl">
              As the final milestone approaches, it’s time to launch your
              software! Get ready to see your software or system become
              available to the public
            </p>
          </div>
        </div>
        <div className="flex flex-row lg:mr-96">
          <p className="row-span-2 text-[300px] opacity-30 leading-[0.8]">5</p>
          <div className=" lg:w-[450px] w-1/2 flex flex-col justify-end pb-4">
            <h3 className="font-medium text-3xl pr-10 md:text-5xl  capitalize">
              Maintaining is easy
            </h3>
            <p className="opacity-60 md:text-xl">
              You don’t have to worry about all the challenges you might
              encounter maintaining the software or system. With Techbytes,
              maintaining is easy.
            </p>
          </div>
        </div>
        <div className="flex flex-row lg:ml-52">
          <p className="row-span-2 text-[300px] opacity-30 leading-[0.8]">6</p>
          <div className=" lg:w-[450px] w-1/2 flex flex-col justify-end pb-4">
            <h3 className="font-medium text-3xl pr-10 md:text-5xl  capitalize">
              Stay Ahead with improvements
            </h3>
            <p className="opacity-60 md:text-xl">
              We encourage continuous improvement with your business. Together
              we bring up the dynamic environment to innovate
            </p>
          </div>
        </div>
      </div>
      <div className="size-[1200px] aspect-square bg-[#667DB6] rounded-full absolute -right-[40rem] blur-[200px] bottom-[40rem]  z-10 opacity-30"></div>
      <div className="size-[600px] aspect-square bg-[#B9ADFF] rounded-full absolute -left-[20rem] blur-[100px] -bottom-[10rem] z-10 opacity-30"></div>

      <p
        className="
            text-center 
            text-[#0074DF] 
            opacity-80 
            text-base
            pb-4
            "
      >
        Why choose techbytes
      </p>
      <h2
        className="
            text-center 
            font-semibold 
            text-3xl
            md:text-5xl
            mb-10
            "
      >
        Here’s why techbytes stands <br /> out above the rest of <br /> the
        competitions
      </h2>
      <div className="font-display text-2xl md:text-4xl opacity-80 flex flex-col gap-20 justify-center align-center w-full px-10 lg:px-96">
        <p className="">
          Years of experience manpower over Asia.{" "}
          <span className="opacity-60">
            Our developers expertise at software development, system integration
            and data analytics.
          </span>
        </p>
        <p>
          High Quality Developer{" "}
          <span className="opacity-60">
            We adopt quality, precision, extraordinary engineering
          </span>
        </p>
        <p>
          Innovation and Beyond{" "}
          <span className="opacity-60">
            We’re well-prepared to give you precisely what you require when you
            need it
          </span>
        </p>
        <p>
          Low Cost, High Services{" "}
          <span className="opacity-60">
            Trust us, just contact us and you will be surprised
          </span>
        </p>
      </div>
    </div>
  );
};

export default Procedure;
