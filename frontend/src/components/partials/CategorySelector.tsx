import React, { FC, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { CategoryGetResponse } from '../functional/api-interfaces';
import { getCategories } from '../functional/api-client';
import { Button } from 'react-bootstrap';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export const CategorySelector: FC<RouteComponentProps> = ({ history }) => {
  const [categories, setCategories] = useState<CategoryGetResponse[] | null>(
    null,
  );
  useEffect(() => {
    const getCategoryList = async () => {
      const allCategories = await getCategories();
      setCategories(allCategories);
    };
    getCategoryList();
  }, []);
  const selectCategory = (category: string) => {
    history.replace(`/Category/${category}`);
    window.location.reload();
  };
  return (
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
        Categories
      </label>
      {categories &&
        categories.map((category) => (
          <div
            css={css`
              padding: 5px;
            `}
          >
            <Button
              key={category.id}
              onClick={() => {
                selectCategory(category.short);
              }}
            >
              {category.name}
            </Button>
          </div>
        ))}
    </div>
  );
};

export default CategorySelector;
