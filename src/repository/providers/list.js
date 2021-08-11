export default function() {
  const providers = JSON.parse((localStorage.getItem('@contabil/providers') || '[]'));

  return providers;
}
