import { connect } from 'react-redux';

import UploadForm from './upload_form';
import { updateUser } from '../../util/user_api_util';
import { fetchRestaurant } from '../../actions/restaurant_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps, null)(UploadForm);
