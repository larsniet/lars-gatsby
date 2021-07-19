// Colors
const black = '#0f0f0f';
const darkgray = '#1a1a1a';
const lightgray = '#e5e5e5';
const lightgray2 = '#E7E7E7';
const mediumgray = '#262626';
const red = '#df5252';
const green = '#6d9846';
const white = '#ffffff';
const offWhite = '#f5f5f5';
const offWhiteBackground = '#f5f5f5c7';
const navyBlue = '#14213d';
const yellow = '#fca311';

// Fonts
const heading = 'Lato';
const paragraph = 'Rubik';
const menu = 'Rubik';

// Font weights
const light = 300;
const regular = 300;
const bold = 700;

// Global Header settings
const GlobalHeadingSettings = {
    height: '1em',
    spacing: '0em',
    color: black,
    weight: bold,
    marginBottom: '0.66em',
};
type Colors = {
    background: string;
    primary: string;
    secondary: string;
    tertiary: string;
    black: string;
    mediumgray: string;
    lightgray: string;
    lightgray2: string;
    white: string;
    offWhite: string;
    offWhiteBackground: string;
};
type Fonts = {
    heading: string;
    paragraph: string;
    menu: string;
};
type FontWeights = {
    light: number;
    regular: number;
    bold: number;
};
type TypographyElement = {
    size?: string;
    height?: string;
    spacing?: string;
    font?: string;
    weight?: number;
    color?: string;
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
};
type Body = TypographyElement & {
    height: string;
    spacing: string;
    font: string;
    weight: number;
    color: string;
};
type TextElement = TypographyElement & {
    spacing: string;
    font: string;
    weight: number;
    color: string;
    marginBottom: string;
};
type ListItem = TypographyElement & {
    spacing: string;
    font: string;
    weight: number;
    color: string;
    marginTop: string;
    marginBottom: string;
};
type UnorderedList = TypographyElement & {
    marginTop: string;
    marginBottom: string;
    marginLeft: string;
    marginRight: string;
};
type HTMLElement = TypographyElement & {
    size: string;
    height: string;
    spacing: string;
    font: string;
    weight: number;
    color: string;
};
type Introduction = HTMLElement;
type Caption = HTMLElement;
type Subtitle = HTMLElement;
type Button = HTMLElement;
type MenuItem = HTMLElement;
type Form = HTMLElement;
export type Typography = {
    body: Body;
    h1: TextElement;
    h2: TextElement;
    h3: TextElement;
    h4: TextElement;
    h5: TextElement;
    h6: TextElement;
    p: TextElement;
    li: ListItem;
    ul: UnorderedList;
    introduction: Introduction;
    caption: Caption;
    subtitle: Subtitle;
    button: Button;
    menuitem: MenuItem;
    form: Form;
};
type Breakpoints = {
    tablet: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl?: string;
};
interface Theme {
    colors: Colors;
    fonts: Fonts;
    fontWeights: FontWeights;
    typography: Typography;
    breakpoint: Breakpoints;
    containerWidth: Breakpoints;
    breakpointMobileMenu: string;
    mediaQueryMin: Breakpoints;
}
const breakpoints: Breakpoints = {
    tablet: '768px',
    xs: '45em',
    sm: '64em',
    md: '85.375em',
    lg: '120em',
    xl: '160em',
    xxl: '200em',
};
const theme: Theme = {
    colors: {
        background: offWhite,
        primary: navyBlue,
        secondary: green,
        tertiary: red,
        black,
        mediumgray,
        lightgray,
        lightgray2,
        white,
        offWhite,
        offWhiteBackground,
    },
    fonts: {
        heading,
        paragraph,
        menu,
    },
    fontWeights: {
        light,
        regular,
        bold,
    },
    typography: {
        body: {
            height: '1em',
            spacing: '0.0em',
            font: paragraph,
            weight: regular,
            color: lightgray,
        },
        h1: {
            spacing: GlobalHeadingSettings.spacing,
            font: heading,
            weight: GlobalHeadingSettings.weight,
            color: GlobalHeadingSettings.color,
            marginBottom: GlobalHeadingSettings.marginBottom,
        },
        h2: {
            spacing: GlobalHeadingSettings.spacing,
            font: heading,
            weight: GlobalHeadingSettings.weight,
            color: GlobalHeadingSettings.color,
            marginBottom: GlobalHeadingSettings.marginBottom,
        },
        h3: {
            spacing: GlobalHeadingSettings.spacing,
            font: heading,
            weight: GlobalHeadingSettings.weight,
            color: GlobalHeadingSettings.color,
            marginBottom: GlobalHeadingSettings.marginBottom,
        },
        h4: {
            spacing: GlobalHeadingSettings.spacing,
            font: heading,
            weight: GlobalHeadingSettings.weight,
            color: GlobalHeadingSettings.color,
            marginBottom: GlobalHeadingSettings.marginBottom,
        },
        h5: {
            spacing: GlobalHeadingSettings.spacing,
            font: heading,
            height: '1.33em',
            weight: light,
            color: GlobalHeadingSettings.color,
            marginBottom: GlobalHeadingSettings.marginBottom,
        },
        h6: {
            spacing: GlobalHeadingSettings.spacing,
            font: heading,
            height: '1.1em',
            weight: regular,
            color: GlobalHeadingSettings.color,
            marginBottom: '0.33em',
        },
        p: {
            spacing: '0.015em',
            height: '1.33em',
            font: paragraph,
            weight: regular,
            color: black,
            marginBottom: '0',
        },
        li: {
            spacing: '0em',
            font: paragraph,
            weight: regular,
            color: black,
            marginTop: '0',
            marginBottom: '.5em',
        },
        ul: {
            marginTop: '.5em',
            marginBottom: '0',
            marginLeft: '1em',
            marginRight: '0',
        },
        introduction: {
            size: '1.22em',
            height: '1.44em',
            spacing: '0.01em',
            font: paragraph,
            weight: regular,
            color: lightgray,
        },
        caption: {
            size: '0.95rem',
            height: '1.48em',
            spacing: '0em',
            font: menu,
            weight: light,
            color: lightgray2,
        },
        subtitle: {
            size: '0.85rem',
            height: '1.2em',
            spacing: '0.35em',
            font: paragraph,
            weight: bold,
            color: red,
        },
        button: {
            size: '1rem',
            height: '1.2em',
            spacing: 'normal',
            font: paragraph,
            weight: regular,
            color: white,
        },
        menuitem: {
            size: '1.125rem',
            height: '1.2em',
            spacing: '0.05em',
            font: menu,
            weight: regular,
            color: black,
        },
        form: {
            size: '2.4rem',
            height: '2.7em',
            spacing: 'normal',
            font: paragraph,
            weight: regular,
            color: white,
        },
    },
    breakpointMobileMenu: '68rem',
    breakpoint: breakpoints,
    containerWidth: {
        tablet: '768px',
        xs: '2vw',
        sm: '4vw',
        md: '8vw',
        lg: '11vw',
        xl: '15vw',
    },
    mediaQueryMin: {
        tablet: `min-width: 768px `,
        xs: `min-width: ${breakpoints.xs}`,
        sm: `min-width: ${breakpoints.sm}`,
        md: `min-width: ${breakpoints.md}`,
        lg: `min-width: ${breakpoints.lg}`,
        xl: `min-width: ${breakpoints.xl}`,
        xxl: `-webkit-min-device-pixel-ratio: 2) and
            (min-resolution: 192dpi) and
            (min-width: ${breakpoints.xxl}`,
    },
};
export default theme;
