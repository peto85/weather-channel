import React from 'react';
import Loader from 'react-loader';

import HistoryTable from '../HistoryTable/HistoryTable'
import styles from './styles';

const Channel = (props) => (
  <div className={styles.container}>
    <Loader loaded={!props.loading}>
      <div>
        <span className={styles.temperature}>{props.temperature? (props.temperature + 'º'): null }</span>
        <span className={styles.location}>{props.name}</span>
      </div>
      <div>
        <HistoryTable data={ props.history || [] } />
      </div>
    </Loader>
  </div>
)

export default Channel;
