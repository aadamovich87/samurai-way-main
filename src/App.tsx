import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StateIndexPropsType} from "./redux/State";


export type AppPropsType = {
    StateIndex: StateIndexPropsType
    addPost:(text:string)=>void
}
function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs dialogsData={props.StateIndex.DialogsPage.dialogsData} messagesData={props.StateIndex.DialogsPage.messagesData} />}/>
                        <Route path='profile' element={<Profile postData={props.StateIndex.ProfilePage.postData} addPost={props.addPost}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
