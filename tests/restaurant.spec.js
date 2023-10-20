const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // TESTE 1: Verifique que, dado um objeto qualquer passado como um parâmetro para a função createMenu(), checa se o retorno da função é um objeto no seguinte formato: { fetchMenu: objetoQualquer }.
    // ```
    // createMenu(objetoQualquer) // Retorno: { fetchMenu: objetoQualquer }
    // ```
    const object = {
      food: { coxinha: 3.9, sanduiche: 9.9 },
      drinks: { agua: 3.9, cerveja: 6.9 },
    };
    const menuTest = createMenu(object);
    const { fetchMenu } = createMenu(object);
    assert.strictEqual(fetchMenu, object);
    // Agora faça o PASSO 1 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 2: Verifique que, dado que a função createMenu foi chamada com o objeto: `{ food: {}, drink: {} }`, verifique que 'objetoRetornado.fetchMenu' retorna um objeto cujas chaves são somente `food` e `drink`.
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.fetchMenu // Retorno: { food: {}, drink: {}}

    assert.deepStrictEqual(createMenu({ food: {}, drink: {} }).fetchMenu, {
      food: {},
      drink: {},
    });

    // ```
    // Agora faça o TESTE 3 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 3: Verifique que o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.fetchMenu // Retorno: objetoQualquer

    const objectForCompare1 = createMenu(object).fetchMenu;
    assert.deepStrictEqual(objectForCompare1, object);
    // ```
    // Agora faça o TESTE 4 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 4: Verifique que 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.consumption // Retorno: []

    const objectForCompare2 = createMenu({}).consumption;
    assert.deepStrictEqual(objectForCompare2, []);
    // ```
    // Agora faça o PASSO 2 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 5: Verifique que chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro, como `objetoRetornado.order('coxinha')`, tal string é adicionada ao array retornado em `objetoRetornado.consumption
    // ```;
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.order("coxinha");
    // objetoRetornado.comsuption // Retorno: ["coxinha"]
    menuTest.order('coxinha');
    assert.deepStrictEqual(menuTest.consumption, ['coxinha']);
    // ```
    // Agora faça o PASSO 3 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 6: Verifique que as três orders seguintes, de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.
    // ```
    // objetoRetornado.order("coxinha");
    // objetoRetornado.order("agua");
    // objetoRetornado.order("sopa");
    // objetoRetornado.order("sashimi");
    // objetoRetornado.consumption // Retorno: ["coxinha", "agua", "sopa", "sashimi"]
    menuTest.order('agua');
    menuTest.order('cerveja');
    menuTest.order('sanduiche');
    assert.deepStrictEqual(menuTest.consumption, [
      'coxinha',
      'agua',
      'cerveja',
      'sanduiche',
    ]);
    // ```
    // Agora faça o TESTE 7 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 7: Verifique que a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    // ```
    // objetoRetornado.order('coxinha');
    // objetoRetornado.order('agua');
    // objetoRetornado.order('coxinha');
    // objetoRetornado.comsuption // Retorno: ['coxinha', 'agua', 'coxinha']
    menuTest.order('agua');
    assert.deepStrictEqual(menuTest.consumption, [
      'coxinha',
      'agua',
      'cerveja',
      'sanduiche',
      'agua',
    ]);
    // ```
    // Agora faça o TESTE 8 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 8: Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    // ```
    // objetoRetornado.order('coxinha');
    // objetoRetornado.order('agua');
    // objetoRetornado.order('coxinha');
    // objetoRetornado.pay() // Retorno: somaDosPreçosDosPedidos
    assert.strictEqual(menuTest.pay(), '31.35');
    // ```
    // Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
  });
});

