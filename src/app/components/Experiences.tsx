'use client'

import { useEffect, useRef, useState } from 'react'
import { SectionContainer } from './SectionContainer'
import { MotionDiv } from '@/app/lib/motion'
import { useAnimation, useInView } from 'framer-motion'

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Keyworks Software",
    date: "Oct/2024 - Current",
    description: [
      "Development and maintenance of web applications using .NET and Vue.js;",
      "Database management with SQL Server and Oracle, utilizing Entity Framework Core for data manipulation;",
      "Participation in agile sprints, contributing to planning, development, and code review for continuous project improvement;",
      "Implementation of architectural patterns such as CRUD and CQRS to ensure code scalability and organization;",
      "Collaboration with cross-functional teams to deliver technology solutions aligned with business objectives."
    ]
  },
  {
    title: "Full Stack Intern",
    company: "Logidados Informática",
    date: "Apr/2024 - Oct/2024",
    description: [
      "Development and maintenance of websites using HTML, CSS, JavaScript, and TypeScript.",
      "REST API testing with Postman and Swagger to ensure the integrity and performance of integrations.",
      "Automação de testes de API, reduzindo o tempo de validação de endpoints.",
      "Collaboration with the design team to implement intuitive and responsive user interfaces",
      "Work with Node.js for server-side development and React for creating dynamic user interfaces."
    ]
  },
  {
    title: "Embedded Systems Intern, Dimelthoz",
    company: "Dimelthoz",
    date: "Aug/2023 - Feb/2024",
    description: [
      "Programming in C#/C++ for embedded systems development.",
      "Implementation and maintenance of code for microcontroller-controlled devices, including sensors and actuators.",
      "Data management and organization using Excel spreadsheets."
    ]
  }
]

export const Experiences = () => {
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
      <div ref={ref} className="space-y-6">
        {experiences.map((exp, index) => (
          <MotionDiv
            key={index}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="p-4 border rounded-lg shadow-lg"
          >
            <h3 className="text-lg font-bold">{exp.title} - {exp.company}</h3>
            <p className="text-sm text-gray-500">{exp.date}</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {exp.description.map((desc, i) => (
                <li key={i} className="text-white-700">{desc}</li>
              ))}
            </ul>
          </MotionDiv>
        ))}
      </div>
    </SectionContainer>
  )
}
