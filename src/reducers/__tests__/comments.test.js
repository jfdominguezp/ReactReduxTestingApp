import commentsReduce from 'reducers/comments';
import { SAVE_COMMENT } from 'actions';

it ('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New comment'
  }
});