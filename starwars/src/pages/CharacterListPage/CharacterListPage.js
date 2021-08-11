import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../../constants/urls'
import styled from "styled-components"

const characterCard = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
  &:hover {
    cursor: pointer;
    background-color: lightblue;
  }
`

export default class CharacterListPage extends React.Component{
    state = {
        charactersList: []
    }
    
    componentDidMount(){
        this.getCharacterList()
    }

    getCharacterList = () => {
        axios.get(`${BASE_URL}/people`)
        .then((res) => this.setState ({charactersList: res.data.results}))
        .catch((err) => console.log(err.response))
    }
    
    render() {
        const characters = this.state.charactersList.map((person) => {
            return <characterCard key={person.url}>{person.name}</characterCard>
        })

        console.log(this.state.charactersList)
        return <div>{characters}</div>
    }
} 