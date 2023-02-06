import Head from "next/head";
import Image from "next/image";

export const OctopusPage = (): JSX.Element => (
  <>
    <Head>
      <title>Octopus</title>
    </Head>
    <div className="relative">
      <div className="relative flex flex-col m-auto z-[2] text-center h-screen justify-center bg-[url('/assets/images/octopus.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="absolute w-full h-screen bg-black z-[1] opacity-10" />
      </div>
    </div>
    <div>
      <div className="pt-24 container m-auto relative">
        <Image
          src="/assets/images/octopusIcon.png"
          alt="Octopus Icon"
          layout="fixed"
          height={299}
          width={300}
        />
      </div>
      <div className="px-24 pb-24 m-auto w-full md:w-2/3 text-center">
        <h2></h2>
        <p className=" text-xl pb-6">
          Octopus Early Education es más que un centro de cuido. Estamos
          dedicados a proporcionar un ambiente que facilite oportunidades de
          aprendizaje y promueva el desarrollo social, emocional, cognitivo y
          físico.
        </p>
        <h2 className="py-4 text-3xl font-bold">Objetivo</h2>
        <p className=" text-xl">
          Potencializar capacidades, habilidades y destrezas físicas,
          cognoscitivas y psicosociales durante la primera infancia de la
          población del cantón de Parrita, facilitando un recurso de apoyo
          comunal para las madres jefas de hogar y sus familias en condición de
          riesgo y vulnerabilidad social
        </p>
      </div>
      <div className="bg-[#dad8cb]">
        <div className="p-24 container m-auto">
          <h2 className="py-4 text-3xl font-bold">NOSOTROS</h2>
          <div className="flex gap-4 flex-col md:flex-row">
            <div>
              <h2 className="py-4 text-3xl font-bold">VISION</h2>
              <p className=" text-xl">
                Ser una organización social referente por su incidencia en la
                potencialización de las hablidades y capacidades humanas y en la
                satisfacción de las necesidades integrales de las personas
                menores de edad y sus familias y/o personas encargadas, que
                coadyuve a la construcción de interacciones sociales saludables.
              </p>
            </div>
            <div>
              <h2 className="py-4 text-3xl font-bold">MISION</h2>
              <p className=" text-xl">
                Potencializar el desarrollo integral de las personas menores de
                edad en condición de riesgo y vulnerabilidad social en conjunto
                con sus familiares o personas encargadas, contribuyendo a romper
                con patrones de violencia y pobreza.
              </p>
            </div>
            <div>
              <h2 className="py-4 text-3xl font-bold">VALORES</h2>
              <p className=" text-xl">
                Cooperación- Vinculación afectiva- Respeto-Inclusión-
                Perseverancia- Compromiso- Solidaridad- Espiritualidad- Fomento
                de expresión artistica y deportiva- Desarrollo sostenible.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="p-24 container m-auto">
          <h2 className="py-4 text-3xl font-bold">JUSTIFICACION</h2>
          <div className="flex gap-4 flex-col md:flex-row">
            <div>
              <ul className=" list-disc flex flex-col gap-5">
                <li className=" text-xl">
                  Potencializar capacidades, habilidades y destrezas motoras,
                  cognitivas y socioafectivas durante la primera infancia de
                  personas en condición de riesgo y vulnerabilidad social del
                  cantón de Parrita.
                </li>
                <li className=" text-xl">
                  Suplir los estándares nutricionales por medio de una
                  alimentación completa, balanceada y saludable dada por un
                  profesional en Nutrición.
                </li>
              </ul>
            </div>
            <div>
              <ul className=" list-disc flex flex-col gap-5">
                <li className=" text-xl">
                  Desarrollar terapias alternativas para el desarrollo emocional
                  y cognitivo de la PME.
                </li>
                <li className=" text-xl">
                  Fortalecer la construcción de vínculos familiares saludables
                  mediante la comunicación asertiva, la interacción intencional,
                  afectiva y lúdica y el ejercicio de la crianza respetuosa.
                </li>
                <li className=" text-xl">
                  Brindar una alternativa de cuido, atención y desarrollo
                  integral a personas menores de edad en edad preescolar
                  mientras sus progenitores y/o encargados laboran o/y estudian.
                </li>
              </ul>
            </div>
            <div>
              <ul className=" list-disc flex flex-col gap-5">
                <li className=" text-xl">
                  Fomentar el desarrollo de recursos internos y externos para la
                  construcción de proyectos de vida saludables en las y los
                  progenitores o las y los encargados de las personas menores de
                  edad, para mejorar la calidad de vida de las PME y de sus
                  familias.
                </li>
                <li className=" text-xl">
                  Facilitar recursos de estimulación y desarrollo integral a las
                  personas menores de edad de la comunidad.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
