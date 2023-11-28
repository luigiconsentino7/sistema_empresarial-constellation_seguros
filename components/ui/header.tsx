
import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from './mobile-menu'
import FeatImage1 from '@/public/images/logo.svg'


export default function Header() {
  return (
    <header className="absolute w-full z-30 scroll-smooth">
      
    

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
            <Image className="w-40 h-40 fill-current" src={FeatImage1} width={150} height={150} alt="Features 04" />

            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow items-center  " >
          <div className="hidden lg:flex lg:gap-x-12 pl-5">
            <a href="#historia" className="text-sm font-semibold leading-6 text-white hover:text-gray-300 ">Nossa História</a>
            <a href="#seguro" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">Seguros</a>
            <a href="#contato" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">Contato</a>
            <a href="#assistencia-24h" className="text-sm font-semibold leading-6 text-white hover:text-gray-300"> Assistência 24h</a>
          </div>  
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="https://portal.segurolink.com.br/env/A8BB466882C6FFCD03387838494CCADC"
                  className="btn-sm text-gray-900 bg-purple-600 hover:bg-purple-100 ml-3"
                >
                  Faça sua cotação
                </Link>
              </li>
              {/* <li>
                <Link href="/signin" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                { font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out /signin signup }
                  Entrar
                </Link>
              </li> */}
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
