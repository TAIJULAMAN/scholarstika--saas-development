"use client"

import * as React from 'react'
import { cn } from '@/lib/utils'
import NextImage from 'next/image'

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
}

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string
  alt?: string
  className?: string
}

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
}

const AvatarContext = React.createContext<{
  imageLoaded: boolean
  setImageLoaded: (loaded: boolean) => void
}>({
  imageLoaded: false,
  setImageLoaded: () => { },
})

function Avatar({ className, children, ...props }: AvatarProps) {
  const [imageLoaded, setImageLoaded] = React.useState(false)

  return (
    <AvatarContext.Provider value={{ imageLoaded, setImageLoaded }}>
      <div
        data-slot="avatar"
        className={cn(
          'relative flex size-8 shrink-0 overflow-hidden rounded-full',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </AvatarContext.Provider>
  )
}

function AvatarImage({ className, src, alt = 'Avatar', ...props }: AvatarImageProps) {
  const { setImageLoaded } = React.useContext(AvatarContext)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    if (!src) {
      setError(true)
      setImageLoaded(false)
      return
    }

    // Reset state when src changes
    setError(false)
    setImageLoaded(false)

    // Use window.Image instead of Image (which is shadowed by next/image)
    const img = new window.Image()
    img.src = src

    img.onload = () => {
      setImageLoaded(true)
      setError(false)
    }

    img.onerror = () => {
      setError(true)
      setImageLoaded(false)
    }

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src, setImageLoaded])

  if (error || !src) {
    return null
  }

  // Filter out props that might conflict or cause type issues with NextImage
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { width, height, ...validProps } = props

  return (
    <NextImage
      data-slot="avatar-image"
      src={src}
      alt={alt}
      fill
      className={cn('aspect-square size-full object-cover', className)}
      {...validProps}
    />
  )
}

function AvatarFallback({ className, children, ...props }: AvatarFallbackProps) {
  const { imageLoaded } = React.useContext(AvatarContext)

  if (imageLoaded) {
    return null
  }

  return (
    <div
      data-slot="avatar-fallback"
      className={cn(
        'bg-muted flex size-full items-center justify-center rounded-full text-sm font-medium',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Avatar, AvatarImage, AvatarFallback }
