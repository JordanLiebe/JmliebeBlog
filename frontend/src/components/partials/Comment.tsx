import React, { FC } from 'react';
import { CommentGetResponse } from '../functional/api-interfaces';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

interface CommentProps {
  comment: CommentGetResponse;
}

export const Comment: FC<CommentProps> = ({ comment }) => {
  return (
    <div
      key={comment.id}
      css={css`
        display: hide;
      `}
    >
      <hr />
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap;
        `}
      >
        <div>{comment.content}</div>
        <div>
          Posted By: <u>{comment.author}</u>
          <span> at </span> {comment.created.toLocaleTimeString()} on{' '}
          {comment.created.toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default Comment;
