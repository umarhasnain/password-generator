import PasswordStrength from '@/components/CardSection'
import FAQSection from '@/components/Faqs'
import Footer from '@/components/Footer'
import Generator from '@/components/Generator'
import Component from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>

      <Component/>
      <Generator/>
      <PasswordStrength/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}

export default page
