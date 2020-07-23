import React, { FC } from 'react';
import { EntryGetResponse } from '../functional/api-interfaces';
import { CommentList } from '../partials/CommentList';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export const CommentForm: FC = () => {
  return (
    <div
      css={css`
        margin: 20px;
        padding: 15px;
        border-top: 3px lightsalmon solid;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 5px 0px;
      `}
    ></div>
  );
};

export default CommentForm;
