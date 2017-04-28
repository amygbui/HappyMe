import React from 'react';
import { hashHistory } from 'react-router';

import { updateRestaurant } from '../../util/restaurant_api_util';

class RestaurantUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageUrl: null, imageFile: null }
    this.updateFile = this.updateFile.bind(this);
    this.uploadPic = this.uploadPic.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    const restaurantId = this.props.params.restaurantId
    this.props.fetchRestaurant(restaurantId)
  }

  componentWillReceiveProps(nextProps) {
    const restaurantId = this.props.params.restaurantId
    const newId = nextProps.params.restaurantId
    if (restaurantId !== newId) {
      this.props.fetchRestaurant(newId)
    }
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
    formData.append("restaurant[id]", this.props.params.restaurantId);
    formData.append("restaurant[image]", this.state.imageFile);

    updateRestaurant(this.props.params.restaurantId, formData, this.goBack);
  }

  goBack() {
    return hashHistory.push(`/restaurants/${this.props.params.restaurantId}`)
  }

  render() {
    return(
      <div className="pp-upload-form">
        <h2>Add a new restaurant photo</h2>
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

export default RestaurantUploadForm;
