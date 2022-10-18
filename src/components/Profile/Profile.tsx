import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {Profileinfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../redux/State";

type ProfilePropsType={
    postData: Array<PostDataType>
    addPost:(text:string)=>void
    }
export const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <Profileinfo/>
            <MyPosts postData={props.postData} addPost={props.addPost}/>
        </div>
    )
}