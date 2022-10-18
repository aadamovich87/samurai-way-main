import {rerenderEntireTree} from "../render";

export type StateIndexPropsType = {
    ProfilePage: ProfilePageType
    DialogsPage: DialogsPageType
    Sidebar: SidebarType
}
export type ProfilePageType={
    postData: Array<PostDataType>
}
export type DialogsPageType={
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}
export type SidebarType={
}

export type PostDataType = {
    id: string,
    message: string,
    likesCount: number,
}
export type DialogsDataType = {
    id: string,
    name: string,
}
export type MessagesDataType = {
    id: string,
    message: string,
}

export let StateIndex:StateIndexPropsType= {
    ProfilePage: {
        postData: [
            {id: '1', message: 'Hi, how are you?', likesCount: 12},
            {id: '2', message: 'My first post', likesCount: 24},
            {id: '3', message: 'We are the champion', likesCount: 26},
            {id: '4', message: 'My Friends', likesCount: 80}
        ]
    },
    DialogsPage: {
        dialogsData: [
            {id: '1', name: 'Leha'},
            {id: '2', name: 'Dasha'},
            {id: '3', name: 'Sasha'},
            {id: '4', name: 'Sveta'},
            {id: '5', name: 'Andrei'},
            {id: '6', name: 'Natasha'},
        ],
        messagesData: [
            {id: '1', message: 'Hi'},
            {id: '2', message: 'Who are you'},
            {id: '3', message: 'I am your friend'},
            {id: '4', message: 'Yo'},
            {id: '5', message: 'Andrei'},
            {id: '6', message: 'Natasha'},
        ]
    },
    Sidebar:{}
   }

   export const addPost =(text:string)=>{
    let newPost={
        id: '5', message: text, likesCount: 56
    }
       StateIndex.ProfilePage.postData.push(newPost)
       rerenderEntireTree(StateIndex)
   }