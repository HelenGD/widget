import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import { Widget } from './widget/widget';
import { changeInput } from './reducer/widget-reducer'

function App(props) {
  const {
    value,  
    onChange,
  } = props;
  return (
    <div className="App">
      <Widget 
        value={value}
        onChange={onChange}
        min={0}
        max={50}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  value: state.widget
});

const mapDispatchToProps = {
  onChange: changeInput,
};

export { App };
export default connect(mapStateToProps, mapDispatchToProps)(App);
