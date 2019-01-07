import React from 'react'
import {Prompt} from 'react-router-dom'
export default class first extends React.Component{
    constructor(props){
        super()
        this.state = {
            power:false
        }
        this.changePower=this.changePower.bind(this)
    }
    changePower(){
        let power = !this.state.power
        console.log('改变成功！')
        this.setState({
            power
        })
    }
    render() {
        return (
            <div>
                <Prompt message="是否离开本页？" when={this.state.power}/>
                <p>第一页</p>
                <button onClick={this.changePower}>切换Power</button>
            </div>
        )
    }
}