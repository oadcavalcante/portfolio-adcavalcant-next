import React from 'react'
import { Container, Content } from '../../styles/contact/style'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/adcavalcant" 
        />
        <ItemContact 
          IconFa={FaFacebook} 
          LinkContact="https://www.facebook.com/adcavalcant" 
        />
        <ItemContact 
          IconFa={FaInstagram} 
          LinkContact="https://www.instagram.com/adcavalcant/" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="aderc19@gmail.com" 
        />
      </Content>
    </Container>
  )
}
