import React from 'react'
export default class second extends React.Component{
    componentWillMount(){
        console.log(this.props)
    }
    render() {
        return (
            <div>第二页，参数：{this.props.match.params.param},{this.props.match.params.aaa}</div>
        )
    }
}