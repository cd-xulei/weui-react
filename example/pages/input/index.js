import React from 'react'
import { Group, Input, Button } from '../../../src'
import Page from '../../component/page'

var Demo = React.createClass({
  getInitialState(){
    return {
      uName: 'xxxx'
    }
  },
  clearIpt(state){
    return ()=>this.refs[state].clear();
  },
  render: function() {
      return (
        <Page title="Input">
          <Button onClick={ this.clearIpt('uName') }>清空用户名</Button>
          <Group title="基础使用">
            <Input label="用户名" ref="uName" type="text" placeholder="请输入用户名" value={ this.state.uName } showClear/>
            <Input label="密码" type="password" placeholder="请输入密码" showClear/>
          </Group>

          <Group>
            <Input label="手机号" type="tel" placeholder="请输入手机号" vcode right={<button className="weui-vcode-btn">获取验证码</button>}/>
            <Input label="日期" type="date"/>
            <Input label="时间" type="datetime-local"/>
          </Group>

          <Group title="没有label">
            <Input type="text" placeholder="请输入用户名"/>
          </Group>

          <Group title="select">
            <Input label="支付方式" type="select" placeholder="请选择" selectOptions={[{value:1, text:'微信'},{value:2, text:'支付宝'}]}/>
          </Group>
        </Page>
      );
  },
});

export default Demo
