import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 350px);
`;

export const Content = styled.div`
  width: 80%;
  max-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContactItem = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 30px;
  border: 2px solid white;
  border-radius: 80px;
  margin: 8px;
  transition: background-color 0.5s, transform 0.2s;

  &:hover {
    background-color: black;
    transform: scale(1.05);
  }

  svg {
    font-size: 24px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
