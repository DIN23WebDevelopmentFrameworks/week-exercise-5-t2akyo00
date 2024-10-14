import React from 'react';
import RecipeTag from './RecipeTag';

interface IRecipeTagListProps {
    tagList: string[];
    onSelectTag: (tagName: string) => void;
}

const RecipeTagList: React.FC<IRecipeTagListProps> = ({ tagList, onSelectTag }) => {
    return (
         
             
              tagList.map((tag) => (
                      <RecipeTag key={tag} tagName={tag} onSelectTag={onSelectTag} />
              ))
         
        
        
    );
};

export default RecipeTagList;
