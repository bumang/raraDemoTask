import { Suspense } from 'react';
import { Center, Spinner } from '@chakra-ui/react';
import { Outlet, ReactLocation, Router } from 'react-location';
import routes from 'routes';

const location = new ReactLocation();
function App() {
  return (
    <Suspense
      fallback={
        <Center p={15}>
          <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
        </Center>
      }
    >
      <Router location={location} routes={routes}></Router>
    </Suspense>
  );
}

export default App;
