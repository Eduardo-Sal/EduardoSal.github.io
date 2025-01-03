import React from 'react';
import { withFormsy } from 'formsy-react';

class FormsyInput extends React.Component {

  changeValue = (e) => {
    this.props.setValue(e.currentTarget.value);
  }

  render() {
    // An error message is returned only if the component is invalid
    const errorMessage = this.props.getErrorMessage();

    return (
      <div style={{ 'position': 'relative' }}>
        <input
          className={`${this.props.isPristine() || this.props.isValid() ? 'no-error' : 'error'}`}
          onChange={this.changeValue}
          name={`${this.props.name}`}
          type="text"
          value={this.props.getValue() || ''}
          placeholder={this.props.placeholder}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd', width: '100%', background: '#181a1b', color: 'white' }} // Minimal design style
        />
        <span className="error-message" style={{ color: 'red', fontSize: '12px', position: 'absolute', bottom: '-20px' }}>
          {errorMessage}
        </span>
      </div>
    );
  }
}

export default withFormsy(FormsyInput);