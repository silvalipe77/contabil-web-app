export default function(id, merchandise){
  const merchandises = JSON.parse((localStorage.getItem('@contabil/merchandises') || '[]'));

  const index = merchandises.indexOf(merchandises.find(merchandise => merchandise.id == id));

  merchandises[index] = merchandise;

  localStorage.setItem('@contabil/merchandises', JSON.stringify(merchandises));

  return merchandise;
}
