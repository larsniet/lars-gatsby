export interface NavbarProps {
    background?: boolean;
    closeDropdown?: any;
}

export interface NavbarItemProps {
    href: string;
    text: string;
}

export interface NavWrapperProps {
    menuIsOpen: boolean;
}

export interface MobileNavWrapperProps {
    initial: any; 
    animate: any; 
    custom: any; 
    ref: any;
    menuIsOpen: boolean;
}

export interface MobileNavBackgroundProps {
    variants: any;
    custom: any;
}