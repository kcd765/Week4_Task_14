require('file-loader?name=[name].[ext]!./index.html');
import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from 'recoil';

import App from './App';

ReactDOM.render(
    <RecoilRoot>
    <App />
    </RecoilRoot>, 
    document.getElementById('app'));
