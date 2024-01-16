import React from "react";
import { Container, Content, ContactItem } from "../../styles/contact/style";
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

const contactInfo = [
  { Icon: FaLinkedin, Link: "https://www.linkedin.com/in/adcavalcant", Nome: "LinkedIn" },
  { Icon: FaFacebook, Link: "https://www.facebook.com/adcavalcant", Nome: "Facebook" },
  { Icon: FaInstagram, Link: "https://www.instagram.com/oadcavalcante/", Nome: "Instagram" },
  { Icon: FaEnvelope, Link: "mailto:aderc19@gmail.com", Nome: "E-mail" },
];

export default function Contact() {
  return (
    <Container>
      <Content>
        {contactInfo.map(({ Icon, Link, Nome }) => (
          <ContactItem key={Nome} href={Link} target="_blank">
            <Icon />
            {Nome}
          </ContactItem>
        ))}
      </Content>
    </Container>
  );
}
