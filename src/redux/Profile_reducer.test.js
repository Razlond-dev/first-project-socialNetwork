import ProfileReducer, { addPostCreator, deletePost } from './Profile_reducer'
import React from 'react';
import { render } from '@testing-library/react';
import profileReducer from './Profile_reducer';

let state = {
  posts: [
    { id: 1, message: 'Hey, how are you?', likesCount: 9 },
    { id: 2, message: 'You are the best!', likesCount: 240 },
    { id: 3, message: 'Hey, how are you?Good?', likesCount: 1 },
    { id: 4, message: 'Hey, how are you?Bad?', likesCount: 5 },
    { id: 5, message: 'I am good!', likesCount: 20 },
    { id: 6, message: 'Hey, I am new.', likesCount: 10 },
  ]
}

test('new post should be added', () => {
  // 1. Test data
  let action = addPostCreator('New post text')

  // 2. action
  let newState = profileReducer(state, action)

  // 3. expected result
  expect(newState.posts.length).toBe(state.posts.length + 1)
});

test('new post text is correct', () => {
  // 1. Test data
  let action = addPostCreator('Hello, this is new post text')

  // 2. action
  let newState = profileReducer(state, action)

  // 3. expected result
  expect(newState.posts[(newState.posts.length) - 1].message).toBe('Hello, this is new post text')
});

test('decremente length of posts after deliting by 1', () => {
  // 1. Test data
  let action = deletePost(1)

  // 2. action
  let newState = profileReducer(state, action)

  // 3. expected result
  expect(newState.posts.length).toBe(5)
});

test(`length of posts after deliting shouldn't be changed if id is wrong`, () => {
  // 1. Test data
  let action = deletePost(1000)

  // 2. action
  let newState = profileReducer(state, action)

  // 3. expected result
  expect(newState.posts.length).toBe(state.posts.length)
});








