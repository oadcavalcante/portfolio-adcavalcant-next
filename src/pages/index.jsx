import { FaArrowRight } from "react-icons/fa";
import {
  Container,
  Content,
  Infos,
  Name,
  Function,
  Intro,
  LinkProjects,
  Logo,
  Img,
} from "../../styles/indexStyle";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Content>
        <Infos>
          <Name>Aderbal Cavalcante</Name>
          <Function>FullStack Developer</Function>
          <Intro>
            Graduando em Engenharia da Computação, tenho experiência em
            desenvolvimento Web (Angular, Laravel, JS, PHP, PostgreSQL, MySql
            criação de páginas/sites Wordpress etc.)
          </Intro>
          <Link href="projects" passHref>
            <LinkProjects>
              PROJETOS <FaArrowRight />
            </LinkProjects>
          </Link>
        </Infos>
        <Logo>
          <Img src="/images/avatar.png" alt="Perfil" />
        </Logo>
      </Content>
    </Container>
  );
}
