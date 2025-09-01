import { wrapText } from '@/util/helper';

describe('wrap text', () => {
  it('split text into multiple lines', async () => {
    expect(wrapText('Test wrap', 4)).toEqual(['Test', 'wrap']);
  });
  it('break word into multiple lines', async () => {
    expect(wrapText('Testwrap', 4)).toEqual(['Test', 'wrap']);
  });
  it('break word into another line', async () => {
    expect(wrapText('Teste ra', 4)).toEqual(['Test', 'e ra']);
  });
  it('break word into another line with many spaces', async () => {
    expect(wrapText('Tesste  ra', 5)).toEqual(['Tesst', 'e  ra']);
  });
  it('prefer another entire line', async () => {
    expect(wrapText('Teste wrap', 4)).toEqual(['Test', 'e', 'wrap']);
  });
});
