import styled from 'styled-components'
import { motion } from 'framer-motion'

export const MobileNavList = styled(motion.ul) <{ variants: any }>`
  padding: 25px;
  position: absolute;
  bottom: 100px;
  width: 230px;
  display: flex;
	flex-direction: column;
	transform: rotatex(10deg);
	animation: rotateAngle 6s linear infinite;
`;