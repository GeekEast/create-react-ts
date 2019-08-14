import React from 'react';
import './App.scss';

// define props interface
// export interface HelloProps {}

// functional component
// const App = (props: HelloProps) => (
// 	<h1>
// 		Hello World!
// 	</h1>
// );

// class component
// class App extends React.Component<HelloProps,{}> {
class App extends React.Component {
  render() {
    return <h1 className="jest">Hello World!</h1>;
  }
}

export default App;
