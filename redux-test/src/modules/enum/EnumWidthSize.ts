export enum EnumWidthSize {
  w2 = '2%',
  w3 = '3%',
  w4 = '4%',
  w5 = '5%',
  w8 = '8%',
  w7 = '7%',
  w10 = '10%',
  w11 = '11%',
  w15 = '15%',
  w20 = '20%',
  w25 = '25%',
  w30 = '30%',
  w33 = '33%',
  w35 = '35%',
  w40 = '40%',
  w45 = '45%',
  w50 = '50%',
  w55 = '55%',
  w60 = '60%',
  w65 = '65%',
  w70 = '70%',
  w75 = '75%',
  w80 = '80%',
  w85 = '85%',
  w90 = '90%',
  w95 = '95%',
  w100 = '100%',
  wMax = 'max-content',
}

export function getEnumWidthFromPercentUp(n: number): EnumWidthSize {
  const valores = Object.values(EnumWidthSize)
    .map((v) => Number(v.replace('%', '')))
    .sort((a, b) => a - b);

  // tenta achar o primeiro valor MAIOR ou igual
  const maiorOuIgual = valores.find((v) => v >= n);

  // se não achar, pega o maior de todos
  const final = maiorOuIgual ?? valores[valores.length - 1];

  return EnumWidthSize[`w${final}` as keyof typeof EnumWidthSize];
}
