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
        <div className="relative flex flex-col m-auto z-[2] text-center h-screen justify-center bg-[url('/assets/images/banner.png')] bg-no-repeat bg-center bg-cover">
          <div className="absolute w-full h-screen bg-black z-[1] opacity-25" />
          <div className="z-[2] relative">
            <h1 className="font-bold text-4xl sm:text-6xl mb-5 text-white relative">
              <Image
                src="/assets/images/tres-olas-banner-logo.png"
                alt="Tres Olas Ministerios Logo"
                layout="fill"
              />
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
