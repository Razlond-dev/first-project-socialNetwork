import React from 'react';
import { toggleIsFetching } from '../../../redux/Users_reducer';
import Preloader from '../../common/preloader/preloader';
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  deActivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateUserStatus(this.state.status)
  }
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })

  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.state
      })
    }
  }

  render() {
    return <>
      {this.state.editMode
        ? <div>
          <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} type="text" value={this.state.status} />
        </div>
        : <div>
          <span onClick={this.activateEditMode}>{this.props.status || 'status is empty'}</span>
        </div>
      }

    </>

  }
}






export default ProfileStatus