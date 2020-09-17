import React from 'react';
import './widget.css';

const noop = () => {};

function Widget(props) {
  const { min, max, value, onChange } = props;

  const handleChange = (e) => {
    const value = Number(e.target.value);

    if (value >= max) {
      onChange(max);  
    } else if (value <= min) {
      onChange(min);
    } else {
      onChange(value);
    }
  };

  return (
    <div className="widget-container">
      <button
        type="button"
        disabled={min >= value}
        onClick={() => onChange(value - 1)}
      >
        -
      </button>
      <input
        style={{ width: 100 }}
        min={min}
        max={max}
        type="number"
        value={value}
        onChange={handleChange}
        step="1"
        autoFocus
        onWheel={noop}
      />

      <button
        type="button"
        disabled={max <= value}
        onClick={() => onChange(value + 1)}
      >
        +
      </button>
    </div>
  );
}

export { Widget };