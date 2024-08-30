import React from "react";
import { Container, Content, ContactItem } from "../../styles/contact/style";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const contactInfo = [
  { Icon: FaGithub, Link: "https://github.com/oadcavalcante", Nome: "Github" },
  { Icon: FaLinkedin, Link: "https://www.linkedin.com/in/oadcavalcante", Nome: "LinkedIn" },
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
