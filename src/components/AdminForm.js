import React from 'react'

const AdminForm = ({
    id : key,
    majRecette,
    recettes,
    supprimerRecette
}) => {
    const recette = recettes[key]

    const handleChange = (event , key) => {
      const { name, value } = event.target
      const recette = recettes[key]
      recette[name] = value
      majRecette(key, recette)
    }

  return (
    <div className="card">
        <form className="admin-form">

            <input value={recette.nom} onChange={e => handleChange(e, key)} name='nom' placeholder="Nom de la recette" type="text" />

            <input value={recette.image} onChange={e => handleChange(e, key)} name='image' placeholder="Adresse de l'imahe" type="text" />

            <textarea value={recette.ingredients} onChange={e => handleChange(e, key)} name="ingredients" placeholder="Liste des ingrédients" rows="3"></textarea>

            <textarea value={recette.instructions} onChange={e => handleChange(e, key)} name="instructions" placeholder="Liste des instructions" rows="15"></textarea>

        </form>
        <button onClick = {() => supprimerRecette(key)}>Supprimer</button>
    </div>
  )
}
 export default AdminForm
