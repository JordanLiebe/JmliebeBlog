import React, { FC, useState, useEffect } from 'react';
import CategorySelector from '../partials/CategorySelector';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { RouteComponentProps } from 'react-router';

interface SidebarProps extends RouteComponentProps {
  search: string;
  setSearch: (search: string) => void;
}

export const Sidebar: FC<SidebarProps> = ({
  history,
  location,
  match,
  search,
  setSearch,
}) => {
  return (
    <div>
      <CategorySelector history={history} location={location} match={match} />
      <div
        css={css`
          margin: 20px;
          padding: 15px;
          border-top: 3px lightsalmon solid;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 5px 0px;
        `}
      >
        <label
          css={css`
            font-size: 25px;
          `}
        >
          Search
        </label>
        <div>
          <form>
            <input disabled />
            <button>Search</button>
          </form>
        </div>
      </div>
      <div
        css={css`
          margin: 20px;
          padding: 15px;
          border-top: 3px lightsalmon solid;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 5px 0px;
        `}
      >
        <label
          css={css`
            font-size: 25px;
          `}
        >
          Filters
        </label>
        <div>Future Feature...</div>
      </div>
    </div>
  );
};

export default Sidebar;
