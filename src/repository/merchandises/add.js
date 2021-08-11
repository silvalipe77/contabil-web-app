export default function(merchandise){
  const merchandises = JSON.parse((localStorage.getItem('@contabil/merchandises') || '[]'));

  merchandise.id = merchandises.length

  merchandises.push(merchandise);

  localStorage.setItem('@contabil/merchandises', JSON.stringify(merchandises));

  return merchandise;
}
