import Image from "next/image";

import Landing from "./_components/Landing";
import Card from "./_components/Card";
import Services from "./_components/Services";
import Procedure from "./_components/Procedure";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="">
      <Landing>
        <Card className=""> 
          <Services />
          <Procedure />
        </Card>
        <Footer />
      </Landing>
    </main>
  );
}
