import { PropsWithChildren } from "react";
import styled from "styled-components";
import device from "../device";

type CardProps = PropsWithChildren<{
  className?: string;
}>;

const Card = ({ children, className }: CardProps) => {
  return <Component className={className}>{children}</Component>;
};

const Component = styled.div`
  background-color: rgb(220, 223, 227);
  border-radius: 8px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  color: rgb(28, 28, 28);
  font-size: 12px;
  padding: 10px 5px;

  @media ${device.laptop} {
    font-size: 14px;
    padding: 20px 5px;
  }
`;

export default Card;
