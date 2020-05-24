import Character from '../character';

describe('Character:', () => {
  test('should create a new Character', () => {
    const result = new Character('vaka');
    expect(result).toEqual({
      name: 'vaka',
      level: 1,
      health: 100,
      attack: 10,
      defence: 10,
    });
  });
  test('should get damage to Character and reduce health', () => {
    const result = new Character('vaka');
    result.damage(100);
    expect(result).toEqual({
      name: 'vaka',
      level: 1,
      health: 10,
      attack: 10,
      defence: 10,
    });
  });
  test('should increase level, attack and defence of Character and restore health to max', () => {
    const result = new Character('vaka');
    result.levelUp();
    expect(result).toEqual({
      name: 'vaka',
      level: 2,
      health: 100,
      attack: 12,
      defence: 12,
    });
  });
  test('should throw error if Character has health = 0 on levelUp', () => {
    function throwError() {
      const vaka = new Character('vaka');
      vaka.health = 0;
      vaka.levelUp();
    }
    expect(throwError).toThrow();
  });
  test('should throw error if Character has health = 0 on levelUp', () => {
    function throwError() {
      const vaka = new Character('vaka');
      vaka.health = 0;
      vaka.damage(1);
    }
    expect(throwError).toThrow();
  });
});
