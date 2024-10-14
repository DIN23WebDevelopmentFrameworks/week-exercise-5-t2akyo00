import React from 'react';

interface IRecipeTagProps {
    tagName: string;
    onSelectTag: (tagName: string) => void;
}

const RecipeTag: React.FC<IRecipeTagProps> = ({ tagName, onSelectTag }) => {
    return (
        <div style={{marginTop : '1rem'}}>
            <button onClick={() => onSelectTag(tagName)} style={{width: '100%'}}>
                {tagName}
            </button>
        </div>
        
    );
};

export default RecipeTag;
