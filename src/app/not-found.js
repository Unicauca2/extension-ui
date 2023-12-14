"use client";

import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (

    <div 
      className='h-screen w-screen flex flex-col justify-center items-center'
      style={{
        background:
          // "url('/app/bg.svg') fixed, #00136d",
          //   backgroundSize: "contain",
          "linear-gradient(90deg, rgba(2,2,75,1) 0%, rgba(157,3,17,1) 50%, rgba(2,2,75,1) 100%)",
      }}
    >
      <section className="m-4 p-10 bg-[#ffffff] min-w-[70vh] min-h-[70vh] rounded-3xl flex flex-col justify-center items-center">
        <div 
          className='w-full flex flex-col md:flex-row items-center justify-center py-6'
        >
          <Link
            href={{pathname:`/home`}}
          > 
            <Image
              className='justify-center mx-4'
              src={"/conservatorio/logo.png"}
              width={250}
              height={250}
              alt="Conservatorio"
            />
          </Link>
          <Link
            href={{pathname:`/home`}}
          > 
            <Image
              className='justify-center mx-4'
              width={250}
              height={250}
              src={"/unilingua/logo.png"}
              alt="Unilingua"
            />
          </Link>
        </div>
        <h2 className='text-[#000066] font-bold'>¡ Página no encontrada !</h2>
        <Link className="text-[#000066] underline font-semibold" href={{ pathname: `/home` }}>¿Desea regresar a la página principal?</Link>
      </section>
    </div>
  )
}