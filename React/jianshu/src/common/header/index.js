import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { 
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button
 } from './style'
 import { CSSTransition } from 'react-transition-group'

class Header extends Component{
    constructor(props){
        super(props)
        this.handleInputFocus = this.handleInputFocus.bind(this)
        this.handleInputBlur = this.handleInputBlur.bind(this)
    }
    handleInputFocus(){
        this.setState({
            focused:true
        })
    }
    handleInputBlur(){
        this.setState({
            focused:false
        })
    }
    render(){
        const {
            focused,
            handleInputFocus,
            handleInputBlur
        } = this.props
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载APP</NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'>Aa</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe60b;</i>
                        </CSSTransition>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <i className="iconfont">&#xe617;</i>写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateTopProps = (state)=>{
    return {
        focused: state.focused
    }
}

const mapDispatch = (dispatch)=>{
    return {
        handleInputFocus(){
            const action={
                type:'input_focus'
            }
            dispatch(action)
        },
        handleInputBlur(){
            const action={
                type:'input_blur'
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateTopProps,mapDispatch)(Header)