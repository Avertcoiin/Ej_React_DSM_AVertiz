// src/components/input/ElementoInput.jsx
import React from 'react';

function ElementoInput({ label, value, onChange, onFocus }) {
  return (
    <div className="mb-3">
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <input
        type="number"
        className="form-control"
        id={label}
        value={value}
        onChange={onChange} // Esto actualiza el valor de A o B
        onFocus={onFocus} // Esto indica cuál input está activo
      />
    </div>
  );
}

export default ElementoInput;


// src/components/Input/ElementoInput.jsx
/* import React from 'react';

function ElementoInput({ label, value, onChange }) {
  return (
    <div className="mb-3">
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <input
        type="number"
        className="form-control"
        id={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default ElementoInput; */
