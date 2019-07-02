/**
 * Created by HTML on 2019/7/2
 */
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class Animation extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isShow: true
        };
    }
    
    toToggole () {
        this.setState({
            isShow: !this.state.isShow,
        });
    }
    
    render () {
        const {isShow} = this.state;
        return (
            <div>
                <CSSTransition
                    in={isShow}
                    timeout={2000}
                    classNames='boss-text'
                >
                    <div>Boss级人物-孙悟空</div>
                </CSSTransition>
                <div>
                    <button onClick={this.toToggole.bind(this)}>召唤Boss</button>
                </div>
            </div>
        );
    }
}

export default Animation;
