import './App.css';

function App() {
 const SubmitForm=()=>{
  alert("Form sumbitted")
 }
  return (
    <div className="App">
       <div id="container">
         <header>Register Form
         </header>
         <form >
            <fieldset >
               <br/>
               <input type="text" name="username" id="username" placeholder="Username" required autofocus/>
               <br/><br/>
               <input type="email" name="email" id="email" placeholder="E-mail" required/>
               <br/><br/>
               <input type="password" name="password" id="password" placeholder="Password" required/>
               <br/><br/>
               <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" required/>
               <br/> <br/> <br/>
               <label for="submit"></label>
               <input type="submit" onClick={SubmitForm} name="submit" id="submit" value="REGISTER" />
            </fieldset>
         </form>
      </div>
    </div>
  );
}

export default App;
