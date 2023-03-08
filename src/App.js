import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <RouterProvider router={routes}>
      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
