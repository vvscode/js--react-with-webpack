import React, {Component} from 'react';
import AltContainer from 'alt/AltContainer';
import Lanes from './Lanes.jsx';
import LanesActions from '../actions/LaneActions';
import LanesStore from '../stores/LaneStore';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd/modules/backends/HTML5';

@DragDropContext(HTML5Backend)
export default class App extends React.Component {
  render() {
    return (
      <div>
        <button className="add-lane" onClick={this.addItem}>+</button>
        <AltContainer
          stores={[LanesStore]}
          inject={
            {items: () => LanesStore.getState().lanes || []}
          }
          >
          <Lanes />
          </AltContainer>
        </div>
    );
  }

  addItem() {
    LanesActions.create({name: "New Lane"});
  }
}