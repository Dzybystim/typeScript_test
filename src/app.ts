function merge<T extends object, U extends object> (objA: T , objB: U) {
  return Object.assign(objA, objB);
}

class Component {
  constructor (public props:T) {

  }
}

class Page extends Component {
  pageInfo () {
    console.log(this.props.title);
  }
}
