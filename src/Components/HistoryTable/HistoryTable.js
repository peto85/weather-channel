import React from 'react';

import { Table } from 'react-bootstrap';

const HistoryTable = (props) => {

  const rows = props.data.map((item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item.temperature}º</td>
      <td>{item.time}</td>
    </tr>
  ));

  return (
    <div>
      <Table striped condensed>
        <thead>
          <tr>
            <th>#</th>
            <th>Temperature</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          { rows }
        </tbody>
      </Table>
    </div>
  )
}

export default HistoryTable;
