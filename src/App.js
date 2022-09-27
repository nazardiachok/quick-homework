import "./App.css";
import { persons } from "./assets/persons";
import Person from "./Person";

function App() {
  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <ul>
        {persons.map((person) => {
          return (
            <Person
              name={person.name}
              status={person.status}
              img={person.image}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
