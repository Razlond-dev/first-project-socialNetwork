import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/Profile_reducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPost) => { dispatch(addPostCreator(newPost)) },
    updateNewPostText: (newText) => { dispatch(updateNewPostTextCreator(newText)) }
  }
}




let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)






export default MyPostsContainer
