import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/Profile_reducer'
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validation/validators';
import { formControl } from '../../common/FormControls/formControls';

const Textarea = formControl('textarea')
const maxLength10 = maxLengthCreator(10)

const MyPostsForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={'newPost'} value={props.newPostText} placeholder='Post something' component={Textarea} validate={required, maxLength10} />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  )

}

const MyPostsReduxForm = reduxForm({
  form: 'newPost'
})(MyPostsForm)

const MyPosts = (props) => {
console.log('rendered');
  let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likesCount} />)

  let onAddPost = (values) => {
    console.log(values);
    props.addPost(values.newPost)
  }

  return <div className={s.postsBlock}>
    <div>
      <h3>My posts</h3>
      <MyPostsReduxForm onSubmit={onAddPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  </div>
}

export default MyPosts
