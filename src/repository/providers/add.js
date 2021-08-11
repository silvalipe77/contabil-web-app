export default function(provider){
  const providers = JSON.parse((localStorage.getItem('@contabil/providers') || '[]'));

  provider.id = providers.length

  providers.push(provider);

  localStorage.setItem('@contabil/providers', JSON.stringify(providers));

  return provider;
}
