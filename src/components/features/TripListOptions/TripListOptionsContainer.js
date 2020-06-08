import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeDurationData, addCheckedTag, removeCheckedTag } from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeDurationData: (type, value) => dispatch(changeDurationData({type, value})),

  addingTag: tag => dispatch(addCheckedTag(tag)),
  removingTag: tag => dispatch(removeCheckedTag(tag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);