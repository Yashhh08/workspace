// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import Test from './test/test';

export function App() {
  return (
    <>
      <Test></Test>

      <NxWelcome title="react-test-app" />

      <div />
    </>
  );
}

export default App;
