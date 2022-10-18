import React from 'react';
import s from './Dialos.module.css';
import {DialogsItem} from "./DialogItem/DialogItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {DialogsDataType, DialogsPageType, MessagesDataType} from "../../redux/State";

type DialogsPropsType={
    dialogsData: Array<DialogsDataType>
    messagesData:Array<MessagesDataType>


}

const Dialogs = (props:DialogsPropsType) => {
    let newDialogsData=props.dialogsData.map(d=><DialogsItem name={d.name} id={d.id} />)
    let newMessagesData=props.messagesData.map(m=><MessagesItem message={m.message}/>)
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {newDialogsData}
            </div>
            <div className={s.messages}>
                {newMessagesData}
            </div>
        </div>

    );
}

export default Dialogs;