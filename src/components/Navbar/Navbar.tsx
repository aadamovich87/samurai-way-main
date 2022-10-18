import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return (
        <div className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to = '/Profile' className = {navData=> navData.isActive ? s.active : s.item }>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs'className = {navData=> navData.isActive ? s.active : s.item }>Message </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/newsNavLink' className = {navData=> navData.isActive ? s.active : s.item }>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className = {navData=> navData.isActive ? s.active : s.item }>Music </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' className = {navData=> navData.isActive ? s.active : s.item }>Settings </NavLink>
            </div>
        </div>
    )
}