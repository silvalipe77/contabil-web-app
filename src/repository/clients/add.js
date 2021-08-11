export default function(client){
  const clients = JSON.parse((localStorage.getItem('@contabil/clients') || '[]'));

  client.id = clients.length

  clients.push(client);

  localStorage.setItem('@contabil/clients', JSON.stringify(clients));

  return client;
}
