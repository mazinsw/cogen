import { Configuration } from '@/util/configuration';
import { normalize } from '@/util/normalize';

describe('Normalization', () => {
  it('normalize pt-BR words from dictionary', async () => {
    const dictionary = new Configuration()
      .setDictionary('oes|aes/3/ao;is/2/l/4;res|ses/2/;es|as|os|ds/1/;ns/2/m')
      .getDictionary();

    expect(normalize('TestesBons', dictionary)).toBe('TesteBom');
    expect(normalize('testes_bons', dictionary)).toBe('TesteBom');
    expect(normalize('TUsuarios', dictionary)).toBe('Usuario');
    expect(normalize('Matriz1_2', dictionary)).toBe('Matriz[1][2]');
    expect(normalize('Vetor1', dictionary)).toBe('Vetor[1]');
    expect(normalize('Ident1Teste', dictionary)).toBe('Ident[1].Teste');
    expect(normalize('Ident1Teste2', dictionary)).toBe('Ident[1].Teste[2]');
    expect(normalize('Ident1_2_Teste', dictionary)).toBe('Ident[1][2].Teste');

    expect(normalize('Ident1_2teste_3_4_5Teste', dictionary)).toBe(
      'Ident[1][2].Teste[3][4][5].Teste',
    );
    expect(normalize('Ident1_2teste_a_aaaa3_4_5TeBste', dictionary)).toBe(
      'Ident[1][2].TesteAAaaa[3][4][5].TeBste',
    );
  });
});
