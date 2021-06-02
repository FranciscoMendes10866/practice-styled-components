import styled from 'styled-components'

export const CardOutline = styled.div`
  border-style: solid;
  border-color: white;
  border-width: 4px;
  background: whitesmoke;
  border-radius: 25px;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,.04);
  padding: 10px;
  max-width: 400px;
`;

export const CardBody = styled.div`
  border-radius: 15px;
  background-color: white;
`;

export const CardContent = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const CardImage = styled.img`
    border-radius: 10px;
    width: 100%;
    height: 300px;
    object-fit: cover;
`;

export const Actions = styled.div`
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 17px;
    border-bottom-left-radius: 8px;
    padding: 10px;
    font-weight: 500;
`;

export const IconWrapper = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #272727;
`;

export const Icon = styled.span`
    font-size: 1.5rem;
`;

export const IconText = styled.p`
    color: #272727;
`;

export const CardButton = styled.button`
    cursor: pointer;
    padding: 10px 25px;
    color: white;
    font-size: 12px;
    background: #272727;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 17px;
    border-bottom-left-radius: 8px;
    border: none;
    transition: all .25s ease;
    &:hover {
        box-shadow: 0 10px 20px -10px rgba(39, 39, 39, 0.6);
        transform: translateY(-5px);
    }
`;

export const Typography = styled.p`
    color: #272727;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 8px;
    text-align: justify;
`;