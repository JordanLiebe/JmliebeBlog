import React, { FC, useState, FormEvent, ChangeEvent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export const Sidebar: FC = () => {
  return (
    <div
      css={css`
        margin: 20px;
        padding: 15px;
        border-top: 3px lightsalmon solid;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 5px 0px;
      `}
    >
      <div>
        <label>Search</label>
        <div>
          <form>
            <input />
            <button>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
