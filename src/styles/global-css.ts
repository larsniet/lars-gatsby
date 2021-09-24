import { css, createGlobalStyle } from 'styled-components';
import theme, { Typography } from './theme';
import textScaler from './textScaler';

const typographyElements = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'li',
    'ul',
    'body',
];

const typographyClasses = [
    'introduction',
    'caption',
    'subtitle',
    'button',
    'menuitem',
    'form',
];

const addStylingExceptions = (element: string) => {
    switch (element) {
        case 'subtitle':
            return 'text-transform: uppercase;';
        case 'button':
            return 'text-decoration: none;';
        default:
            return '';
    }
};

const typographyElementStyling = typographyElements.map(
    (element) => css`
        ${element} {
            font-size: ${theme.typography[element as keyof Typography].size};
            line-height: ${theme.typography[element as keyof Typography].height};
            letter-spacing: ${theme.typography[element as keyof Typography].spacing};
            font-family: ${theme.typography[element as keyof Typography].font};
            font-weight: ${theme.typography[element as keyof Typography].weight};
            color: ${theme.typography[element as keyof Typography].color};
            margin-top: ${theme.typography[element as keyof Typography].marginTop};
            margin-bottom: ${theme.typography[element as keyof Typography].marginBottom};
            margin-left: ${theme.typography[element as keyof Typography].marginLeft};
            margin-right: ${theme.typography[element as keyof Typography].marginRight};
            ${addStylingExceptions(element)};
        }
    `,
);

export const TypographyClassStyling = createGlobalStyle`
    ${typographyClasses
        .map(
            (element) => `.${element} {
            font-size: ${theme.typography[element as keyof Typography].size};
            line-height: ${theme.typography[element as keyof Typography].height};
            letter-spacing: ${theme.typography[element as keyof Typography].spacing};
            font-family: ${theme.typography[element as keyof Typography].font};
            font-weight: ${theme.typography[element as keyof Typography].weight};
            color: ${theme.typography[element as keyof Typography].color};
            margin:
                ${theme.typography[element as keyof Typography].marginTop};
                ${theme.typography[element as keyof Typography].marginRight};
                ${theme.typography[element as keyof Typography].marginBottom};
                ${theme.typography[element as keyof Typography].marginLeft};
            ${addStylingExceptions(element)};
        }`,
        )
        .join('\n')}
`

const GlobalStyles = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    ol, ul { list-style: none; }
    blockquote, q { quotes: none; }
    blockquote:before, blockquote:after,
    q:before, q:after { content: '';content: none; }
    table { border-collapse: collapse; border-spacing: 0; }
    html { font-size: 1em; background: ${theme.colors.background} }
    a { text-decoration: none }
    img { width: 100%; height: auto; margin:0; padding: 0}
    ${typographyElementStyling}

    body { overflow-x: hidden; line-height: 1; }
    textarea { resize: vertical; }
    ::selection {
        background: ${theme.colors.tertiary};
        color: ${theme.colors.white}
    }
    strong { font-weight: 700; }
    em { font-style: italic; }
    ${textScaler}
    ul { list-style: circle};
    ol {
        list-style: decimal;
        padding-left: 1rem;
    };
    blockquote {
        margin-left: 10%;
        font-style: italic;
        position: relative;
        ::before {
            content: '‘‘';
            color: ${theme.colors.primary};
            font-size: 60px;
            position: absolute;
            top: 10px;
            left: -30px;
            letter-spacing: -4px;
            font-family: "Times New Roman", Times, serif;
        }
    }
    code { font-family: monospace; }
    pre {
        white-space: pre-wrap;
        font-size: 80%;
    }
    hr { margin: 42px 0; }
    .refresh {
        padding: 10px;
        position: absolute;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 10px;
        width: 20px;
        height: 20px;
        bottom: 10px;
        right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    @keyframes rotateAngle {
	0% {
		transform: rotateY(0deg) rotateX(10deg);
		animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
	}
	25% {
		transform: rotateY(20deg) rotateX(10deg);
	}
	50% {
		transform: rotateY(0deg) rotateX(10deg);
		animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
	}
	75% {
		transform: rotateY(-20deg) rotateX(10deg);
	}
	100% {
		transform: rotateY(0deg) rotateX(10deg);
	}
}

@keyframes translateWobble {
  0% {
		opacity: 0;
		transform: translate3d(
			calc(var(--z) * 0px), 
			calc(var(--z) * 0px), 
			calc(var(--z) * 0px)
		);
  }
  16% {
		transform: translate3d(
			calc(var(--z) * 160px), 
			calc(var(--z) * 160px), 
			calc(var(--z) * 160px)
		);
  }
  28% {
		opacity: 1;
		transform: translate3d(
			calc(var(--z) * 70px), 
			calc(var(--z) * 70px), 
			calc(var(--z) * 70px)
		);
  }
  44% {
		transform: translate3d(
			calc(var(--z) * 130px), 
			calc(var(--z) * 130px), 
			calc(var(--z) * 130px)
		);
  }
  59% {
		transform: translate3d(
			calc(var(--z) * 85px), 
			calc(var(--z) * 85px), 
			calc(var(--z) * 85px)
		);
  }
  73% {
		transform: translate3d(
			calc(var(--z) * 110px), 
			calc(var(--z) * 110px), 
			calc(var(--z) * 110px)
		);
  }
	88% {
		opacity: 1;
		transform: translate3d(
			calc(var(--z) * 90px), 
			calc(var(--z) * 90px), 
			calc(var(--z) * 90px)
		);
  }
  100% {
		opacity: 1;
		transform: translate3d(
			calc(var(--z) * 100px), 
			calc(var(--z) * 100px), 
			calc(var(--z) * 100px)
		);
  }
}
`;

export { GlobalStyles };
