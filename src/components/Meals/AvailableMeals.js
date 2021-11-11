import React from 'react'
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';


const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Pizza Margherita',
        description: 'Fresh tomatoes, Mozarella , basil',
        price: 99
    },
    {
        id: 'm2',
        name: 'pizza Pepperoni',
        description: 'Salami, beef with paprika',
        price: 109,
    },
    {
        id: 'm3',
        name: 'Hawaiian Pizza',
        description: 'Pineapple and bacon',
        price: 109,
    },
    {
        id: 'm4',
        name: 'Vego Pizza',
        description: 'Pesto, paprika, mushroom',
        price: 129,
    },
];

const AvailableMeals = () => {
    return (
        <section className={classes.meals}>

            <Card>
                <ul>
                    {
                        DUMMY_MEALS.map(meal => <MealItem
                            id = {meal.id}
                             key={meal.id} 
                             
                             name={meal.name} 
                             description={meal.description} 
                             price={meal.price} />)
                    }


                </ul>

            </Card>


        </section>
    )
}

export default AvailableMeals
