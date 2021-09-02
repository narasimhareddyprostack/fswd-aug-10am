class Component {
  constructor() {
    console.log("Parent class Constructor");
  }
}
class Navbar extends Component {
  constructor() {
    super();
    console.log("Child Class Constrctor");
  }
}
new Navbar();
