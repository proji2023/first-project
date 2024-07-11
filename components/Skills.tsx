"use client"

import React from 'react'
import Title from './Title'
import { HoverEffect } from './ui/card-hover-effect'
import { SiExpress, SiGit, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiTailwindcss } from 'react-icons/si'

export default function skills() {
  
  const skills = [

    {
        text: "React",

        Icon: SiReact,
    },
    {
        text: "Next.js",

        Icon: SiNextdotjs,
    },
    {
        text: "Tailwind",

        Icon: SiTailwindcss,
    },
    {
        text: "Github",

        Icon: SiGit,
    },
    {
        text: "JavaScript",

        Icon: SiJavascript,
    },
    {
        text: "Node.Js",

        Icon: SiNodedotjs,
    },
    {
        text: "Python",

        Icon: SiPython,
    },
    {
        text: "MongoDB",

        Icon: SiMongodb,
    },
    {
        text: "Express.Js",

        Icon: SiExpress,
    }
  ]
  
    return (
    <div className="max-w-5xl mx-auto px-8">
      
      
      <Title text="Skills 🔪" className="flex flex-col items-center justify-center -rotate-6"/>

       <HoverEffect items={skills}/> 
    
    </div>
  )
}