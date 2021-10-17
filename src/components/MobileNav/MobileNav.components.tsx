import styled from 'styled-components'
import { motion } from 'framer-motion'
import theme from "../../styles/theme"

export const MobileNavList = styled(motion.div) <{
  variants: any, menuIsOpen: boolean;
}>`
  position: absolute;
  bottom: 100px;
  left: 0; 
  right: 0; 
  width: 230px;
  margin-left: auto; 
  margin-right: auto;
  display: flex;
	flex-direction: column;
	transform: rotatex(10deg);
	animation: rotateAngle 6s linear infinite;
  pointer-events: ${(props) => props.menuIsOpen ? "all" : "none"};
`;

export const List = styled(motion.div)`
  margin: 0.5em 0;
  padding: .8em 2.2em;
  cursor: pointer;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border: 2px solid ${theme.colors.offWhite};
  border-radius: 50px;

  mix-blend-mode: color-dodge;
  perspective: 500px;
  transform-style: preserve-3d;
  list-style: none;
`;

export const Item = styled.div`
  text-align: center;
  color: ${theme.colors.offWhite};
  font-weight: ${theme.typography.h4.weight};
`;
