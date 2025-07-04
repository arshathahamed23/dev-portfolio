import { ArrowDown } from 'lucide-react'
import ProfilePic from "../assets/profilepic.jpg"
import React from 'react'

const HeroSection = () => {
  return (
    <section id='hero' className='relative min-h-screen flex flex-col items-center justify-center px-4'>

        {/* Profile Image */}
      <div className='z-10 mb-8 sm:mb-36 md:mb-14'>
        <img
          src={ProfilePic}
          alt="Profile photo"
          className='w-42 h-42 sm:w-50 sm:h-50 md:w-90 md:h-90 rounded-full object-cover shadow-2xl border-3 border-foreground'
        />
      </div>

        <div className='container max-w-4xl mx-auto text-center z-10'>
            <div className='space-y-6'>
                <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                    <span className='opacity-0 animate-fade-in-delay-1'> Hi, I'm </span>
                    <span className='text-primary opacity-0 animate-fade-in-delay-2'> Arshath </span>
                    <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-3'> Ahamed </span>
                </h1>

                <p className='text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4'>
                  I build seamless and responsive web applications with modern technologies. Specializing in full stack development, I work across the stack to deliver scalable and efficient solutions.
                </p>

                <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
                  <a href="#projects" className='cosmic-button'>
                    View My Work
                  </a>
                </div>
            </div>
        </div>

        <div className='hidden sm:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center animate-bounce'>
          <span className='text-sm text-muted-foreground mb-2'> Scroll </span>
          <ArrowDown className='h-5 w-5 text-primary' />
        </div>
    </section>
  )
}

export default HeroSection