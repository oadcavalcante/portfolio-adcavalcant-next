import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(to bottom right, #0077ff, #66ccff);
`;

export const Content = styled.div`
  width: 80%;
  max-width: 2000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const ContactItem = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 20px;
  border: 2px solid #333;
  border-radius: 10px;
  background-color: #333;
  transition: background-color 0.5s, transform 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #555;
    transform: translateY(-5px);
  }

  svg {
    font-size: 24px;
    color: white;
  }

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 480px) {
    width: calc(100% - 20px);
  }
`;
