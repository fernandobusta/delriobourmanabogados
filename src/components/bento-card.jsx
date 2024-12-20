'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { Subheading } from './text'

function graphicElement(graphic, fade) {
  return (
    <div className="relative h-80 shrink-0">
      {graphic}
      {fade.includes('top') && (
        <div className="absolute inset-0 bg-gradient-to-b from-white to-50% group-data-[dark]:from-gray-800 group-data-[dark]:from-[-25%]" />
      )}
      {fade.includes('bottom') && (
        <div className="absolute inset-0 bg-gradient-to-t from-white to-50% group-data-[dark]:from-gray-800 group-data-[dark]:from-[-25%]" />
      )}
    </div>
  )
}

function imageElement(image, imageClassName) {
  return (
    <div>
      <img src={image} alt="" className={imageClassName} />
    </div>
  )
}

export function BentoCard({
  dark = false,
  className = '',
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
  image,
  imageClassName,
}) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'group relative flex flex-col overflow-hidden rounded-lg',
        'bg-white shadow-sm ring-1 ring-black/5',
        'data-[dark]:bg-gray-800 data-[dark]:ring-white/15',
      )}
    >
      {graphic
        ? graphicElement(graphic, fade)
        : imageElement(image, imageClassName)}
      <div className="relative p-10">
        <Subheading as="h3" dark={dark}>
          {eyebrow}
        </Subheading>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 group-data-[dark]:text-white">
          {title}
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-gray-600 group-data-[dark]:text-gray-400">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
