import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import FeatImage1 from '@/public/images/logo.svg'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                <Image className="w-40 h-40 fill-current" src={FeatImage1} width={120} height={70} alt="Features 04" />
                </Link>
              </div>
              <div id= "assistencia-24h" className="text-gray-400">Comprometidos em oferecer soluções personalizadas para proteger o que é mais importante para você há mais de uma década.</div>
          
              <br></br>
              <div className="text-purple-600">
              <a href="tel:+551136834688">Telefone Fixo: (11) 3683-4688</a>
              </div>
              <div className="text-purple-600">
              <a href="mailto:atendimento@constellationcorretora.com.br?subject=Preciso de ajuda">E-mail de contato: atendimento@constellationcorretora.com.br</a>
              </div>
            </div>
            

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Links úteis</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="https://www.delegaciaeletronica.policiacivil.sp.gov.br/ssp-de-cidadao/pages/comunicar-ocorrencia" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Comunicar Ocorrência</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://www.detran.sp.gov.br/wps/portal/portaldetran/cidadao/habilitacao/fichaservico/pesquisaPontuacaoCNH/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Confira Pontos na CNH</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://www.detran.sp.gov.br/wps/portal/portaldetran/detran/atendimento/recadastramento/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Detran São Paulo</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://veiculos.fipe.org.br/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consulta tabela FIPE</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://www.gov.br/susep/pt-br/fale-conosco" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">SUSEP</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://www.fenacor.org.br/Institucional/SindicatosFiliados?Estado=SP" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">FENACOR</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://www.poupatempo.sp.gov.br/wps/portal/poupatempoTaOn/homeTaOn/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zi_TxcjDxM3A38DTycXA0Cw4w9DYIsg4wNfAz1wwkpiAJKG-AAjgZA_VFgJbhMCDWDKsBjRkFuhEGmo6IiAFl6Ge8!/dz/d5/L2dBISEvZ0FBIS9nQSEh/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Pontos de Atendimento Poupatempo</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://www.gov.br/anatel/pt-br/regulado/numeracao/codigos-nacionais/servicos-de-utilidade-publica-e-de-emergencia" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Números de Emergência (SUP)</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://www.sincor.org.br/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Portal SINCOR</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://www.procon.sp.gov.br/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Procon São Paulo</Link>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Assistência 24h</h6>
                <ul>
                <li className="mb-1">
                    <Link href="https://akadseguros.com.br/contato/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">AKAD Seguros</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://www.aliroseguro.com.br/Pages/atendimento/ouvidoria.aspx#:~:text=Telefone%3A%200800%20-740-3994,Deficientes%20auditivos%3A%200800%20721%209104" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Aliro Seguros</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://www.allianz.com.br/sobre-allianz/sala-de-imprensa/WhatsApp-assistencia-24H.html" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Allianz Seguradora</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://www.amil.com.br/institucional/?keys%5B0%5D=boletos_beneficiario#/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Amil</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://www.azulseguros.com.br/outros/assistencia-24h/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Azul Seguros</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://www.bradescoseguros.com.br/clientes/atendimento/telefones-bradesco-seguros" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Bradesco</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://www.hdiseguros.com.br/servicos/assistencia-24h" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">HDI</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://www.itau.com.br/seguros/sinistro" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Itaú</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://simularituran.com.br/?gad_source=1&gclid=Cj0KCQiAr8eqBhD3ARIsAIe-buMDdfGvxNEyhfbbnEoe2v1SMxtaIvf-VrVr8RAZPM5Of5Y2cn9MLWsaAj3wEALw_wcB" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Ituran</Link>
                  </li>
                <li className="mb-1">
                    <Link href="https://www.libertyseguros.com.br/Pages/atendimento/nossos-telefones.aspx" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Liberty seguros</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://www.mapfre.com.br/atendimento/nossos-telefones/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Mapfre</Link>
                  </li>
                  
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <ul>
                <li className="mb-1">
                    <Link href="https://www.metlife.com.br/suporte/fale-conosco/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Metlife</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://www.portoseguro.com.br/faqs/como-peco-assistencia-24h" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Porto Seguro</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://sompo.com.br/contato/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Sompo</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://portal.sulamericaseguros.com.br/canaisdeatendimento/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Sul América</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://suhaiseguradora.com/contato/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Suhai</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://www.tokiomarine.com.br/atendimento/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Tokio Marine</Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              
              <li className="ml-4">
                <Link href="https://www.facebook.com/profile.php?id=61553402926359" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="https://instagram.com/constellationccorretora?igshid=MzMyNGUyNmU2YQ==" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
           
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; Constellation Consultoria e Corretora de Seguros. Todos direitos reservados.</div>
            
            <div className="text-gray-400 text-sm mr-4">CNPJ - 12.314.707/0001-51</div>
            

          </div>

        </div>
      </div>
    </footer>
  )
}
