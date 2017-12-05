import React, { Component } from 'react';
import { Panel, Grid, Row, Col, Button, Alert } from 'react-bootstrap';

import Channel from './../Channel/Channel';
import styles from './styles';

//const TIMER_INTERVAL = 3 * 60 * 1000; // 3 minutes
const TIMER_INTERVAL = 5 * 1000; // 5 seconds

class App extends Component {

  render() {
    const button = (
      <Button
        bsStyle="primary"
        disabled={this.props.loading}
        onClick={!this.props.loading ? this.props.updateWeather : null}
        block
      >
        {this.props.loading? 'LOADING...' : 'UPDATE WHEATER'}
      </Button>
    );

    const channels = this.props.locations.map((location, key) => (
      <Col key={key} xs={6} md={3}>
        <Channel {...location} loading={this.props.loading}/>
      </Col>
    ));

    const alert = (
      <Alert bsStyle="danger">{this.props.error}</Alert>
    );

    return (
      <Panel>
        <h1 className={styles.header}>Weather channel</h1>
        { this.props.error? alert : null }
        <Grid>
          <Row>
            { channels }
          </Row>
          <Row className={styles.row}>
            <Col xs={8} xsOffset={2} md={4} mdOffset={4}>
              { button }
            </Col>
          </Row>
        </Grid>
      </Panel>
    );
  }

  componentDidUpdate() {
    // drop previous timer
    if (this._timer) {
      clearTimeout(this._timer);
    }

    // start a new timer unless there was an error or we loading results
    if (!this.props.loading && !this.props.error) {
      this._timer = setTimeout(this.props.updateWeather, TIMER_INTERVAL);
    }
  }

}

export default App;
