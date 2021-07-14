import React, { useCallback } from 'react';
import { LinkCustomProps } from './LinkCustom.types'
import { StyledTransitionLink } from './LinkCustom.components'

export const LinkCustom: React.FC<LinkCustomProps> = ({ className, children, url, effect, lenght }) => {
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
      <StyledTransitionLink
        activeClassName="any"
        className={className} 
        to={url} 
        exit={exitTransition} 
        entry={entryTransition}
      >
        {children}
      </StyledTransitionLink>
    </>
  );
};

export default LinkCustom;