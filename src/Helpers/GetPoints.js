const nominations = {
  hola: 3,
  bola: 4,
  'mejor Actor': 10,
  'mejor cancion': 1,
};

/**
 * @param {BigInteger} nomination
 */
export default function getPoints(nomination) {
  if (nominations[nomination] === !null) {
    return nominations[nomination];
  }
  return 0;
}
