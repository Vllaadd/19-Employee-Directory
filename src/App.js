import React, { useEffect, useState} from 'react';
import Table from './Table';


function App() {
  const [initiaUsers, updateAvailableUsers] = useState([]);
  const [usersToRender, updateUsersToRender] = useState([]);

  useEffect(() => {
    getUsers().then(({ data: { results } }) => updateAvailableUsers(results));
  }, []);

  return (
    <div className="App">
    <h1>Employee Directory</h1>
    <p>Please type in the employee`s first name in the user input below. </p>
    <FilterInput users={initialUsers} updateUsers={updateUsersToRender} />
    <Table users={usersToRender}/>
    </div>
  );
}

export default App;
