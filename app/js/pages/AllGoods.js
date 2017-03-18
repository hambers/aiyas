import React from 'react';
import {
  View,
  Button,
  NavBar,
  Container,
} from 'amazeui-touch';
import {
  Link,
  hashHistory,
} from 'react-router';

import NotFound from './NotFound';
import GoodsList from '../component/GoodsList';

class Page extends React.Component {

  constructor(){
    super();
    this.state = {
      goodsList: [],
    };
  }
  
  handBackNav(item,e) {
    e.preventDefault();
    hashHistory.go(-1);
  }
  componentDidMount(){
    let goods = new Array(10).fill(0).map((r,x)=>{
      return {id:x,title:"货物"+x,price:x*12,
      imgUrl:`http://lorempixel.com/800/625/food/${Math.random().toString(36).substr(2)}`};
    });
    this.setState({
      goodsList: goods
    });
  }
  render() {
   
    const backNav = {
      icon: 'left-nav',
      href:'#',
      title: '返回',
    };

    return (
      <View >
        <NavBar
          title='所有商品'
          leftNav={[backNav]}
          onAction={::this.handBackNav}
          amStyle="primary"
        />
        <Container scrollable><GoodsList dataSource={this.state.goodsList} /></Container>
      </View>
    );
  }
}

export default Page;
