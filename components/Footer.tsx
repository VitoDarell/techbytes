import Image from "next/image";


const Footer = () => {
  return (
    <div className="bg-[#43a9ce] w-screen md:w-4/5 rounded-3xl p-10 md:px-20 drop-shadow-2xl mb-20 flex flex-col gap-4 md:flex-row justify-between text-white font-normal">
      <div>
        <div className="flex flex-col justify-between h-full ">
          <h2 className="font-semibold capitalize text-3xl">Let's craft it together</h2>
          <p className="opacity-80">Contact us and lets get started</p>
          <Image
            src="/Images/logo.png"
            alt="awanio logo"
            width={300}
            height={200}
          />
        </div>
        
      </div>
      <div className=" leading-relaxed">
        <h2 className="font-semibold">Techbytes Australia</h2>
        <p>Australia wide</p>

        <div>
          <p>
            <span className="font-semibold">For technical support</span> -
            info@techbytesaus.com.au
          </p>
          <p>
            <span className="font-semibold">For Sales Support</span> <br />0422023211 <br />+61 422 023 211 <br />Tony@techbyteaus.com.au
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
