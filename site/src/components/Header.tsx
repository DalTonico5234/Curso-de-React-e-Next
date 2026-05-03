import icone_azul from './../../public/images/Ícone azul.png'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full bg-[#217DA5] shadow-md sticky top-0 z-5">
      <div className="container mx-auto flex flex-col items-center py-4 px-4 sm:px-6">
        <div className="flex">
        <Image src={icone_azul} alt='logo_circular_introcomp' className='w-10 h-10 mr-2'></Image>
        <h1 className="text-4xl text-indigo-950 text-center">
          Intra
        </h1>
        <h1 className="text-4xl text-indigo-950 font-black text-center">
          gram
        </h1>
        </div>
        <h2 className='text-2xl text-[#93C0D1] text-center'>
          VGamer
        </h2>


      </div>
    </header>
  );
}
