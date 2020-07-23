import React, { FC, useState } from 'react';
import { CommentGetResponse } from '../functional/api-interfaces';
import { Comment } from '../partials/Comment';
import { Button } from 'react-bootstrap';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

interface CommentListProps {
  comments: CommentGetResponse[];
}

export const CommentList: FC<CommentListProps> = ({ comments }) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  let it: number = 0;
  return (
    <div
      css={css`
        padding: 0px;
      `}
    >
      {comments.map((comment) => {
        it++;
        return (
          <div key={comment.id}>
            {it === 1 || showAll ? <Comment comment={comment} /> : null}
          </div>
        );
      })}
      {comments.length > 1 && (
        <div>
          <hr />
          {!showAll ? (
            <div
              css={css`
                text-align: center;
              `}
            >
              <Button variant="link" onClick={() => setShowAll(true)}>
                Show All
              </Button>
            </div>
          ) : (
            <div
              css={css`
                text-align: center;
              `}
            >
              <Button variant="link" onClick={() => setShowAll(false)}>
                Show Less
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CommentList;
