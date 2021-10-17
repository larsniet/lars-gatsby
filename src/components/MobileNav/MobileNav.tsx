import * as React from "react";
import { MobileNavList, List, Item } from './MobileNav.components'
import { MobileNavProps } from './MobileNav.types'
import MobileLink from "../Transitions/MobileLink";

// Fixed pages only
const navItems = [
  {
    url: "/",
    text: "Werk"
  },
  {
    url: "/about",
    text: "Over Lars"
  }
];

// Variants for framer-motion animations
const listVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.3 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};
const itemVariants = {
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

export const MobileNav: React.FC<MobileNavProps> = (props) => {
  return (
    <MobileNavList variants={listVariants} menuIsOpen={props.menuIsOpen}>
      {navItems.map((item, index) => (
        <MobileLink key={index} url={item.url} effect="fade" lenght={.5} onClick={props.toggleMenu}>
          <List variants={itemVariants}>
            <Item>{item.text}</Item>
          </List>
        </MobileLink>
      ))}
    </MobileNavList>
  )
};