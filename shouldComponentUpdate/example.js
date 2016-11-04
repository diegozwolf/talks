/*En este ejemplo solo se va  renderizar el componente cuando
el cociente de this.props.val dividido entre dos,  sea 0,
para este ejemplo se hace  uso del evento onClick de React js.*/


import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  constructor(props){
    super(props);
    this.update = this.update.bind(this);
  }
  
  shouldComponentUpdate(nextProps,nextState){
    console.log(nextProps);
    return nextProps.val % 2 == 0;
  }
  
  componentWillUpdate(){
    console.log('Update MyComponent...');
  }

  update(){
    ReactDOM.render(
      <MyComponent val={this.props.val + 1}/>, 
      document.getElementById('container')
    ); 
  }
  render(){
    return <div>
      <span>My Component contador:</span>
      <button onClick={this.update}>{this.props.val}</button>
    </div>
  }
}

`MyComponent.defaultProps = {`
  `val:0`
`};`

`ReactDOM.render(`
  `<MyComponent />,` 
  `document.getElementById('container')`
`);` 
