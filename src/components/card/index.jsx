import { GrFormViewHide } from "react-icons/gr";

import {
  CardOutline,
  CardBody,
  CardContent,
  CardImage,
  Actions,
  CardButton,
  IconText,
  Icon,
  IconWrapper,
  Typography,
} from "./styles";

const Card = () => {
  return (
    <CardOutline>
      <CardBody>
        <CardContent>
          <CardImage
            src="https://image.freepik.com/vetores-gratis/fundo-abstrato-movimento-claro_42859-429.jpg"
            alt
          />
        </CardContent>
      </CardBody>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Actions>
        <IconWrapper>
          <Icon>
            <GrFormViewHide />
          </Icon>
          <IconText>&nbsp;View</IconText>
        </IconWrapper>
        <CardButton>Buy Now</CardButton>
      </Actions>
    </CardOutline>
  );
};

export default Card;
