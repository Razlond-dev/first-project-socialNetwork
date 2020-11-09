import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validation/validators';
import { formControl } from '../../common/FormControls/formControls';
import { postType } from '../../../types/types';

const Textarea = formControl('textarea')

const MyPostsForm: React.FC<InjectedFormProps<AddPostFormValuesType, PostFormOwnProps> & PostFormOwnProps> = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={'newPost'} value={props.newPostText} placeholder='Post something' component={Textarea} validate={required} />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  )

}

const MyPostsReduxForm = reduxForm<AddPostFormValuesType, PostFormOwnProps>({
  form: 'newPost'
})(MyPostsForm)

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = (props) => {
  let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likesCount} />)

  let onAddPost = (values: AddPostFormValuesType) => {
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

// types
export type MapPropsType = {
  posts: Array<postType>

}
export type DispatchPropsType = {
  addPost: (newPostText: string) => void
}
type AddPostFormValuesType = {
  newPost: string
}
type PostFormOwnProps = {
  newPostText?: string
}