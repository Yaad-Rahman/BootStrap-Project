import React from 'react';

class Field extends React.Component  {
  render() {
    console.log("errors", this.props.errors);
    console.log("touched", this.props.touched);
      return(
        <div className="form-group">
        {this.props.elementName === 'input' ?
        <input
        className="form-control"
        id={this.props.name}
        type={this.props.type}
        placeholder={this.props.placeholder}
        required="required"
        name={this.props.name}
        onChange={this.props.onChange}
        onBlur={this.props.onBlur}
        />
        :
        <textarea className="form-control"
        id={this.props.name}
        placeholder={this.props.placeholder}
        required="required"
        name={this.props.name}
        onChange={this.props.onChange}
        onBlur={this.props.onBlur}
        />
      }
      <p className="help-block text-danger">
      {
          (this.props.touched && this.props.errors) &&
          <span>{this.props.errors}</span>
          
      }
      </p>
      </div>
      )
  }
}

export default Field;
