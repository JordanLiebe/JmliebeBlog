import React, { useEffect } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

interface ContentWithRightSidebarProps {
  content: any;
  sidebar: any;
}

export const ContentWithRightSidebar = (
  props: ContentWithRightSidebarProps,
) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        @media only screen and (max-width: 990px) {
          flex-direction: column;
        }
      `}
    >
      <div
        id="content"
        css={css`
          width: 75%;
          @media only screen and (max-width: 990px) {
            width: 100%;
          }
        `}
      >
        {props.content}
      </div>
      <div
        id="sidebar"
        css={css`
          width: 25%;
          @media only screen and (max-width: 990px) {
            width: 100%;
          }
        `}
      >
        {props.sidebar}
      </div>
    </div>
  );
};

export default ContentWithRightSidebar;
