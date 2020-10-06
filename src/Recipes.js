import React from 'react'

import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) =>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p className={style.calories} > <strong>Total Calories {Math.ceil(calories)}</strong> </p>
            <div className={style.list__recipes}>
                <ol className="list__recipe">
                {ingredients.map(ingredients =>(
                    <li> {ingredients.text} </li>
                ))}
                </ol>

            </div>
            <img className={style.image} src={image} alt=""/>
        </div>
    )
}

export default Recipe