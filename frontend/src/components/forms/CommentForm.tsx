import React, { FC, FormEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { postComment } from '../functional/api-client';
import { useAuth0 } from '@auth0/auth0-react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

interface CommentProps {
  entryId: string;
  updatePosts: () => void;
}

export interface CommentPost {
  EntryId: string;
  Content: string;
}

const CommentForm: FC<CommentProps> = ({ entryId, updatePosts }) => {
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const { getAccessTokenSilently } = useAuth0();

  const handleSubmission = async (event: React.FormEvent<HTMLElement>) => {
    setSubmitting(true);
    let token: string = await getAccessTokenSilently();
    let postBody: CommentPost = { EntryId: entryId, Content: content };
    await postComment(postBody, token);
    updatePosts();
    setSubmitting(false);
  };
  return (
    <div>
      <hr />
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmission(event);
        }}
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <Form.Control
          type="text"
          onChange={(event) => {
            setContent(event.currentTarget.value);
          }}
          disabled={submitting}
        ></Form.Control>
        <Button
          variant="info"
          type="submit"
          css={css`
            margin: 10px;
          `}
        >
          Send
        </Button>
      </Form>
    </div>
  );
};

export default CommentForm;
