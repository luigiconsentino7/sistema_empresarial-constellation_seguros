import Image from 'next/image'
import FeatImage04 from '@/public/images/features-03-image-04.png'
import FeatImage05 from '@/public/images/condominio.png'
import FeatImage06 from '@/public/images/empresarial.jpg'
import FeatImage07 from '@/public/images/financiamento.png'
import FeatImage08 from '@/public/images/planodesaude.jpg'
import FeatImage09 from '@/public/images/segurocelular.png'
import FeatImage10 from '@/public/images/segurodevida.jpg'
import FeatImage11 from '@/public/images/segurofianca.png'
import FeatImage12 from '@/public/images/seguropet.png'
import FeatImage13 from '@/public/images/seguroportateis.png'
import FeatImage14 from '@/public/images/seguroviagem.png'
import FeatImage15 from '@/public/images/consorcio.png'
import FeatImage16 from '@/public/images/bike.png'
import FeatImage17 from '@/public/images/seguroauto.jpg'
import FeatImage18 from '@/public/images/seguroresidencial.jpg'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div id= "historia"  className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4 text-center">Muito além de seguros</div>
            <h1 className="h2 mb-4 text-center">Nossa História</h1>
            {/* <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p> */}
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage04} width={540} height={150} alt="Features 04" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 text-center lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Sobre nós</div>                  
                  <h3 className="h3 mb-3">Constellation Consultoria e Corretora de Seguros</h3>
                  <p className="text-xl text-gray-400 mb-4 text-justify">Com mais de uma década atuando no mercado securitário, a Constellation Corretora de Seguros garante qualidade e confiabilidade. Estabelecemos laços sólidos com seguradoras, oferecendo atendimento personalizado e um histórico comprovado de sucesso. Nossa equipe altamente qualificada se mantém atualizada com as mudanças do setor para proporcionar soluções personalizadas e confiáveis. Desde 2010, nossa busca pela excelência tem proporcionado tranquilidade e segurança aos nossos clientes. Junte-se a nós, nosso compromisso é proteger o que é mais valioso para você!</p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage17} width={540} height={150} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 text-center lg:pl-12 xl:pl-16">
                  {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                  <h3 id= "seguro" className="h3 mb-3">Seguros auto 🚘</h3>
                  <p className="text-xl text-gray-400 mb-4 text-justify ">Seguros automóvel são mais do que proteção para o seu veículo, é uma garantia de segurança, tranquilidade e amparo em situações inesperadas. Além de proteger seu carro, eles garantem sua segurança, da sua família e de terceiros em acidentes. É um investimento em prevenção e suporte, trazendo a certeza de que, mesmo diante do inesperado, você estará amparado.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex text-left">
                      <b>Coberturas variam de acordo com a contratação do segurado </b>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Cobertura contra Roubo e Furto</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Cobertura para Terceiros</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Colisão e proteção aos vidros</span>
                    </li>
                  </ul>
                  <a href='https://portal.segurolink.com.br/env/A8BB466882C6FFCD03387838494CCADC'>
                  <div className="flex items-left mb-6 mt-6  text-left">
                    <button type="submit" className="inline-flex items-center h-10 px-20 text-gray-900   transition-colors duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-100 mx-auto text-left">
                      <span>Fazer Cotação</span>
                    </button>
                  </div>
                  </a> 
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage08} width={540} height={150} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 text-center lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Plano de Saúde 🩺</h3>
                  <p className="text-xl text-gray-400 mb-4 text-justify">Um plano de saúde é um investimento essencial no seu bem-estar, oferecendo acesso a uma ampla gama de serviços médicos, desde consultas de rotina a tratamentos especializados, sem preocupações com custos elevados. Além de proporcionar tranquilidade em emergências médicas, os planos são adaptáveis para atender às suas necessidades e orçamento, sendo um investimento contínuo na sua saúde e qualidade de vida.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                  <li className="flex text-left">
                      <b>Coberturas variam de acordo com a contratação do segurado </b>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Desconto em farmácia e telemedicina</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Planos personalizados</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Consultas Preventivas e internação</span>
                    </li>
                  </ul>
                  <a href='https://portal.segurolink.com.br/env/A8BB466882C6FFCD03387838494CCADC'>
                  <div className="flex items-left mb-6 mt-6  text-left">
                    <button type="submit" className="inline-flex items-center h-10 px-20 text-gray-900 transition-colors duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-100 mx-auto text-left">
                      <span>Fazer Cotação</span>
                    </button>
                  </div>
                  </a> 
                </div>
              </div>            
            </div>

             {/* 2nd item */}
             <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage18} width={540} height={150} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 text-center lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">Seguro residencial 🏡</h3>
                  <p className="text-xl text-gray-400 mb-4 text-justify">Seguro residencial é mais do que proteção para sua casa, é tranquilidade para sua família. Além de cobrir danos materiais, ele oferece suporte em emergências como reparos elétricos, incêndio, roubo, furto e muito mais. É um investimento na preservação do aconchego e na segurança do seu patrimônio.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                  <li className="flex text-left">
                      <b>Coberturas variam de acordo com a contratação do segurado </b>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Cobertura contra incêndio</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Cobertura contra roubo e furto</span>
                    </li>
                  </ul>
                  <a href='https://portal.segurolink.com.br/env/A8BB466882C6FFCD03387838494CCADC'>
                  <div className="flex items-left mb-6 mt-6  text-left">
                    <button type="submit" className="inline-flex items-center h-10 px-20 text-gray-900 transition-colors duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-100 mx-auto text-left">
                      <span>Fazer Cotação</span>
                    </button>
                  </div>
                  </a> 
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage06} width={540} height={150} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 text-center lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Seguro Empresarial 💼</h3>
                  <p className="text-xl text-gray-400 mb-4 text-justify">O seguro empresarial é essencial para proteger empresas de imprevistos e desafios. Oferece suporte financeiro em situações como incêndios, danos estruturais e responsabilidade civil, garantindo a continuidade das operações. Com opções adaptáveis para diferentes tipos e portes de negócios, é um investimento estratégico para preservar o empreendimento.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                  <li className="flex text-left">
                      <b>Coberturas variam de acordo com a contratação do segurado </b>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Danos elétricos e incêndio</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Cobertura contra roubo e furto</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Responsabilidade Civil</span>
                    </li>
                  </ul>
                  <a href='https://portal.segurolink.com.br/env/A8BB466882C6FFCD03387838494CCADC'>
                  <div className="flex items-left mb-6 mt-6  text-left">
                    <button type="submit" className="inline-flex items-center h-10 px-20 text-gray-900 transition-colors duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-100 mx-auto text-left">
                      <span>Fazer Cotação</span>
                    </button>
                  </div>
                  </a> 
                </div>
              </div>            
            </div>

             {/* 2nd item */}
             <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage10} width={540} height={150} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 text-center lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">Seguro de Vida ❤️</h3>
                  <p className="text-xl text-gray-400 mb-4 text-justify">O seguro de vida garante apoio financeiro para a família em situações difíceis, como em caso de falecimento. Proporciona tranquilidade, sabendo que entes queridos terão suporte financeiro em momentos complicados, além de cobrir custos de funeral e outras despesas após o falecimento.
                  Existem diferentes tipos de apólices para se ajustar às necessidades e orçamentos individuais. É uma forma de cuidar da família, garantir segurança financeira e planejar o futuro, tudo em um único investimento.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                  <li className="flex text-left">
                      <b>Coberturas variam de acordo com a contratação do segurado </b>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Assistência funeral</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>invalidez por acidente ou doença</span>
                    </li>
                  </ul>
                  <a href='https://portal.segurolink.com.br/env/A8BB466882C6FFCD03387838494CCADC'>
                  <div className="flex items-left mb-6 mt-6  text-left">
                    <button type="submit" className="inline-flex items-center h-10 px-20 text-gray-900 transition-colors duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-100 mx-auto text-left">
                      <span>Fazer Cotação</span>
                    </button>
                  </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3"><h3 className="h3 mb-3 text-center ">Outros serviços</h3></div>
              <a href='https://portal.segurolink.com.br/env/A8BB466882C6FFCD03387838494CCADC'>
              <div>
              <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage05} width={200} height={150} alt="Features 03" />
              <p className="text-lg text-gray-400 mb-4 text-center">Condomínio</p>    
              </div>
              </a>
              <a href='https://portal.segurolink.com.br/env/A8BB466882C6FFCD03387838494CCADC'>
              <div>
              <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage07} width={200} height={150} alt="Features 03" />
              <p className="text-lg text-gray-400 mb-4 text-center">Financiamento</p>
              </div>
              </a>
              <a href='https://portal.segurolink.com.br/env/A8BB466882C6FFCD03387838494CCADC'>
              <div>
              <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage09} width={200} height={150} alt="Features 03" />
              <p className="text-lg text-gray-400 mb-4 text-center">Seguro celular</p>
              </div>
              </a>
              <a href='https://portal.segurolink.com.br/env/A8BB466882C6FFCD03387838494CCADC'>
              <div>
              <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage11} width={200} height={150} alt="Features 03" />
              <p className="text-xl text-gray-400 mb-4 text-center">Seguro fiança</p>
              </div>
              </a>
              <a href='https://portal.segurolink.com.br/env/A8BB466882C6FFCD03387838494CCADC'>
              <div>
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage13} width={200} height={150} alt="Features 03" />
                <p className="text-lg text-gray-400 mb-4 text-center">Seguro equipamentos portáteis</p>
              </div>
              </a>
              <a href='https://portal.segurolink.com.br/env/A8BB466882C6FFCD03387838494CCADC'>
              <div>
              <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage12} width={200} height={150} alt="Features 03" />
              <p className="text-lg text-gray-400 mb-4 text-center">Seguro pet</p>
            </div>
            </a>
            <a href='https://portal.segurolink.com.br/env/A8BB466882C6FFCD03387838494CCADC'>
            <div>
              <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage14} width={200} height={150} alt="Features 03" />
              <p className="text-lg text-gray-400 max-w-full mx-auto md:max-w-none h-auto text-center">Seguro viagem</p>
            </div>
            </a>
            <a href='https://portal.segurolink.com.br/env/A8BB466882C6FFCD03387838494CCADC'>
            <div>
              <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage15} width={200} height={150} alt="Features 03" />
              <p className="text-lg text-gray-400 max-w-full mx-auto md:max-w-none h-auto text-center">Consórcio</p>      
            </div>
            </a>
            <a href='https://portal.segurolink.com.br/env/A8BB466882C6FFCD03387838494CCADC'>
            <div>
              <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage16} width={200} height={150} alt="Features 03" />
              <p className="text-lg text-gray-400 max-w-full mx-auto md:max-w-none h-auto text-center">Seguro bike</p>
            </div>
            </a>
          </div>

          <div id= "contato" className="max-w-3xl mx-auto text-center ">
            <h2 className="h2 mb-4">Seu sorriso é a nossa melhor apólice. Protegendo o que importa, sempre!</h2>
            <p className="text-xl text-gray-400">Se tiver dúvidas sobre nossos produtos ou serviços, estamos prontos para esclarecê-las.</p>
          </div>
          
    <form  action="https://formsubmit.co/luto.beibe@gmail.com" method="POST" className=" max-w-3xl mx-auto  pb-12 md:pb-20">              
   <h1 className="h2 mb-4 text-center">Fale conosco ☎️</h1>
  <div className="mb-6 ">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-white ">😊 Digite seu nome:</label>
    <input type="name" id="name" className="bg-gray-700   border-gray-600   placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 text-sm  border rounded-lg  block p-2.5 w-full " name="Nome" placeholder="Nome" required />
  </div>
  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">✉️ Digite seu email: </label>
    <input type="email" id="email" className="bg-gray-700   border-gray-600   placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 text-sm  border rounded-lg  block p-2.5 w-full" name="E-mail" placeholder="exemplo@email.com" required />
  </div>
  <div className="mb-6">
    <label htmlFor="number" className="block mb-2 text-sm font-medium text-white">📞 Digite seu telefone: </label>
    <input type="tel" id="phone"  className=" bg-gray-700   border-gray-600   placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 border text-sm rounded-lg block p-2.5 w-full" name="Número" placeholder="(11) 99999-9999" required />
  </div>
  <div className="mb-6">
  <label htmlFor="number" className="block mb-2 text-sm font-medium text-white">🤔 Digite sua duvida: </label>
  <textarea id="message"  className=" bg-gray-700   border-gray-600   placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 block p-2.5 text-sm  rounded-lg border w-full " name="Duvida" placeholder="Gostaria de saber mais sobre seguros..."></textarea>
  </div>
  <div className="flex items-start mb-6 text-center">
    <button type="submit" className=" inline-flex items-center h-10 px-5 text-gray-900 transition-colors duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-100 mx-auto text-center">
    <span>Enviar</span>

    </button>
  </div> 
</form>
          </div>

        </div>
      </div>
    </section>
  )
}
