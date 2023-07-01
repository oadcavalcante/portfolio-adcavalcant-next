import React from "react";
import { Container, Content } from "../../styles/contact/style";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import ItemContact from "../../../components/ItemContact";

export default function Contact() {
  const iconSize = 60;

  return (
    <Container>
      <Content>
        <ItemContact
          IconFa={FaLinkedin}
          LinkContact="https://www.linkedin.com/in/adcavalcant"
          Nome="LinkedIn"
        />
        <ItemContact
          IconFa={FaFacebook}
          LinkContact="https://www.facebook.com/adcavalcant"
          Nome="Facebook"
        />
        <ItemContact
          IconFa={FaInstagram}
          LinkContact="https://www.instagram.com/adcavalcant/"
          Nome="Instagram"
        />
        <ItemContact
          IconFa={FaEnvelope}
          LinkContact="mailto:aderc19@gmail.com"
          Nome="E-mail"
        />
      </Content>
    </Container>
  );
}
