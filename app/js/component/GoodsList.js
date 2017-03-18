import React from 'react';
import { List, Button, } from 'amazeui-touch';

import { Link } from 'react-router';
import './style.scss';
import utils from '../util/CommonUtils';

class Demo extends React.Component {
  render() {
    let goods = this.props.dataSource || [];
    if (goods.length == 0) {
      return <p className='centerItem'>
               没有更多的内容
             </p>;
    }
    return (
      <List>
        { goods.map((r, idx) => {
            return <List.Item
                              linkComponent={ Link }
                              linkProps={ { to: '/goodsDetail?goodId=' + r.id } }
                              media={ <img
                                           style={ { maxWidth: utils.clientWidth() / 3, maxHeight: utils.clientWidth() / 3 } }
                                           src={ r.imgUrl } /> }
                              title={ r.title }
                              key={ r.id }
                              subTitle={ <span style={ { color: '#F15D56', fontWeight: 'bold' } }>￥{ r.price }元</span> } />
          }) }
        <p
           className='centerItem'
           hidden={ this.props.moreHidden }>
          <Button>
            查看更多...
          </Button>
        </p>
        <p>
        </p>
      </List>
      );
  }
}

export default Demo;