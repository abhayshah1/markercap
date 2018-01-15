import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UpgradeLineChart from './UpgradeLineChart';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<UpgradeLineChart />, document.getElementById('root'));
registerServiceWorker();
