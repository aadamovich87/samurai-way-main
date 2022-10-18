import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, StateIndexPropsType} from './redux/State'

// // export type rerenderTypeProps={
// //     StateIndex:StateIndexPropsType
// }
export let rerenderEntireTree=(StateIndex:StateIndexPropsType)=> {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>
            <App StateIndex={StateIndex}
                 addPost={addPost}/>
        </React.StrictMode>
    );
}

