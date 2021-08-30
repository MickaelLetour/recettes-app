import React from 'react'
import propTypes from 'prop-types'
// CSS
import './App.css'

import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'

import withFirebase from './hoc/withFirebase'

import ColorContext from './components/Color'

const App = ({ 
  recettes,
  supprimerRecette,
  ajouterRecette,
  majRecette,
  match,
  chargerExemple }) => {
  const cards = Object.keys(recettes)
      .map(key => <Card key={key} details={recettes[key]}/>)

  return (
    <ColorContext>
      <div className='box'>
        <Header pseudo= {match.params.pseudo}/>
        <div className='cards'>
          {cards}
        </div>
        <Admin 
          pseudo={match.params.pseudo}
          supprimerRecette={supprimerRecette}
          recettes={recettes}
          ajouterRecette={ajouterRecette} 
          majRecette={majRecette} 
          chargerExemple={chargerExemple} />
      </div>
    </ColorContext>
  )
}

App.propTypes = {
  match: propTypes.object.isRequired,
  recettes: propTypes.object.isRequired,
  supprimerRecette: propTypes.func.isRequired,
  ajouterRecette: propTypes.func.isRequired,
  majRecette: propTypes.func.isRequired,
  chargerExemple: propTypes.func.isRequired
}

const WrappedComponent = withFirebase(App)

export default WrappedComponent
