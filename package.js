Package.describe({
  name: 'leandrohubo:orion-lang-br',
  version: '1.3.0',
  summary: 'Orion Portuguese language',
  git: 'https://github.com/leandrohubo/orion-lang-br',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('orionjs:lang-en@1.3.0'); // This is the base language
  api.imply('orionjs:lang-en');

  api.addFiles('br.js');
});
