import React, { FC, FormEvent, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { postComment } from '../functional/api-client';
import { useAuth0 } from '@auth0/auth0-react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

interface PostProps {}

export interface EntryPost {
  EntryId: string;
  Content: string;
}

const PostForm: FC<PostProps> = () => {
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [showPostForm, setShowPostForm] = useState<boolean>(false);

  const { getAccessTokenSilently } = useAuth0();

  const handleSubmission = async (event: React.FormEvent<HTMLElement>) => {
    setSubmitting(true);
    let token: string = await getAccessTokenSilently();
    alert('test');
    /*let postBody: CommentPost = { EntryId: entryId, Content: content };
    await postComment(postBody, token);
    updatePosts();*/
    //setSubmitting(false);
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
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                size="lg"
                disabled={submitting}
              ></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" size="lg">
              Post
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PostForm;
