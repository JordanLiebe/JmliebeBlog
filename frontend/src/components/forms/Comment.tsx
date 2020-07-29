import React, { FormEvent, useState } from 'react';
import { Button } from 'react-bootstrap';

interface Comment {
  entryId: number;
  content: string;
}

const Comment = () => {
  const [content, setContent] = useState('');
  const handleInputChange = (event: FormEvent<HTMLFormElement>) => {};
  return (
    <div>
      <hr />
      <form onSubmit={handleInputChange}>
        <input name="NewComment" />
        <Button>Send</Button>
      </form>
    </div>
  );
};

export default Comment;
