/**
 * Created by HTML on 2019/6/17
 */
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './css/style.css';
import XiaojiejieItem from './Component/XiaojiejieItem';
import Animation from './Animation';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Xiaojiejie extends Component {
    //在某一时刻，可以自动执行的函数
    constructor (props) {
        super(props);
        this.state = {
            inputValue: '',
            list: [],
        };
    }
    
    componentWillMount () {
        // console.log('componentWillMount-----组件将要挂载到页面的时刻')
    }
    
    componentDidMount () {
        axios.get('https://www.easy-mock.com/mock/5d1ac86a88a90b0b4e25f9a9/ReactDemo/xiaojiejie').then((res) => {
            console.log('获取到什么数据呀？', res);
            let data = res.data.data;
            this.setState({
                list: data
            });
        }).catch((error) => {
            console.log('获取数据失败', error);
        });
        // console.log('componentDidMount-x----组件挂载完成的时刻')
    }
    
    shouldComponentUpdate () {
        // console.log('shouldComponentUpdate')
        return true;
    }
    
    componentWillUpdate () {
        // console.log('componentWillUpdate')
    }
    
    componentDidUpdate () {
        // console.log('componentDidUpdate')
    }
    
    componentWillUnmount () {
        // console.log('father------componentWillUnmount')
    }
    
    inputChange () {
        this.setState({
            inputValue: this.input.value
        });
    }
    
    add () {
        let {list, inputValue} = this.state;
        this.setState({
            // list: list.push(inputValue),
            list: [...list, inputValue],//ES6 的拓展运算符
            inputValue: ''
        }, () => {
            // console.log(this.ul.querySelectorAll('li').length)
        });
        
    }
    
    deleteItem (index) {
        let {list} = this.state;
        list.splice(index, 1);
        this.setState({
            list: list
            // list: list.splice(index, 1) 这种写法是错误的，react不允许直接操作state中的值
        });
        
    }
    
    render () {
        const {inputValue, list} = this.state;
        // console.log('render----组件挂载中')
        return (
            //Fragment 碎片相当于小程序的block标签
            <Fragment>
                <div>
                    <label htmlFor='jspang'>增加服务：</label>
                    <input
                        id='jspang'
                        className='input'
                        type="text"
                        value={inputValue}
                        onChange={this.inputChange.bind(this)}
                        ref={(input) => {
                            this.input = input;
                        }}
                    />
                    <button onClick={this.add.bind(this)}>增加服务</button>
                </div>
                <ul
                    ref={(ul) => {
                        this.ul = ul;
                    }}
                >
                    <TransitionGroup
                    
                    >
                        {
                            list.map((item, index) => {
                                //dangerouslySetInnerHTML   解析标签
                                return (
                                    <CSSTransition
                                        timeout={2000}
                                        classNames='boss-text'
                                        unmountOnEixt
                                        key={index + item}
                                        appear={true}
                                    >
                                        <XiaojiejieItem
                                            deletenClick={this.deleteItem.bind(this, index)}
                                            content={item}
                                            // avname='小姐姐'
                                        />
                                    </CSSTransition>
                                
                                );
                            })
                        }
                    </TransitionGroup>
                
                </ul>
                <Animation/>
            </Fragment>
        );
    }
}

export default Xiaojiejie;
