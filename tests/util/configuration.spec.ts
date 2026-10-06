import { Configuration } from '@/util/configuration';

describe('Configuration', () => {
  it('accept all tables by default', () => {
    const config = new Configuration();
    expect(config.acceptsTable('users')).toBe(true);
    expect(config.getFilterTables()).toEqual([]);
    expect(config.getExcludeTables()).toEqual([]);
  });

  it('parse comma separated table lists', () => {
    const config = new Configuration()
      .setFilterTables(' Users, ,products,')
      .setExcludeTables('ORDERS');
    expect(config.getFilterTables()).toEqual(['users', 'products']);
    expect(config.getExcludeTables()).toEqual(['orders']);
  });

  it('append repeated lists', () => {
    const config = new Configuration()
      .setFilterTables('users')
      .setFilterTables('products');
    expect(config.getFilterTables()).toEqual(['users', 'products']);
  });

  it('accept only filtered tables not excluded', () => {
    const config = new Configuration()
      .setFilterTables('users,products')
      .setExcludeTables('products');
    expect(config.acceptsTable('Users')).toBe(true);
    expect(config.acceptsTable('products')).toBe(false);
    expect(config.acceptsTable('orders')).toBe(false);
  });

  it('reject excluded tables without filter', () => {
    const config = new Configuration().setExcludeTables('orders');
    expect(config.acceptsTable('users')).toBe(true);
    expect(config.acceptsTable('Orders')).toBe(false);
  });
});
