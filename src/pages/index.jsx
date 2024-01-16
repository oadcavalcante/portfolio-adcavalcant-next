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
  LogosContainer,
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
            Atualmente, atuo como <b>Desenvolvedor FullStack</b>, com habilidades consolidadas no desenvolvimento web e
            uma paixão por criar soluções inovadoras e funcionais. Tenho experiência em desenvolvimento <br /> Web
            (Angular, Laravel, JS, PHP, PostgreSQL, <br />
            MySql criação de páginas/sites Wordpress e outros.)
          </Intro>
          <LogosContainer>
            <Img src="/images/js.png" alt="JavaScript" />
            <Img src="/images/php.png" alt="PHP" />
            <Img src="/images/angular.png" alt="Angular" />
            <Img src="/images/laravel.png" alt="Laravel" />
            <Img src="/images/postgres.png" alt="PostgreSQL" />
            <Img src="/images/mongodb.png" alt="PostgreSQL" />
          </LogosContainer>
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
