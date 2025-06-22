'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
// import { ChevronLeft, ChevronRight } from 'lucide-react'
// import { Button } from './ui/button'

type CarouselProps = {
  images: Array<{
    src: string
    alt: string
  }>
  className?: string
}

export const ImageCarousel = ({ images, className = '' }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  // const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  // const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)

  // const scrollPrev = useCallback(
  //   () => emblaApi && emblaApi.scrollPrev(),
  //   [emblaApi]
  // )
  // const scrollNext = useCallback(
  //   () => emblaApi && emblaApi.scrollNext(),
  //   [emblaApi]
  // )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    // setPrevBtnDisabled(!emblaApi.canScrollPrev())
    // setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return
    
    const autoplay = setInterval(() => {
      emblaApi.scrollNext()
    }, 3500) // Change slide every 3.5 seconds

    return () => clearInterval(autoplay)
  }, [emblaApi])

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                height={1080}
                width={1920}
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      {/* <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg"
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg"
        onClick={scrollNext}
        disabled={nextBtnDisabled}
      >
        <ChevronRight className="h-4 w-4" />
      </Button> */}

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === selectedIndex 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}
