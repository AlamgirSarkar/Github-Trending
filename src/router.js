import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Developer from './developer';
import NoPage from './NoPage';
import Repository from './repository';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/repository' element={<App />} />
          <Route path='/developer' element={<Developer />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
