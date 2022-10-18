import React, {ChangeEvent, RefObject, useState} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {addPost, PostDataType} from "../../../redux/State";

type MyPostsPropsType = {
    postData: Array<PostDataType>
    addPost: (text: string) => void
}
export const MyPosts = (props: MyPostsPropsType) => {
    let newPostData = props.postData.map(p => <Post massage={p.message} likesCount={p.likesCount}/>)
    // const [newMessage,setNewMessage] = useState('')
    // const onchangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     // let text = e.currentTarget.value
    //     // setNewMessage(text)
    // }
    let newMessage: RefObject<HTMLTextAreaElement> = React.createRef()
    let addPost = () => {
        let text = newMessage.current?.value
        text && props.addPost(text)

        // props.addPost(newMessage)
        // setNewMessage('')
    }
    return (
        <div className={s.descriptionBlock}>
            <div>
                <h3>My post</h3>
            </div>
            <textarea ref={newMessage}></textarea>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                {newPostData}
            </div>
        </div>
    )
}