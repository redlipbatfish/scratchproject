/**
 * ************************************
 *
 * @module  MarketsContainer
 * @author
 * @date
 * @description stateful component that renders MarketCreator and MarketsDisplay
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
import MarketCreator from '../components/MarketCreator.jsx';
import MarketsDisplay from '../components/MarketsDisplay.jsx';
import store from '../store.js';
import marketsReducer from '../reducers/marketsReducer.js';


const mapStateToProps = state => {
  return {
    totalMarkets: state.markets.totalMarkets,
    totalCards: state.markets.totalCards,
    marketList: state.markets.marketList,
    lastMarketId: state.markets.lastMarketId,
    newLocation: state.markets.newLocation,   
  };
};

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  addMarket: () => dispatch(actions.addMarketActionCreator()),
  setNewLocation: (newLocation) => dispatch(actions.setNewLocationActionCreator(newLocation)),  // WILL NEED A PAYLOAD
  addCard: (marketId) => dispatch(actions.addCardActionCreator(marketId)),
  deleteCard: (marketId) => dispatch(actions.deleteCardActionCreator(marketId))
});

class MarketsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const theState = store.getState();
    // console.log('this.props', JSON.stringify(theState));
    // console.log("dsadf")
    // console.log(theState)
    return(
      <div className="innerbox">
        <MarketCreator totalMarkets = {this.props.totalMarkets} marketList = {this.props.marketList} addMarket = {this.props.addMarket} setNewLocation= {this.props.setNewLocation}  />
        <MarketsDisplay marketList = {this.props.marketList} addCard = {this.props.addCard} deleteCard ={this.props.deleteCard} />
      </div>
    );
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketsContainer);
