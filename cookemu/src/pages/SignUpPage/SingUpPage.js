import React from 'react'
import {LogoImage, ScreenContainer,} from "./styled"
import logo from "../../assets/logo.png"
import SingUpForm from './SingUpForm'

const SingUpPage = () => {
    return (
        <ScreenContainer>
        <LogoImage src={logo}/>
        <SingUpForm/>
        </ScreenContainer>
    )
}

export default SingUpPage