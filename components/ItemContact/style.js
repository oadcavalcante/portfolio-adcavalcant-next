import styled from "styled-components";

export const Item = styled.div`
  margin-top: 40px;
  width: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: break-word;


  }

  @media (max-width: 760px) {
    font-size: 12px;
  }
`;

export const Icon = styled.div`
  margin-right: -45px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const Text = styled.div`
  color: white;
  text-align: start;
  &:hover {
    color: navy;

    Text{
      color: navy;
    }
`;

export const A = styled.a`
  text-decoration: none;
  color: white;

  display: flex;
  align-items: center;
`;
