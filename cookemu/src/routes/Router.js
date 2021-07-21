import React from 'react'
import {BrowserRouter,  Switch, Route} from "react-router-dom"
import AddRecipesPage from '../pages/AddRecipesPage/AddRecipesPage'
import LoginPage from '../pages/LoginPage/loginPage'
import RecipeDatailPage from '../pages/RecipeDetailPage/RecipeDataiPage'
import RecipesListPage from '../pages/RecipesListPage/RecipesListPage'
import SingUpPage from "../pages/SignUpPage/SingUpPage"
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Header from '../components/Header/Header'

const Router = () => {
    return(
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact path="/">
                    <RecipesListPage/>
                </Route>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
                <Route exact path="/Cadastro">
                    <SingUpPage/>
                </Route>
                <Route exact path="/adicionar-receita">
                    <AddRecipesPage/>
                </Route>
                <Route exact path="/detalhe/:id">
                    <RecipeDatailPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router