import React from "react";
import s from './ProfileInfo.module.css';

export const Profileinfo = ()=> {
    return (
        <div>
            <div className={s.content}>
                <img src='https://puzzleit.ru/files/puzzles/220/219713/_original.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}