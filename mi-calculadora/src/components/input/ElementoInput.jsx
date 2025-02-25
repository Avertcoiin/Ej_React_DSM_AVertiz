// src/components/Input/ElementoInput.jsx
import React from 'react';

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

export default ElementoInput;
