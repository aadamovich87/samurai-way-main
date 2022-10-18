import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from "./render";
import {StateIndex} from "./redux/State";

rerenderEntireTree(StateIndex)
reportWebVitals();
