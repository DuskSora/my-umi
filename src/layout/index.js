import { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';

const { Header, Footer, Sider, Content } = Layout;

const { SubMenu, Item } = Menu;

class BasicLayout extends Component {
    render() {
        return (
            <Layout>
                <Sider width={256} style={{minHeight: "100vh", color: "white"}}>
                    <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Item key="1">
                            <Icon type="pie-chart" />
                            <span>HelloWorld</span>
                        </Item>
                        <SubMenu key="sub1" title={<span><Icon type="dashbord" /><span>DashBoard</span></span>}>
                            <Item key="2"><Link to="/dashboard/analysis">分析页</Link></Item>
                            <Item key="3"><Link to="/dashboard/monitor">监控页</Link></Item>
                            <Item key="4"><Link to="/dashboard/workplace">工作台</Link></Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: "#fff", textAlign: "center", padding: 0 }}>Header</Header>
                    <Content style={{ margin: "24px 16px 0" }}>
                        <div style={{ padding: "24px", background: "#fff", minHeight: "360px" }}>
                           {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign:"center" }}>Footer</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default BasicLayout;