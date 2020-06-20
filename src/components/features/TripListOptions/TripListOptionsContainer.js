import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeDurationData, addCheckedTag, removeCheckedTag, changeSelectedRegion} from '../../../redux/filtersRedux';
import {getAllRegions} from '../../../redux/regionsRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
  regions: getAllRegions(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeDurationData: (type, value) => dispatch(changeDurationData({type, value})),
  addingTag: tag => dispatch(addCheckedTag(tag)),
  removingTag: tag => dispatch(removeCheckedTag(tag)),
  selectRegion: region => dispatch(changeSelectedRegion(region)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
