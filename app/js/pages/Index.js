import React from 'react';
import {
  Container,
  List,
  Button,
  NavBar,
  Slider,
  Group,
  View,
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';
import GoodsList from '../component/GoodsList'
import model from './model.js';
import utils from '../util/CommonUtils';

export default class Index extends React.Component {
  static defaultProps = {
    transition: 'rfr'
  };

  constructor() {
    super();
    this.state = {
      topGoods: []
    };

  }

  componentDidMount() {
    let goods = new Array(10).fill(0).map((r, x) => {
      return {
        id: x,
        title: "货物" + x,
        price: x * 12,
        imgUrl: `http://lorempixel.com/1000/625/food/${Math.random().toString(36).slice(2)}`
      };
    });
    this.setState({
      topGoods: goods
    });
  }

  conScroll() {}
  render() {
    return (
      <View>
        <NavBar
          title='爱婴岛-坂田店'
          amStyle="primary"
        />
        <Container scrollable onScroll={::this.conScroll}>

        <Slider interval={2000} >
        {
          Array(4).fill(0).map((r,i) => {
          return (<Slider.Item key={i}> 
            <img style={{maxHeight:utils.clientHeight()/4}} src={`http://lorempixel.com/1000/625/food/${Math.random().toString(36).slice(2)}`} />
          </Slider.Item>);
          })
        }
        </Slider>
        <Group  header={<p style={{textAlign:'center'}}>热销商品</p>} noPadded>
          <GoodsList dataSource={this.state.topGoods}/>
        </Group>
        </Container>
      </View>
    );
  }
}