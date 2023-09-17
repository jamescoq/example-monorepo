import styled from 'styled-components';

import ExamplePage from './ExamplePage';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <ExamplePage title="client" />
    </StyledApp>
  );
}

export default App;
