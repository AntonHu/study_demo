import React,{ Component,Fragment } from 'react'
import './style.css'
import { CSSTransition,TransitionGroup } from 'react-transition-group'

class Donghua extends Component {
    constructor(props){
        super(props)
        this.state={
            show:true,
            list:[]
        }
        this.handlerShow = this.handlerShow.bind(this)
    }
    handlerShow(){
        this.setState((prevState)=>{
            return {
                show:prevState.show?false:true,
                list:[...prevState.list,'title']
            }
        })
    }
    render(){
        return (
            <Fragment>
                <TransitionGroup>
                    {
                        this.state.list.map((value,index)=>{
                            return (
                                <CSSTransition
                                    key={`li${index}`}
                                    timeout={1000}
                                    classNames='fade'
                                    unmountOnExit
                                    onEntered={(el)=>{
                                        el.style.color='blue'
                                    }}
                                    appear={true}
                                >
                                    <li>{value}</li>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
                <CSSTransition
                    in={this.state.show}
                    timeout={1000}
                    classNames='fade'
                    unmountOnExit
                    onEntered={(el)=>{
                        el.style.color='blue'
                    }}
                    appear={true}
                >
                    <h1>title</h1>
                </CSSTransition>
                <button onClick={this.handlerShow}>change</button>
            </Fragment>
        )
    }
}

export default Donghua