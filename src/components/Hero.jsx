'use client'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { HeroImageBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'

export default function Hero() {
  return (
    <div className="relative">
      <HeroImageBackground className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <div className="absolute inset-2 bottom-0 rounded-4xl bg-gradient-to-r from-orange-200/100 to-orange-900/50"></div>

      <Container className="relative">
        <Navbar />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Del Rio Bourman
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Despacho de Abogados en Málaga, especializado en Divorcios,
            Herencias y Comunidades de Propietarios.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button
              onClick={() => {
                document.querySelector('#contact').scrollIntoView({
                  behavior: 'smooth',
                })
              }}
            >
              Contáctenos
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                document.querySelector('#team').scrollIntoView({
                  behavior: 'smooth',
                })
              }}
            >
              Ver el Despacho
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
