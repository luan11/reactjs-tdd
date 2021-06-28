import Dropdown from './components/Dropdown';
import Form from './components/Form';

import { Container } from './App.styles';

function App() {
  return (
    <Container>
      <Dropdown title="How to do Login?">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          repellendus ab optio a! Rerum, recusandae voluptatum! Dolores alias
          aliquam sint rem, ullam exercitationem perspiciatis, amet consequuntur
          asperiores aperiam ab soluta.
        </p>
      </Dropdown>

      <Form />
    </Container>
  );
}

export default App;
