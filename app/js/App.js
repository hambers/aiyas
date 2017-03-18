import React from 'react';
import {
  render,
} from 'react-dom';
import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
  withRouter,
} from 'react-router';
import {
  Container,
  TabBar,
} from 'amazeui-touch';

class App extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  render() {
    const {
      location,
      params,
      children,
      ...props,
    } = this.props;
    const {
      router
    } = this.context;
    const transition = children.props.transition || 'sfr';

    return (
      <Container direction="column" id="sk-container">

        <Container
          transition={transition}
        >
          {React.cloneElement(children, {key: location.key})}
        </Container>

        <TabBar amStyle="primary"
        >
          <TabBar.Item
            component={Link}
            title="首页"
            icon='home'
            selected={router.isActive('/', true)}
            to="/"
          />          
          <TabBar.Item
            component={Link}
            title="所有商品"
            selected={router.isActive('/allGoods', true)}
            to="/allGoods"
            icon='bars'
          />
          <TabBar.Item
            component={Link}
            title="我的"
            // @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/docs/API.md#isactivepathorloc-indexonly
            selected={router.isActive('/me', true)}
            to="/me"
            icon='person'
          />
        </TabBar>
      </Container>
    );
  }
}

// Pages
import Index from './pages/Index';
import Page from './pages/Page';
import AllGoods from './pages/allGoods';
import Me from './pages/Me';
import GoodsDetail from './pages/GoodsDetail';

// withRouter HoC
// @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/upgrade-guides/v2.4.0.md#v240-upgrade-guide
const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="allGoods" component={AllGoods} />
      <Route path="me" component={Me} />
    </Route>
    <Route path="goodsDetail" component={GoodsDetail} />  
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  render(routes, document.getElementById('root'));
});
