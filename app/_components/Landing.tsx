import Button from "@/components/Button";
import Card from "./Card";

interface LandingProps {
  children?: React.ReactNode;
  classname?: string;
}

const Landing: React.FC<LandingProps> = ({ children, classname }) => {
  return (
    <div className="h-screen w-screen relative overflow-x-hidden flex flex-col items-center">
      <div className="flex flex-col justify-center items-center gap-5 pt-64 pb-36 md:pb-72">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className=" text-6xl md:text-8xl">Helping</h1>
          <h1 className=" text-6xl md:text-9xl font-semibold">Digitalize</h1>
          <h1 className=" text-6xl md:text-6xl">Your Products</h1>
        </div>

        <p className="text-xl text-center px-3 md:w-1/2">
          Creating profound impact on finance healthcare and other
          sectors
        </p>

        <Button className="">
          Contact Now
          <svg
            width="8"
            height="18"
            viewBox="0 0 8 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.45395 1.51703L6.45395 9.01703L1.45395 16.517"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </Button>
      </div>
      {children}
      <div className="size-[1200px] aspect-square bg-[#44D1F0] rounded-full absolute -right-[40rem] blur-[200px] -bottom-[40rem] -z-10"></div>
      <div className="size-[600px] aspect-square bg-[#B9ADFF] rounded-full absolute -left-[20rem] blur-[100px] -bottom-[10rem] -z-10"></div>
    </div>
  );
};

export default Landing;
