import React from 'react';
import { hashHistory } from 'react-router';

import { updateUser } from '../../util/user_api_util';

class AvatarUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageUrl: null, imageFile: null }
    this.updateFile = this.updateFile.bind(this);
    this.uploadPic = this.uploadPic.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  uploadPic(e) {
    const formData = new FormData();
    formData.append("user[id]", this.props.params.userId);
    formData.append("user[avatar]", this.state.imageFile);

    updateUser(this.props.params.userId, formData, this.goBack);
  }

  goBack() {
    hashHistory.push(`/users/${this.props.params.userId}`)
  }

  render() {
    if (this.props.currentUser.id !== parseInt(this.props.params.userId)) {
      return(
        <div>Sorry, you can't upload photos for someone else!</div>
      )
    }

    return(
      <div className="pp-upload-form">
        <h2>Add a new profile picture</h2>
        <form onSubmit={ this.uploadPic }>
          <input type="file" onChange={ this.updateFile} />
          <img src={ this.state.imageUrl } />
          <button>Upload Photo</button>
        </form>
      </div>
    )
  }
}

export default AvatarUploadForm;
