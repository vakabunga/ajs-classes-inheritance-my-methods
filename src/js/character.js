export default class Character {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.health = 100;
    this.attack = 10;
    this.defence = 10;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('нельзя нанести повреждения мертвому');
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('нельзя повысить левел умершего');
    }
  }
}
