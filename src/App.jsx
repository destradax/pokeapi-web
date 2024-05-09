import DefaultLayout from 'components/DefaultLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from 'routes/Home';
import Login from 'routes/Login';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />
  }
]);

const App = () => {
  return (
    <DefaultLayout>
      <RouterProvider router={router} />
    </DefaultLayout>
  );
};

export default App;
