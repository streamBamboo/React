/**
 * Created by HTML on 2019/7/2
 */
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const data = [
    '早8点开晨会，分配今天的代码任务',
    '早9点和项目经理开需求沟通会',
    '早9点和项目经理开需求沟通会',
];

class TodoList extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }
    
    render () {
        return (
            <div
                style={{
                    margin: '100px'
                }}
            >
                <div>
                    <Input
                        placeholder='Write Something'
                        style={{
                            width: '250px',
                            marginRight: '10px'
                        }}
                    />
                    <Button type='primary'>增加</Button>
                </div>
                <div
                    style={{
                        margin: '20px 0',
                        width: '300px'
                    }}
                >
                    <List
                        bordered
                        dataSource={data}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
}


export default TodoList;
