export default function() {
  const merchandises = JSON.parse((localStorage.getItem('@contabil/merchandises') || '[]'));

  return merchandises;
}
