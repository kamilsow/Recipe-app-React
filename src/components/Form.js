import React, { useState } from 'react'
import '../css/form.css'

const Form = ({ getRecipes }) => {

    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        const filter = document.getElementsByClassName('filter')[0]
        if (filter.style.display === 'flex') {
            filter.style.display = 'none'
            setIsActive(false)
        } else {
            filter.style.display = 'flex'
            setIsActive(true)
        }
    }
    return(
        <form onSubmit={getRecipes}>
            <label>
                What are you going to cook today?
                <input type='text' name='recipeName'/>
            </label>
            <div className='filter'>
                <div className='input-text'>
                    <label>
                        Number of recipes
                        <input type='text' name='hits'/>
                    </label>
                    <label>
                        Calories
                        <input type='text' name='calories'/>
                        (range)
                    </label>
                    <label>
                        Maximum number of ingredients
                        <input type='text' name='ingr'/>
                    </label>
                    <label>
                        Excluded ingredient
                        <input type='text' name='excluded'/>
                    </label>
                    <label>
                        Diet
                        <select name="diet" defaultValue=''>
                            <option value="">None</option>
                            <option value="balanced">Balanced</option>
                            <option value="high-protein">High protein</option>
                            <option value="high-fiber">High fiber</option>
                            <option value="low-fat">Low fat</option>
                            <option value="low-carb">Low carb</option>
                            <option value="low-sodium">Low sodium</option>
                        </select>
                    </label>
                </div>
                <div className='input-checkbox'>
                    <label>
                        <input type="checkbox" value='alcohol-free' name='health'/>
                        Alcohol-free
                    </label>
                    <label>
                        <input type="checkbox" value='peanut-free' name='health'/>
                        Peanut-free
                    </label>
                    <label>
                        <input type="checkbox" value='tree-nut-free' name='health'/>
                        Tree nuts free
                    </label>
                    <label>
                        <input type="checkbox" value='sugar-conscious' name='health'/>
                        Sugar conscious
                    </label>
                    <label>
                        <input type="checkbox" value='vegetarian' name='health'/>
                    Vegetarian
                    </label>
                    <label>
                        <input type="checkbox" value='vegan' name='health'/>
                        Vegan
                    </label>
                </div>
            </div>
            <div className='buttons'>
                <button type='button' onClick={handleClick}>{isActive ? 'Hide filter' : 'Show filter'}<i className="icon-filter" /></button>
                <button>Search<i className="icon-search" /></button>
            </div>
        </form>
    )
}

export default Form