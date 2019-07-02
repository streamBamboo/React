/**
 * Created by HTML on 2019/6/17
 */
import React, { Component } from 'react';

class App extends Component {
  render () {
    return (
      <ul className='my-list'>
        <li>你想知道旧版react是怎么写my-list的吗？</li>
        <li>看看下面的代码就知道</li>
      </ul>
      /*var child1 = React.createElement('li', null, '这就是旧版react的写法');
       var child2 = React.createElement('li', null, '意不意外？惊不惊喜？');
       var root = React.createElement('ul', {className: 'my-list'}, child1, child2)*/
  )
  }
}

export default App;
