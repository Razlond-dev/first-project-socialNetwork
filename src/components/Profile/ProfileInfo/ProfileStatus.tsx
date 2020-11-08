import React, { ChangeEvent } from 'react';

type propsType = {
  status: string
  updateUserStatus: (newStatus: string) => void
}

type stateType = {
  editMode: boolean
  status: string
}

class ProfileStatus extends React.Component<propsType, stateType> {
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
  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value
    })

  }
  componentDidUpdate(prevProps: propsType, prevState: stateType) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
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