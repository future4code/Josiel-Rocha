import React from 'react'
import CharacterDetailPage from './pages/CharacterDetailPage/CharacterDatailPage'
import CharacterListPage from './pages/CharacterListPage/CharacterListPage'

export default class App extends React.Component{
  state = {
    currentScreen: "List"
  }

  selectPage = () => {
    switch (this.state.currentScreen){
      case "List":
        return <CharacterListPage />
      case "Detail":
        return <CharacterDetailPage />
      default:
        return <CharacterListPage />
    }
  }

  render(){
    return (
      <div>
        {this.selectPage()}
      </div>
    )
  }
}


