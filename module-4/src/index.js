function getTotalPrice(products) {
  return products.reduce((acc, current) => {
    return parseFloat((acc + current.regularPrice).toFixed(2));
  }, 0);
}

function getTotalPriceWithDiscount(products, promotionType) {
  return products.reduce((acc, current) => {
    let priceWithDiscount = current.promotions.find(p =>
      p.looks.includes(promotionType)
    );
    if (priceWithDiscount != undefined) {
      return parseFloat((acc + priceWithDiscount.price).toFixed(2));
    }
    return parseFloat((acc + current.regularPrice).toFixed(2));
  }, 0);
}

function getPromotionType(products) {
  let categories = new Set();
  products.forEach(p => {
    categories.add(p.category);
  });

  let promotionType;
  if (categories.size == 1) {
    promotionType = 'SINGLE LOOK';
  } else if (categories.size == 2) {
    promotionType = 'DOUBLE LOOK';
  } else if (categories.size == 3) {
    promotionType = 'TRIPLE LOOK';
  } else if (categories.size >= 4) {
    promotionType = 'FULL LOOK';
  }

  return promotionType;
}

function getSelectedProducts(ids, productsList) {
  return ids.map(id => {
    const product = productsList.filter(p => p.id == id);
    return product[0];
  });
}

function prepareProductsResponse(products) {
  return products.map(p => {
    return {
      name: p.name,
      category: p.category
    };
  });
}

function getShoppingCart(ids, productsList) {
  const selectedProducts = getSelectedProducts(ids, productsList);

  const total = getTotalPrice(selectedProducts);

  const promotionType = getPromotionType(selectedProducts);

  const totalWithDiscount = getTotalPriceWithDiscount(
    selectedProducts,
    promotionType
  );

  const discountValueStr = (total - totalWithDiscount).toFixed(2);
  const discountValue = parseFloat(discountValueStr);

  const discountPercentage = ((discountValue * 100) / total).toFixed(2) + '%';

  const products = prepareProductsResponse(selectedProducts);

  return {
    products,
    promotion: promotionType,
    totalPrice: totalWithDiscount.toString(),
    discountValue: discountValueStr,
    discount: discountPercentage
  };
}

module.exports = { getShoppingCart };
