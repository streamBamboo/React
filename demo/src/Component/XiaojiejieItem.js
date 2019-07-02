import React, { Component } from 'react';
import PropTypes from 'prop-types';

class XiaojiejieItem extends Component {
    //父组件传递给子组件  没值时  赋个默认值
    static defaultProps = {
        avname: '小妹妹 '
    };
    //校验父组件传递到子组件的值的类型
    static propTypes = {
        content: PropTypes.string,
        avname: PropTypes.string.isRequired,//isRequired: 必须传递不传递会报错
        deletenClick: PropTypes.func,
    };
    
    //组件第一次存在于DOM中，函数是不会被执行？？
    //如果已经存在于DOM中，函数才会被执行？？？
    //第一次渲染子组件时不会触发，当子组件存在且更新时才触发
    componentWillReceiveProps (options) {
        // console.log('componentWillReceiveProps' , options)
    }
    
    //组件从页面中删除的时候执行
    componentWillUnmount () {
        // console.log('child------componentWillUnmount')
    }
    
    //改善组件性能优化   面试的时候机试的时候需要写上这个组件性能优化
    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.content !== this.props.content;
    }
    
    handleClick () {
        this.props.deletenClick();
    }
    
    render () {
        let {content, avname} = this.props;
        return (
            <li onClick={this.handleClick.bind(this)}>
                {avname}为您服务-{content}
            </li>
        );
    }
}


export default XiaojiejieItem;
