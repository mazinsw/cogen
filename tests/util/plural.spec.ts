import { Configuration } from '@/util/configuration';
import { despluralize, pluralize } from '@/util/plural';

describe('Plural', () => {
  it('despluralize pt-BR words from dictionary', async () => {
    const dictionary = new Configuration()
      .setDictionary('oes|aes/3/ao;is/2/l/4;res|ses/2/;es|as|os|ds/1/;ns/2/m')
      .getDictionary();

    expect(despluralize('Testes', dictionary)).toBe('Teste');
    expect(despluralize('Configuracoes', dictionary)).toBe('Configuracao');
    expect(despluralize('Mesas', dictionary)).toBe('Mesa');
    expect(despluralize('Pratos', dictionary)).toBe('Prato');
    expect(despluralize('Bons', dictionary)).toBe('Bom');
    expect(despluralize('Paises', dictionary)).toBe('Pais');
    expect(despluralize('Canais', dictionary)).toBe('Canal');
    expect(despluralize('Paes', dictionary)).toBe('Pao');
    expect(despluralize('Downloads', dictionary)).toBe('Download');
  });

  it('despluralize en-US words from dictionary', async () => {
    const dictionary = new Configuration()
      .setDictionary('ies/3/y;s/1/')
      .getDictionary();

    expect(despluralize('Companies', dictionary)).toBe('Company');
    expect(despluralize('Users', dictionary)).toBe('User');
    expect(despluralize('Cards', dictionary)).toBe('Card');
  });
});

describe('Pluralize', () => {
  it('pluralize en words', () => {
    expect(
      ['category', 'post', 'box', 'day', 'match'].map((w) =>
        pluralize(w, 'en'),
      ),
    ).toEqual(['categories', 'posts', 'boxes', 'days', 'matches']);
  });

  it('pluralize pt-BR words', () => {
    expect(
      ['opcao', 'papel', 'cidade', 'item', 'cor', 'funil'].map((w) =>
        pluralize(w, 'pt-BR'),
      ),
    ).toEqual(['opcoes', 'papeis', 'cidades', 'itens', 'cores', 'funis']);
  });
});
