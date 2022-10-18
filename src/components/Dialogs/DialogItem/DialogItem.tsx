import React from 'react';
import s from './../Dialos.module.css';
import {NavLink} from "react-router-dom";

type DialogsItemProps = {
    name: string;
    id: string;
}

export const DialogsItem = (props: DialogsItemProps) => {
    let path = '/dialog/' + props.id;
    return (
        <div className={`${s.item} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
