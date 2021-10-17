import styled from 'styled-components'
import { motion } from 'framer-motion'
import theme from "../../styles/theme"

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

export const List = styled(motion.li)`
  margin: 0.5em 0;
  padding: .8em 2.2em;
  cursor: pointer;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border: 5px solid ${theme.colors.offWhite};
  border-radius: 50px;

  mix-blend-mode: color-dodge;
  perspective: 500px;
  transform-style: preserve-3d;
  list-style: none;

  &:before, &:after {
    --z: 0px;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    opacity: 0;
    mix-blend-mode: inherit;
    border-radius: inherit;
    transform-style: preserve-3d;
    transform: translate3d(
    calc(var(--z) * 0px),
    calc(var(--z) * 0px),
    calc(var(--z) * 0px)
    );
  }

  span {
    mix-blend-mode: none;
    display: block;
	}

  &:after {
    background-color: #b4a53d;
	}

  &:before {
    background-color: ${theme.colors.primary};
	}


  &:hover:before {
    --z: 0.04;
    animation: translateWobble 2.2s ease forwards;
	}

  &:hover:after {
    --z: -0.06;
    animation: translateWobble 2.2s ease forwards;
	}
`;

export const Item = styled.div`
  text-align: center;
  color: ${theme.colors.offWhite};
  font-weight: ${theme.typography.h4.weight};
`;
