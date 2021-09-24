import * as React from "react";
import { MenuItem } from "./MenuItem";
import { MobileNavList } from './MobileNav.components'
import { MobileNavProps } from './MobileNav.types'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

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

export const MobileNav: React.FC<MobileNavProps> = (props) => {
  return (
    <MobileNavList variants={variants}>
      {navItems.map((item, index) => (
        <MenuItem url={item.url} text={item.text} key={index} index={index} onClick={props.toggleMenu} />
      ))}
    </MobileNavList>
  )
};