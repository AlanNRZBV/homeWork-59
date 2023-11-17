import Panel from '../../components/Panel/Panel.tsx';
import { useState } from 'react';

const App = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div className="container pt-5">
      <div className="d-flex flex-column align-content-center justify-content-center">
        <div className="form-check form-switch align-self-center mb-3">
          <input
            className="form-check-input"
            checked={isToggle}
            onChange={() => setIsToggle((current) => !current)}
            type="checkbox"
            role="switch"
            id="switch"
          />
          <label className="form-check-label" htmlFor="switch">
            Switch task
          </label>
        </div>
        <Panel switchContent={isToggle} />
      </div>
    </div>
  );
};

export default App;
