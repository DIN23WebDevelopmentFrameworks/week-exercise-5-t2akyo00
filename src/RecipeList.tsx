import React from 'react';
import Recipe from './Recipe';
interface IRecipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}
interface IRecipeListProps {
    recipes: IRecipe[];
}

const RecipeList: React.FC<IRecipeListProps> = ({ recipes }) => {
    return (
      <div>
         <button onClick={()=>window.location.reload()}>Back</button>
          {recipes.map((item,index) => (
            <Recipe recipeData={item} key={index}/>
          ))}
      </div>
    );
};

export default RecipeList;
