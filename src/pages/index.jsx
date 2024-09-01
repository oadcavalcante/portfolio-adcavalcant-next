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

const icons = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    alt: "JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    alt: "TypeScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
    alt: "Angular",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    alt: "Spring",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    alt: "Laravel",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    alt: "PostgreSQL",
  },
];

export default function Home() {
  return (
    <Container>
      <Content>
        <Infos>
          <Name>Aderbal Cavalcante</Name>
          <Function>Full Stack Developer</Function>
          <Intro>
            <b>Desenvolvedor de software Full Stack</b> com formação e experiência em desenvolvimento front-end e
            back-end. Iniciei meus estudos em 2017 e ao longo da minha carreira trabalhei com tecnologias como PHP
            (CodeIgniter), Angular, Spring, Laravel e React. Atualmente, atuo como 3º Sargento Especialista em Sistemas
            de Informação na Força Aérea Brasileira, com foco na stack Spring + Angular. Estou sempre buscando novos
            desafios e me mantenho atualizado com as mais recentes tecnologias em desenvolvimento de software.
          </Intro>
          <LogosContainer>
            {icons.map((icon, index) => (
              <Img key={index} src={icon.src} alt={icon.alt} />
            ))}
          </LogosContainer>
          <Link href="/projects" passHref>
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
