import React from "react";
import Container from "./Components/Container";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <Container>
      {/* Banner Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 pb-10 lg:pb-20 relative">
        {/* Text Section */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl lg:text-7xl font-bold text-[#46332E] mb-6 leading-tight">
            BOLD STYLE <br /> EVERY DAY
          </h1>
          <p className="text-[#46332E] text-base lg:text-lg leading-relaxed mb-6 max-w-xl">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text.
          </p>
          <Button variant="default">Contact</Button>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center lg:justify-end lg:mt-0 relative">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/tadorado-tailors.firebasestorage.app/o/fghdfhdhx.png?alt=media&token=8b763577-41c5-43d3-a6d1-f1123d938e76"
            alt="Traditional Fashion"
            width={700}
            height={900}
            className="object-contain relative z-10"
            priority
          />
        </div>
      </div>



      {/* About Section */}
      <div className="bg-[#1F1F1D] w-full py-4 px-8 lg:px-16 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center relative">
          {/* Left Image */}
          <div className="flex justify-center relative">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/tadorado-tailors.firebasestorage.app/o/The%20besties.jpg?alt=media&token=6e218dd5-f398-410e-a4f05ff40b51"
              alt="fashion"
              width={700}
              height={900}
              className="object-cover rounded-lg relative lg:-top-16"
              priority
            />
          </div>

          {/* Text */}
          <div className="text-white max-w-xl relative">
            <h2 className="text-4xl font-bold mb-6">ABOUT TADORADO</h2>
            <p className="text-lg leading-relaxed mb-6">
              Our designs are a blend of tradition and modernity, creating
              pieces that stand the test of time. Experience craftsmanship like
              never before.
            </p>
            <Button
              variant="default"
              className="mb-6 px-6 py-7 text-lg font-semibold"
            >
              Read More
            </Button>
            {/* Sewing Image */}
            <div className="flex justify-start relative">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/tadorado-tailors.firebasestorage.app/o/sewing%20image.jpg?alt=media&token=0ca23b9a-dfe4-4b89-a32b-8ea93475a352"
                alt="Sewing"
                width={450}
                height={350}
                className="object-cover rounded-lg relative lg:top-10"
                priority
              />
            </div>
          </div>
        </div>
      </div>



      {/* Categories Section */}
      <div>
        <div>
          {/* Text */}
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-6">VIEW OUR CATEGORIES</h2>
            <p className="text-lg leading-relaxed mb-6">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been theLorem{" "}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
