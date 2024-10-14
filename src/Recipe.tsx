import React from 'react';

interface IRecipeProps {
    recipeData: IRecipe;
}

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

const Recipe: React.FC<IRecipeProps> = ({ recipeData }) => {
    return (
        <div className="recipe-card" style={{border : '1px solid rgb(207, 207, 207)',borderRadius : '10px' , padding : '1rem',marginTop : '1rem'}}>
            <h2>{recipeData.name}</h2>
            <img src={recipeData.image} alt={recipeData.name} className="recipe-image" />
            <div className="recipe-details">
                <p><strong>Cuisine:</strong> {recipeData.cuisine}</p>
                <p><strong>Difficulty:</strong> {recipeData.difficulty}</p>
                <p><strong>Prep Time:</strong> {recipeData.prepTimeMinutes} mins</p>
                <p><strong>Cook Time:</strong> {recipeData.cookTimeMinutes} mins</p>
                <p><strong>Servings:</strong> {recipeData.servings}</p>
                <p><strong>Calories Per Serving:</strong> {recipeData.caloriesPerServing} kcal</p>
                <p><strong>Rating:</strong> {recipeData.rating} ({recipeData.reviewCount} reviews)</p>
            </div>
            <div className="recipe-tags">
                <strong>Tags:</strong> {recipeData.tags.join(', ')}
            </div>
            <h3>Ingredients</h3>
            <ul>
                {recipeData.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions</h3>
            <ol>
                {recipeData.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
        </div>
    );
};

export default Recipe;
