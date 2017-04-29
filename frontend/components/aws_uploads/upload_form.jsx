import React from 'react';
import { hashHistory } from 'react-router';

import { updateUser } from '../../util/user_api_util';
import { updateRestaurant } from '../../util/restaurant_api_util';

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
    let id = this.props.params.userId;
    let update = updateUser;
    let paramsId = "user[id]";
    let paramsImage = "user[avatar]";

    if (this.props.params.restaurantId) {
      id = this.props.params.restaurantId;
      update = updateRestaurant;
      paramsId = "restaurant[id]";
      paramsImage = "restaurant[image]";
    }

    formData.append(paramsId, id);
    formData.append(paramsImage, this.state.imageFile);

    update(id, formData, this.goBack);
  }

  goBack() {
    let id = this.props.params.userId || this.props.params.restaurantId;
    let path = "users";

    if (this.props.params.restaurantId) {
      path = "restaurants"
    }

    return hashHistory.push(`/${path}/${id}`);
  }

  render() {
    if (this.props.params.userId) {
      if (this.props.currentUser.id !== parseInt(this.props.params.userId)) {
        return(<div>Sorry, you can't upload photos for someone else!</div>)
      }
    }

    let header = "Add a new profile picture";
    if (this.props.params.restaurantId) {
      header = "Add a new restaurant photo";
    }

    return(
      <div className="pp-upload-form">
        <h2>{ header }</h2>
        <form onSubmit={ this.uploadPic }>
          <section>
            <input type="file" onChange={ this.updateFile} />
            <img src={ this.state.imageUrl } />
          </section>
          <button>Upload Photo</button>
        </form>
      </div>
    )
  }
}

export default AvatarUploadForm;
