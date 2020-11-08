import React from 'react';
import { actions } from '../../../redux/Profile_reducer'
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
    addPost: (newPost) => { dispatch(actions.addPostCreator(newPost)) },
    updateNewPostText: (newText) => { dispatch(actions.updateNewPostTextCreator(newText)) }
  }
}




let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)






export default MyPostsContainer
