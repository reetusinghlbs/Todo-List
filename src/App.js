import { useState } from 'react';
import './App.css';
import AddTodo from './Component/AddTodo';
import ListOfTodo from './Component/ListOfTodo';


function App() {
// our 2nd target : whatever we will add in input feild that should be store in listTodoa as a array form, so now we will create usestate here and then we will tansfer data childComp(AddTodod.js) to parentComp(App.js) with the help of props and we will make a finction for it.
// the question is why we use sprade oprater to add data in our array? so when we want to add data in our old array so we want to save old array data then wants to add new data thats why we use spraed oprater.whatever old data is in our array that should be coppy in my listTood and the rest wahtever we add that should be add in inputData. then this function will use in Addtodo as a property.whenever we will click to add todo button we will call addlist function. and also our input arae should be empty after clicking on the add button.

// our 3rd target: whatever we add in my array that should be displayone by one. on the screen so for it will make new file ListOfTodo.

// our 4th target: we will delet our todo one by one so we will make a function deleteListItme and this will delete on behauf of key and we use splice method i want to remove one by on items then update our list and after that we will update it in the map.

// last target but optional if you do this it will be good: so the problem is this when i click on add button without enter any task it will add empty list. how can we stop this. its comping from AddTodo file so we will put a condition in the App.js file in the addList function.

// if you want when you add input and press enter key you taks should be add so how we can do lest go in the AddTodo file and we will make a function handleEnterKey

  const[listTodo,setListTodo]= useState([]);

  const addList = (inputData)=>{
    if (inputData !== '') 
      setListTodo([...listTodo,inputData])
  }

  const deleteListItme = (key)=>{
    const newListTodo = [...listTodo]   // we will store out listTodo in new vairable then apply sprade oprater
    newListTodo.splice(key,1)

    // now  we will update our list
    setListTodo([...newListTodo]);
  }
  return (
    <div className="main-container">
     <div className="center-container">
     <h2 className='app-heading'>Todo List in React</h2>
     <hr/><br/><br/>
      <AddTodo addList={addList}/>


      {/* <ListOfTodo/> */}
      {listTodo.map((listItem,i)=>{
        return(
          <ListOfTodo key={i} index={i} item={listItem} deleteItme={deleteListItme}/>
        )
      })}
     </div>
    </div>
  );
}

export default App;
