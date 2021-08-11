export default function() {
  const clients = JSON.parse((localStorage.getItem('@contabil/clients') || '[]'));

  return clients;
}
