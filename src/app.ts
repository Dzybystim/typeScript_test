
 class Key {

 }



abstract class Plane {
    door: boolean
    key = new Key()

    constructor (key: boolean) {
        this.key = key;
      }
}
