'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Link } from './link'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'

const links = [
  // { href: '/company', label: 'Company' },
  { href: '#contact', label: 'Contactar' },
]

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex">
      {links.map(({ href, label }) => (
        <PlusGridItem key={href} className="relative flex">
          <button
            onClick={() => {
              document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
              })
            }}
            className="flex items-center px-4 py-3 text-base font-medium text-white bg-blend-multiply data-[hover]:bg-black/[2.5%]"
          >
            {label}
          </button>
        </PlusGridItem>
      ))}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-[hover]:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={href}
          >
            <Link href={href} className="text-base font-medium text-gray-950">
              {label}
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  )
}

function BannerButton({ href, label }) {
  return (
    <button
      onClick={() => {
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth',
        })
      }}
      className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-[hover]:bg-fuchsia-950/30"
    >
      {label}
      <ChevronRightIcon className="size-4" />
    </button>
  )
}

export function Navbar({ banner }) {
  return (
    <Disclosure as="header" className="pt-12 sm:pt-16">
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between">
          <div className="relative flex gap-6">
            <PlusGridItem className="py-3">
              <Link href="/" title="Home">
                <img
                  src="/abogados/logo-scaled.jpeg"
                  alt="Del Rio Bourman"
                  className="h-14 rounded-full object-contain"
                />
              </Link>
            </PlusGridItem>

            <div className="relative hidden items-center py-3 lg:flex">
              <BannerButton
                label={'Contácte con nosotros.'}
                href={'#contact'}
              />
            </div>
          </div>
          <div className="relative items-center py-6 lg:hidden">
            <BannerButton label={'Contácte con nosotros.'} href={'#contact'} />
          </div>
          {/* <DesktopNav /> */}
          {/* <MobileNavButton /> */}
        </PlusGridRow>
      </PlusGrid>
      {/* <MobileNav /> */}
    </Disclosure>
  )
}
