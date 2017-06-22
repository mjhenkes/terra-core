import React from 'react';
import Collapse from 'terra-collapse/src/Collapse';

class OpenCloseEventCollapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timesOpened: 0,
      timesClosed: 0,
    };

    this.handleOnOpen = this.handleOnOpen.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);
  }

  handleOnOpen() {
    this.setState(prevState => ({ timesOpened: prevState.timesOpened + 1 }));
  }

  handleOnClose() {
    this.setState(prevState => ({ timesClosed: prevState.timesClosed + 1 }));
  }

  render() {
    return (
      <div>
        <div id="on-open-event">
          <h3>Times Opened: {this.state.timesOpened}</h3>
          <h3>Times Closed: {this.state.timesClosed}</h3>
        </div>
        <Collapse closedButtonText="Collapse" onOpen={this.handleOnOpen} onClose={this.handleOnClose}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Collapse>
      </div>
    );
  }
}

export default OpenCloseEventCollapse;