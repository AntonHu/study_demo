import React, { PureComponent } from 'react';
import axios from 'axios'
import './style.css'

class Demo extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            selectValue: '',
            list: []
        }
    }
	render() {
		return (
			<div id="main">
                <div className="header">
                    <label>筛选：</label>
                    <select value={this.state.selectValue} onChange={ this.changeSelect.bind(this) }>
                        <option value="">所有</option>
                        <option value="0">试用</option>
                        <option value="1">正式开通</option>
                        <option value="2">已订购</option>
                    </select>
                </div>
                <div>
                    <table border="1px" width="100%" className="content">
                        <thead>
                            <tr>
                                <th>能力名称</th>
                                <th>能力ID</th>
                                <th>状态</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.list.map(item => (
                                    <tr key={item.eaID}>
                                        <td>{ item.eaName }</td>
                                        <td>{ item.eaID }</td>
                                        <td>{ item.status }</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
		)
    }
    getList(){
        axios.post('/manager/saas/getOrder.action',
        {
            status: this.state.selectValue,
        },{
            headers:{
                'token': '201902271251182w82eaze5qeowxpe0h',
                'Content-Type': 'application/JSON;chart=UTF-8',
            },
        }).then(res => {
            console.log(res)
            this.setState({
                list: res.data.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
    changeSelect(e){
        this.setState({
            selectValue: e.target.value
        },function(){
            this.getList()
        })
    }
    componentDidMount(){
        this.getList()
    }
}

export default Demo;
