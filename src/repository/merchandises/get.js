export default function(id){
  const merchandises = JSON.parse((localStorage.getItem('@contabil/merchandises') || '[]'));

  const merchandise = merchandises.find(merchandise => merchandise.id == id);

  return merchandise;
}
