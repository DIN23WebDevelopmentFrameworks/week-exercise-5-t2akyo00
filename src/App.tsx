import RecipeList from "./RecipeList";
import RecipeTagList from "./RecipeTagList";
import { useEffect, useState } from "react";
const App = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [recipes,setRecipes] = useState([])
  const getData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/recipes/tags");
      const data = await response.json();
      console.log("Fetched Data:", data);
      setTags(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  const onSelectTag = async(tagName : string) => {
     try {
       const response = await fetch('https://dummyjson.com/recipes/tag/'+tagName,{
        method : 'GET'
       })
       const data = await response.json()
       console.log(data.recipes);
       setRecipes(data.recipes)
     } catch (error) {
        console.log(error);
     }
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
        <h1>ACME Recipe O'Master</h1>
        <div>
          {recipes.length === 0 ? <RecipeTagList tagList={tags} onSelectTag={onSelectTag}/> : <RecipeList recipes={recipes}/>}
        </div>
    </div>
  );
};

export default App;
