import styled from "styled-components";

const tertiaryColor = "#003554";
const orange = "#FC6736";
const darkBlue = "#0C2D57";
const lightBlue = "#006494";
const pink = "#FFB0B0";
const white = "#EFECEC";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

export const Content = styled.div`
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const Ul = styled.ul`
  overflow-x: auto;
  height: inherit;

  &::-webkit-scrollbar {
    width: 12px;
    border-radius: 10px;
    background-color: #c7dcff;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${darkBlue};
  }
`;

export const Li = styled.li`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  text-align: start;
  word-break: break-word;
  margin: 10px;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 760px) {
    font-size: 13px;
  }
`;

export const TitleProject = styled.strong`
  color: ${darkBlue};
`;

export const Url = styled.a`
  color: ${orange};
  text-decoration: none;
  background-color: transparent;
  border-bottom: none;
  &:hover {
    color: ${tertiaryColor};
  }
`;

export const Created_at = styled.span`
  color: ${lightBlue};
  font-size: 0.8rem;
`;
