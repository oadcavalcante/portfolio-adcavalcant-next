import styled from "styled-components";

//Este tom é um azul muito escuro, quase preto, frequentemente associado à cor do céu noturno.
export const midnightBlue = "#13293D";

//É um azul intenso, vibrante, que lembra o azul profundo do céu.
export const deepSkyBlue = "#006494";

//Um azul médio, frequentemente usado para representar a cor da água ou do céu.
export const seagullBlue = "#247BA0";

//Um azul claro brilhante, que pode ser comparado ao azul celeste ou ao azul-ciano.
export const vibrantLightBlue = "#1B98E0";

//Um tom muito claro de azul, quase branco, que lembra a cor do gelo ou da neve sob luz difusa.
export const iceBlue = "#E8F1F2";

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
    background-color: ${midnightBlue};
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
  color: ${midnightBlue};
`;

export const Url = styled.a`
  color: ${vibrantLightBlue};
  text-decoration: none;
  background-color: transparent;
  border-bottom: none;
  &:hover {
    color: ${seagullBlue};
  }
`;

export const Created_at = styled.span`
  color: ${deepSkyBlue};
  font-size: 0.8rem;
`;
