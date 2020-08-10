import React, { FC, FormEvent, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { postEntry } from '../functional/api-client';
import { useAuth0 } from '@auth0/auth0-react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

interface PostProps {
  updatePosts: () => void;
}

export interface EntryObj {
  Subject: string;
  Content: string;
}

const PostForm: FC<PostProps> = ({ updatePosts }) => {
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [showPostForm, setShowPostForm] = useState<boolean>(false);

  const { getAccessTokenSilently } = useAuth0();

  const handleSubmission = async (event: React.FormEvent<HTMLElement>) => {
    setSubmitting(true);
    let token: string = await getAccessTokenSilently();
    let postBody: EntryObj = { Subject: subject, Content: content };
    await postEntry(postBody, token);
    updatePosts();
    setSubmitting(false);
    setShowPostForm(false);
  };
  return (
    <div
      css={css`
        margin: 20px;
        padding: 15px;
        border-top: 3px lightsalmon solid;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 5px 0px;
        display: flex;
      `}
    >
      <h3>Actions:</h3>
      <Button
        variant="info"
        onClick={() => setShowPostForm(true)}
        css={css`
          margin-left: 15px;
        `}
      >
        New Post
      </Button>
      <Modal show={showPostForm} onHide={() => setShowPostForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmission(event);
            }}
          >
            <Form.Group>
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                size="lg"
                disabled={submitting}
                value={subject}
                onChange={(event) => setSubject(event.currentTarget.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                size="lg"
                disabled={submitting}
                value={content}
                onChange={(event) => setContent(event.currentTarget.value)}
              ></Form.Control>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              size="lg"
              disabled={submitting}
            >
              Post
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PostForm;
