import { BrowserRouter } from 'react-router';
import Layout from './Layout';
import ContextProvider from '../Contexts/ContextProvider';

const AppRoute = () => {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Layout />
        </ContextProvider>
      </BrowserRouter>
    </>
  );
};

export default AppRoute;
