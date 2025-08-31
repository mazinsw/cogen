import { unixTransform } from '@/util/unix';

describe('Unix transform', () => {
  it('transform sentence to unix name', async () => {
    expect(unixTransform('TesteBom')).toBe('teste_bom');
    expect(unixTransform('TTesteBBom')).toBe('tteste_bbom');
    expect(unixTransform('Bom')).toBe('bom');
    expect(unixTransform('BBom')).toBe('bbom');
  });
});
