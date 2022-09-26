import React from 'react';
import respositories from './data/repository.json';
import Header from './layouts/header';
import Navbar from './layouts/navbar';
import Repository from './repository';
function App() {
  const baseline = {
    data: 'See what the github community is excited about today',
  };
  return (
    <>
      <div className='bg-slate-800'>
        <Header data={baseline} />
        <div className='grid grid-cols-1 divide-y m-20 border border-slate-600 rounded-lg'>
          <Navbar />
          {respositories.map((data) => (
            <Repository data={data} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
