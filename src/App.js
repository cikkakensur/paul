import React from 'react'
import MyButton from './components/MyButton/MyButton';
import MyButtonClass from './components/MyButton/MyButtonClass';


const App = () => {
  return (
    <div className="App">
     <MyButton className={"success"}> I am Button Success </MyButton>
     <MyButton className={"danger"}> I am Button Danger </MyButton>
     <MyButton className={"primary"}> I am Button Primary </MyButton>
     <MyButton className={"secondary"}> I am Button Secondary </MyButton>
     <MyButton className={"warning"}> I am Button Warning </MyButton>
    </div>
  );
}

export default App;
