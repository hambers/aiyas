import React from 'react';
import { View, List, Container, Card, Col, Grid, Icon, Group, NavBar, } from 'amazeui-touch';
import { Link, hashHistory, } from 'react-router';

import NotFound from './NotFound';
import utils from '../util/CommonUtils';

class Me extends React.Component {

  handBackNav(item,e) {
    e.preventDefault();
    hashHistory.go(-1);
  }
  componentDidMount() {}
  render() {

    const backNav = {
      icon: 'left-nav',
      href: '#',
      title: '返回',
    };
    return (
      <View>
        <NavBar
                title='我'
                leftNav={ [backNav] }
                onAction={ ::this.handBackNav }
                amStyle="primary" />
        <Container scrollable>
          <div
               className='card-cover card-header'
               style={ { height: utils.clientHeight() / 4, width: utils.clientWidth(), backgroundSize: 'cover', backgroundImage: 'url(http://lorempixel.com/1000/725/people/)' } }>
            <h3 className="card-title">Cover + 标题: 我思念的城市</h3>
          </div>
          <Group
                 header='订单信息'
                 noPadded>
            <List>
              <List.Item
                         title='已付款'
                         linkComponent={ Link } />
              <List.Item
                         title='已发货'
                         linkComponent={ Link } />
              <List.Item
                         title='已完成'
                         linkComponent={ Link } />
              <List.Item
                         title='所有订单'
                         linkComponent={ Link } />
            </List>
          </Group>
          <Group
                 header='个人设置'
                 noPadded>
            <List>
              <List.Item
                         title='我的信息'
                         linkComponent={ Link } />
              <List.Item
                         title='修改密码'
                         linkComponent={ Link } />
            </List>
          </Group>
        </Container>
      </View>
      );
  }
}

export default Me;