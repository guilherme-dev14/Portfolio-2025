'use client'

import { useEffect, useRef, useState } from 'react'

import { SectionContainer } from './SectionContainer'
import { ProjectCard } from './Projects/ProjectCard'

import { MotionDiv } from '@/app/lib/motion'
import { projectsData } from '@/app/utils/data'
import { useAnimation, useInView } from 'framer-motion'
import { MoveDown } from 'lucide-react'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const projectsPerPage = 4
const projectsIncrement = 4

export const Experiences = () => {
  const [showMore, setShowMore] = useState(false)

  const ref = useRef(null)
  const isInView = useInView(ref)
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <SectionContainer id="experiences" title="Experience">
      <div ref={ref}>
        <MotionDiv
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 gap-32 md:gap-16 sm:grid-cols-1 sm:justify-items-center"
        >
          {projectsData.slice(0, projectsPerPage).map((project, index) => (
            <MotionDiv
              variants={item}
              key={index}
              className="w-full"
            ></MotionDiv>
          ))}
        </MotionDiv>
      </div>
      {projectsData.length > projectsPerPage && (
        <button
          onClick={() => setShowMore(true)}
          className="mt-8 flex w-full items-center justify-center rounded-lg bg-secondary py-2 text-sm font-semibold text-target hover:bg-secondaryHover"
        >
          {showMore ? 'Show less' : 'Show more'}
          <MoveDown className="ml-2" />
        </button>
      )}
    </SectionContainer>
  )
}
