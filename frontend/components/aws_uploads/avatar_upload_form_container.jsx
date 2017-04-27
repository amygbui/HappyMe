import { connect } from 'react-redux';

import AvatarUploadForm from './avatar_upload_form';
import { updateUser } from '../../util/user_api_util';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateUser: (user, callback) => dispatch(updateUser(user, callback))
});

export default connect(mapStateToProps, mapDispatchToProps)(AvatarUploadForm);
