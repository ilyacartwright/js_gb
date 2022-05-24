const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
  ];
  
  const renderGoodsItem = ({ title = '', price = 0 }) => `
      <div class="goods-item">
        <h3>${title}</h3>
        <img src="https://st1.prosto.im/cache/st1/8/2/0/9/82095/82095.jpg">
        <p class="price">${price}</p>
      </div>
    `;
  ;
  
  const renderGoodsList = (list = []) => {
    let goodsList = list.map(item => renderGoodsItem(item)).join('');
    document.querySelector('.goods-list').innerHTML = goodsList;
  }
  
  renderGoodsList(goods);