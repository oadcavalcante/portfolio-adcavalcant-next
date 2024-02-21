import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

export const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
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
`;
