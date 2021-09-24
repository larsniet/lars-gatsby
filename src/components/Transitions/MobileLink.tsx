import React, { useCallback } from 'react';
import { LinkCustomProps } from './LinkCustom.types'
import TransitionLink from 'gatsby-plugin-transition-link';

const MobileLink: React.FC<LinkCustomProps> = ({ className, children, url, effect, lenght, onClick }) => {
  const exitTransition = {
    length: lenght,
    zIndex: 1,
    trigger: ({ node }: LinkCustomProps) => {
      exitTransition.exitTrigger(node);
      if (node) (node as HTMLElement).style.top = -window.pageYOffset + 'px';
      window.scrollTo({ top: -window.pageYOffset });
    },
    exitTrigger: useCallback(container => {
      container.setAttribute(
        'style',
        'animation: ' +
        effect +
        'Out ' +
        lenght +
        's cubic-bezier(0.83, 0, 0.17, 1) forwards;'
      );
    }, []),
  };

  const entryTransition = {
    zIndex: 2,
    trigger: ({ node }: LinkCustomProps) => {
      entryTransition.entryTrigger(node);
    },
    entryTrigger: useCallback(container => {
      container.setAttribute(
        'style',
        'animation: ' +
        effect +
        'In ' +
        lenght +
        's cubic-bezier(0.83, 0, 0.17, 1) forwards;'
      );
    }, []),
  };

  return (
    <>
      <TransitionLink
        activeClassName="any"
        className={className}
        to={url}
        exit={exitTransition}
        entry={entryTransition}
        onClick={onClick}
      >
        {children}
      </TransitionLink>
    </>
  );
};

export default MobileLink;