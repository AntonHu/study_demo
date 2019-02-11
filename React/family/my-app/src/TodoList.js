import React, { Component, Fragment } from 'react'
import './style.css'
import TodoItem from './TodoItem.js'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '初始value',
            list: ['a', 'b', 'c']
        }
        this.printInput = this.printInput.bind(this)
        this.submit = this.submit.bind(this)
        this.deleteIndex = this.deleteIndex.bind(this)
    }
    printInput(e) {
        const value = e.target.value
        console.log(value)
        this.setState(()=>({
            inputValue: value
        }))
    }
    submit() {
        let inputValue = ''
        this.setState((prevState)=>({
            list:[...prevState.list, prevState.inputValue],
            inputValue
        }))
    }
    deleteIndex(index) {
        if (window.confirm(`确定要删除第${index}条数据？`)) {
            this.setState((prevState)=>{
                const list = [...prevState.list]
                list.splice(index,1)
                return {list}
            })
        }
    }
    getTodoItem(){
        return this.state.list.map((value, index) => {
            return (
                <TodoItem
                    key={`li${index}`}
                    i={index}
                    content={value}
                    deleteItem={this.deleteIndex}
                />
            )
        })
    }
    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        id="insertArea"
                        className="input"
                        placeholder='请输入'
                        value={this.state.inputValue}
                        onChange={this.printInput} />
                    <button onClick={this.submit}>提交</button>
                </div>
                <div>
                    <ul>
                        {this.getTodoItem()}
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export default TodoList