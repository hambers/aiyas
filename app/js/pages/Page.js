import React from 'react';
import { View, NavBar, } from 'amazeui-touch';
import { Link, hashHistory, } from 'react-router';

import NotFound from './NotFound';


class Page extends React.Component {

  handBackNav(item,e) {
    e.preventDefault();
    hashHistory.go(-1);
  }

  render() {

    const backNav = {
      icon: 'left-nav',
      href: '#',
      title: '返回',
      onlyActiveOnIndex: true,
    };

    return (
      <View>
        <NavBar
      title=''
      leftNav={[backNav]}
      onClick={::this.handBackNav}
      amStyle="primary"
      />
      </View>
    );
  }
}

export default Page;
