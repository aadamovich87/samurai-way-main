import React from 'react';
import s from './../Dialos.module.css';


type MessagesItemProps = {
    message: string;
}
export const MessagesItem = (props: MessagesItemProps) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}