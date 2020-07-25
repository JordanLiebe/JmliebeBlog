import React from 'react';
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
        flex-direction: row;
        flex-wrap: wrap;
      `}
    >
      <div
        id="content"
        css={css`
          width: 75%;
        `}
      >
        {props.content}
      </div>
      <div
        id="sidebar"
        css={css`
          width: 25%;
          min-width: 350px;
        `}
      >
        {props.sidebar}
      </div>
    </div>
  );
};

export default ContentWithRightSidebar;
