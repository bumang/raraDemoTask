import { Suspense } from 'react';
import { Center, Spinner } from '@chakra-ui/react';
import { Outlet, ReactLocation, Router } from 'react-location';
import routes from 'routes';
import { spinnerProps } from 'constant';

const location = new ReactLocation();
function App() {
  return (
    <Suspense
      fallback={
        <Center p={15}>
          <Spinner {...spinnerProps} />
        </Center>
      }
    >
      <Router location={location} routes={routes}></Router>
    </Suspense>
  );
}

export default App;
