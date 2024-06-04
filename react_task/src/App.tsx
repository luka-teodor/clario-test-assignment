import styled from 'styled-components';
import Signup from './components/Signup';

function App() {
  return (
    <AppWrapper className="App">
      <Signup />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  height: 100%;
`;

export default App;
