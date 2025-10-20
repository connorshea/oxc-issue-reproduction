import React from 'react';
import ReactDOM from 'react-dom/client';

import { Row } from './Row.jsx'

ReactDOM.createRoot( 
  document.querySelector('#root')
).render(<Row arrayOfRecords={[{ id: 1 }, { id: 3 }]} fooKind="baz" />)
