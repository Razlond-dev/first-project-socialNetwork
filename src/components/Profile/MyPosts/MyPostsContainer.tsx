import React from 'react';
import { actions } from '../../../redux/Profile_reducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { appStateType } from '../../../redux/redux-store';



let mapStateToProps = (state: appStateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch: (arg0: { type: "ADD-POST" | "UPDATE-NEW-POST-TEXT"; newPost?: string; newText?: string; }) => void) => {
  return {
    addPost: (newPost: string) => { dispatch(actions.addPostCreator(newPost)) },
    updateNewPostText: (newText: string) => { dispatch(actions.updateNewPostTextCreator(newText)) }
  }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
