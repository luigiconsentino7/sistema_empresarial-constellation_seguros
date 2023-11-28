export const metadata = {
  title: 'Constellation Corretora',
  description: 'Empresa especializada em seguros diversos, atuando no mercado securitário a mais de uma década. Nosso compromisso é proteger o que é mais importante para você!',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
    </>
  )
}
