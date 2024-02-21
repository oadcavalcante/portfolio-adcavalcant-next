import React, { useEffect, useState } from "react";
import { Container, Content, Ul, Li, TitleProject, Url, Created_at } from "../../styles/projects/style";

export default function Projects() {
  const [itemsApi, setItemsApi] = useState([]);

  useEffect(() => {
    let abortController = new AbortController();

    function getGitHubAPI() {
      fetch("https://api.github.com/users/oadcavalcante/repos")
        .then(async (res) => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          var data = await res.json();
          setItemsApi(data);
        })
        .catch((e) => console.log(e));
    }

    getGitHubAPI();

    return () => abortController.abort();
  }, []);

  return (
    <Container>
      <Content>
        <Ul>
          {itemsApi.map((item) => (
            <Li key={item.id}>
              <TitleProject>{item.name.toUpperCase()}</TitleProject>
              <Url href={item.html_url} target="_blank" rel="noopener noreferrer">
                {item.html_url}
              </Url>
              <Created_at>Data Criação: {Intl.DateTimeFormat("pt-BR").format(new Date(item.created_at))}</Created_at>
            </Li>
          ))}
        </Ul>
      </Content>
    </Container>
  );
}
