import React from 'react'
import { Group, Cell, Header, version } from '../../../src'
import Page from '../../component/page'
import { Link } from 'react-router'

const checkedIcon = <i className="weui-icon-success-no-circle" style={{fontSize: 12}}></i>;

let Home = React.createClass({
  render(){
    return (
      <Page title={`Weui React 组件库 ${version}`} subTitle="每天健康移动端UI组件库，持续更新中...">
        <Group title="基础组件">
          <Cell label="Divider" desc="分隔线" icon={ checkedIcon } href={'/#/divider'}/>
          <Cell label="Grid" desc="宫格" icon={ checkedIcon } href={'/#/grid'}/>
          <Cell label="Flex" desc="Flex网格" icon={ checkedIcon } href={'/#/flex'}/>
          <Cell label="Button" desc="按钮" icon={ checkedIcon } href={'/#/button'}/>
          <Cell label="Header" desc="页头" icon={ checkedIcon } href={'/#/header'}/>
        </Group>
        <Group title="操作反馈">
          <Cell label="Dialog" desc="对话框" icon={ checkedIcon } href={'/#/dialog'}/>
          <Cell label="Toast"  desc="轻提示" icon={ checkedIcon } href={'/#/toast'}/>
          <Cell label="Msg" desc="操作结果页" icon={ checkedIcon } href={'/#/msg'}/>
          <Cell label="Tip" desc="顶部通知" icon={ checkedIcon } href={'/#/tip'}/>
          <Cell label="Offcanvas" desc="弹出层" icon={ checkedIcon } href={'/#/offcanvas'}/>
        </Group>
        <Group title="数据录入">
          <Cell label="Group" desc="分组" icon={ checkedIcon }/>
          <Cell label="GroupTitle" desc="分组标题" icon={ checkedIcon }/>
          <Cell label="Checkbox" desc="单选与多选" icon={ checkedIcon } href={'/#/checkbox'}/>
          <Cell label="Switch" desc="开关" icon={ checkedIcon } href={'/#/switch'}/>
          <Cell label="Input" desc="输入" icon={ checkedIcon } href={'/#/input'}/>
          <Cell label="Textarea" desc="多行文本输入" icon={ checkedIcon } href={'/#/textarea'}/>
          <Cell label="Picker" desc="选择器" icon={ checkedIcon } href={'/#/picker'}/>
          <Cell label="Datetime" desc="日期选择" icon={ checkedIcon } href={'/#/datetime'}/>
          <Cell label="PopupPicker" desc="弹出层选择器" icon={ checkedIcon } href={'/#/popup-picker'}/>
          <Cell label="PopupRadio" desc="弹出层单项选择器" icon={ checkedIcon } href={'/#/popup-radio'}/>
          <Cell label="PopupAdress" desc="弹出层地址选择器" icon={ checkedIcon } href={'/#/popup-address'}/>
          <Cell label="Range" desc="数值范围选择" icon={ checkedIcon } href={'/#/range'}/>
          <Cell label="XNumber" desc="数量加减" icon={ checkedIcon } href={'/#/x-number'}/>
        </Group>
        <Group title="数据展示">
          <Cell label="FormPreview" desc="表单预览" icon={ checkedIcon } href={'/#/form-preview'}/>
          <Cell label="Cell" desc="列表" icon={ checkedIcon } />
          <Cell label="Badge" desc="徽章" icon={ checkedIcon } href={'/#/badge'}/>
          <Cell label="Swiper" desc="滑动相册" icon={ checkedIcon } href={'/#/swiper'}/>
          <Cell label="Sticky" desc="滚动锁定" icon={ checkedIcon } href={'/#/sticky'}/>
          <Cell label="Previewer" desc="图片查看器" icon={ checkedIcon } href={'/#/previewer'}/>
          <Cell label="Marquee" desc="跑马灯" icon={ checkedIcon } href={'/#/marquee'}/>
          <Cell label="Circle" desc="圆环进度" icon={ checkedIcon } href={'/#/circle'}/>
          <Cell label="Clocker" desc="倒计时" icon={ checkedIcon } href={'/#/clocker'}/>
          <Cell label="Countup" desc="数字增长" icon={ checkedIcon } href={'/#/countup'}/>
          <Cell label="Progress" desc="进度条" icon={ checkedIcon } href={'/#/progress'}/>
        </Group>
        <Group title="导航相关">
          <Cell label="Tab" desc="选项卡" icon={ checkedIcon } href={'/#/tab'}/>
        </Group>
      </Page>
    )
  }
})

export default Home;
