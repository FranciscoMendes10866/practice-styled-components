import styled from 'styled-components'

export const PrimaryButton = styled.button`
  cursor: pointer;
  font-weight: 500;
  padding: 13px 25px;
  border-radius: 15px;
  font-size: 0.8rem;
  border: none;
  color: white;
  background: #185adb;
  transition: all .25s ease;
  &:hover {
    box-shadow: 0 10px 20px -10px rgba(24, 90, 219, 0.6);
    transform: translateY(-5px);
  }
`;

export const DangerButton = styled.button`
  cursor: pointer;
  font-weight: 500;
  padding: 13px 25px;
  border-radius: 15px;
  font-size: 0.8rem;
  border: none;
  color: white;
  background: #fb3640;
  transition: all .25s ease;
  &:hover {
    box-shadow: 0 10px 20px -10px rgba(251, 54, 64, 0.6);
    transform: translateY(-5px);
  }
`;

export const WarningButton = styled.button`
  cursor: pointer;
  font-weight: 500;
  padding: 13px 25px;
  border-radius: 15px;
  font-size: 0.8rem;
  border: none;
  color: white;
  background: #fdca40;
  transition: all .25s ease;
  &:hover {
    box-shadow: 0 10px 20px -10px rgba(253, 202, 64, 0.6);
    transform: translateY(-5px);
  }
`;

export const ShadowButton = styled.button`
  cursor: pointer;
  font-weight: 500;
  padding: 14px 25px;
  border-radius: 14px;
  font-size: 0.8rem;
  border: none;
  color: black;
  background: transparent;
  transition: all .25s ease;
  box-shadow: 0 5px 20px 0 rgba(0,0,0,.06);
  &:hover {
    box-shadow: none;
    transform: translateY(4px);
  }
`;
