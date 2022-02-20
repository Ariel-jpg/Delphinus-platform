import { connect } from 'react-redux';
import HomeScreen from '../Screens/HomeScreen';
import { homeActions } from '../home.actions';

const mapStateToProps = (state) => ({
    a: state.homeReducer.number
});

const mapDispatchToProps = dispatch => ({
    disptach_a: () => dispatch(homeActions.action())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);