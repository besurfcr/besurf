import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = (): JSX.Element => {
  const router = useRouter();

  const handleNavigation = (path: string = "/") => router.push(path);

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="absolute z-[3] w-full bg-black bg-opacity-80">
          <div className="container p-1 flex justify-between items-center m-auto">
            <div className="font-bold text-2xl sm:text-3xl text-white relative h-10 w-32">
              <a
                role="button"
                className=" cursor-pointer"
                onClick={() => handleNavigation("/")}
              >
                <Image
                  src="/assets/images/tres-olas-small-logo.png"
                  alt="Tres Olas logo"
                  layout="fill"
                />
              </a>
            </div>
            <div className="flex flex-1 justify-end">
              <nav>
                <ul className="flex gap-3">
                  <li className=" text-xl text-white p-3">
                    <a
                      role="button"
                      className=" cursor-pointer "
                      onClick={() => handleNavigation("/besurf")}
                    >
                      <div className="relative h-10 w-32">
                        <Image
                          src="/assets/images/besurf/besurf-blue-logo.png"
                          alt="Besurf blue logo"
                          layout="fill"
                        />
                      </div>
                    </a>
                  </li>
                  <li className=" text-xl text-white p-3">
                    <a
                      role="button"
                      className=" cursor-pointer"
                      onClick={() => handleNavigation("/octopus")}
                    >
                      <div className="relative h-10 w-24">
                        <Image
                          src="/assets/images/octopus/octupus-small-logo.png"
                          alt="Octopus small logo"
                          layout="fill"
                        />
                      </div>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
