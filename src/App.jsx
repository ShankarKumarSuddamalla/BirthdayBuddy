import { useState } from "react";
import data from './data'
import List from "./components/List";
const App = () => {
  const [people,setPeople] = useState(data)
  console.log(people)
  return <main>
    <section className="container">
      <h3>{people.length} Birthdays Today</h3>
      <List people={people} />
      <button
          type='button'
          className='btn btn-block'
          onClick={() => setPeople([])}
        >
          clear all
        </button>
    </section>
  </main>
};
export default App;
