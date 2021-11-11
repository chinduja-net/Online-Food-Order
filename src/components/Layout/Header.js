import React from 'react'
import mealsImage from '../../assets/meals1.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

export const Header = (props) => {
    return (
        <>
        <header className = {classes.header}>
            <h1>SWIGGY</h1>
            <HeaderCartButton onClick = {props.onShowcart}></HeaderCartButton>
        </header>
        <div className = {classes['main-image']}>
            <img src={mealsImage} alt = "food"/>
        </div>
            
        </>
    )
}
