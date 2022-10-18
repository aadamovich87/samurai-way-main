import React from "react";
import s from './Post.module.css';


type PostMassageType = {
    massage: string | ''
    likesCount: number
}
export const Post = (props: PostMassageType) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src='https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'/>
                {props.massage}
                <div>
                        <span>
                            {props.likesCount}
                        </span>
                </div>
            </div>
        </div>
    )
}

/*
<div className={s.item}>
    <img src= 'https://vraki.net/sites/default/files/inline/images/1_6.png'/>
    post 2</div>
<div className={s.item}>
    <img src= 'https://yt3.ggpht.com/ytc/AKedOLTi2hpsIa6_aWxk2qrL8MYoFONuAoOtlth2kLsuVw=s900-c-k-c0x00ffffff-no-rj'/>
    post 3</div>
<div className={s.item}>
    <img src= 'https://infosmi.net/wp-content/uploads/2021/06/11-12.jpg'/>
    post 4</div>*/
