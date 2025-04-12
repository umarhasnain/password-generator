'use client'
import PasswordStrength from '@/components/CardSection'
import ContentInfo from '@/components/ContentInfo'
import FAQSection from '@/components/Faqs'
import Generator from '@/components/Generator'
import Component from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>

      <Component/>
      <Generator/>
      <ContentInfo/>
      <PasswordStrength/>
      <FAQSection/>
   
    </div>
  )
}

export default page

