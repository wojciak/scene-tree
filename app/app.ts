class App {
    constructor() {

    }
}

let app = new App();

export {app}

/**
 * Scene graph (parent/child trees), each state node can be the root of a new leaf
 * FSM - each scene can have a defined set of state transitions(actions), the actions propagate down the tree
 */