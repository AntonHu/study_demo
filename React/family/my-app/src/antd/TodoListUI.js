import React from 'react'
import { Input,Button,List } from 'antd'

const TodoListUI = (props)=>{
    return (
        <div style={{width:'300px',margin:'0 auto'}}>
            <div style={{marginTop:'10px'}}>
                <Input 
                    value={props.inputValue}
                    placeholder="please input sth..."
                    onChange={props.handlerInputChange}
                    style={{width:'208px'}}
                />
                <Button 
                    type="primary"
                    style={{
                        marginLeft:'10px'
                    }}
                    onClick={props.handlerButtonClick}
                >
                    click me
                </Button>
            </div>
            <List
                style={{marginTop:'10px',width:'300px'}}
                bordered
                dataSource={props.list}
                renderItem={(item,index) => {
                    return (
                    <List.Item 
                        onClick={()=>{
                            props.handlerItemClick(index)
                        }}
                    >{item}</List.Item>
                )}}
            />
        </div>
    )
}

export default TodoListUI