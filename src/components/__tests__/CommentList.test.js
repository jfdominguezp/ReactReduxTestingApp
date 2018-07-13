import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2']
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it ('creates one LI per comment', () => {
  expect(wrapped.find('li')).toHaveLength(2);
});

it ('shows the text for each comment', () => {
  const text = wrapped.render().text();
  expect(text).toContain('Comment 1');
  expect(text).toContain('Comment 2');
});