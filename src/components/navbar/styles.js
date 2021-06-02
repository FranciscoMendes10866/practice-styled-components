import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MenuLink = styled(Link)`
  font-weight: 500;
  padding: 1rem 1.5rem;
  margin-left: 4px;
  margin-right: 4px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #272727;
  background: whitesmoke;
  border-radius: 25px;
  border-style: solid;
  border-color: white;
  border-width: 3px;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,.04);
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  @media (max-width: 768px) {
    color: #272727;
    padding: 1rem 2rem;
    border: none;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
  }
`;

export const MenuLinkCurrent = styled(Link)`
  font-weight: 500;
  padding: 1rem 1.5rem;
  margin-left: 4px;
  margin-right: 4px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  background: #272727;
  border-radius: 25px;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,.04);
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  @media (max-width: 768px) {
    font-weight: 600;
    color: #272727;
    padding: 1rem 2rem;
    border: none;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
  }
`;

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,.08);
  border-radius: 16px;
  margin: 20px;
  top: 0;
  left: 0;
  right: 0;
`;

export const Logo = styled.a`
  padding: 1rem 0;
  color: black;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  font-size: 1.5rem;
  display: none;
  flex-direction: column;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
  }
`;