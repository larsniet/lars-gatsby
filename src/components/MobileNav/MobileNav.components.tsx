import styled from 'styled-components'
import { motion } from 'framer-motion'

export const MobileNavList = styled(motion.ul) <{
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