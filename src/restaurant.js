let conta = 0;
function aux(obFood, obDrink, index) {
  for (let i2 of obFood) {
    if (i2[0] === index) {
      conta += i2[1];
    }
  }
  for (let i2 of obDrink) {
    if (i2[0] === index) {
      conta += i2[1];
    }
  }
  return Number((conta * 1.1).toFixed(2));
}

const createMenu = (objeto) => {
  let res = {
    fetchMenu: () => objeto,
    consumption: [],
    order: (pedido) => {
      res.consumption.push(pedido);
    },
    pay: () => {
      let obFood = Object.entries(objeto.food);
      let obDrink = Object.entries(objeto.drinks);
      for (let i of res.consumption) {
        return aux(obFood, obDrink, i);
      }
    },
  };
  return res;
};

const meuRestaurante = createMenu({
  food: { coxinha: 3.90, sanduiche: 9.90 },
  drinks: { agua: 3.90, cerveja: 6.90 },
});

module.exports = { createMenu, meuRestaurante };
