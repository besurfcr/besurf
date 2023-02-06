import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const HomePage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>TresOlas</title>
      </Head>
      <div className="relative">
        <div className="relative flex flex-col m-auto z-[2] text-center h-screen justify-center bg-[url('/assets/images/tresolas.jpg')] bg-no-repeat bg-center bg-cover">
          <div className="absolute w-full h-screen bg-black z-[1] opacity-25" />
          <div className="z-[2]">
            <h1 className="font-bold text-4xl sm:text-6xl mb-5 text-white">
              Tres Olas
            </h1>
            <h2 className="text-xl sm:text-3xl text-white font-thin">
              Conectando y Cambiando vidas
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
