import React from "react";
import { MenuItemProps } from "./MobileNav.types";
import { motion } from "framer-motion";
import styled from 'styled-components'
import MobileLink from "../Transitions/MobileLink";

import theme from "../../styles/theme";

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 }
		}
	},
	closed: {
		y: 100,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 }
		}
	}
};

const List = styled(motion.li)`
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

const Item = styled.div`
    text-align: center;
    color: ${theme.colors.offWhite};
    font-weight: ${theme.typography.h4.weight};
`;

export const MenuItem: React.FC<MenuItemProps> = ({ url, text, onClick }) => {
	return (
		<MobileLink url={url} effect="fade" lenght={.5} onClick={onClick}>
			<List
				variants={variants}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
			>
				<Item>{text}</Item>
			</List >
		</MobileLink >
	);
};