import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid white;
`;

export const Content = styled.div`
  width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  @media (max-width: 767px) {
    margin: 20px 5px 20px 5px;
  }
`;

export const Title = styled.div`
  font-size: 40px;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 830px) {
    padding-top: 20px;
    padding-left: 20px;
  }

  @media (max-width: 560px) {
    flex-direction: column;
    background-color: #001f3f;
    background: linear-gradient(to right, #0c2d57, #1b98e0);

    position: fixed;
    height: 100%;
    gap: 0px;
    top: 0px;
    right: 0px;
    width: 60%;
    right: ${(props) => (props.sidebar ? "0" : "-100%")};
    transition: 0.5s;

    a {
      margin-top: 100px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
`;

export const Ancora = styled.a`
  font-size: 20px;
  height: 100px;
  transition: 0.3s;
  text-decoration: none;
  color: white;

  &.active {
    background-color: #333;
  }

  @media (min-width: 560px) {
    align-items: center;
    display: flex;
    padding: 0px 10px;
  }
`;

export const Menu = styled.div`
  font-size: 30px;
  display: none;
  cursor: pointer;

  @media (max-width: 560px) {
    display: flex;
  }
`;

export const CloseSidebar = styled.div`
  font-size: 30px;
  right: 15px;
  top: 35px;
  position: absolute;
  display: none;
  cursor: pointer;

  @media (max-width: 560px) {
    display: flex;
  }
`;

export const ContentTitle = styled.div`
  text-align: end;
`;

export const SubTitle = styled.span``;
