import {action, makeObservable, observable} from "mobx"

  class GiraffeStore {

    giraffes = ["Marius","Melman"];

    constructor(){
        makeObservable(this, {giraffes: observable, addGiraffe: action}
            );
    }
    addGiraffe(nickName) {
        this.giraffes.push(nickName);
    }
}

export const giraffestore = new GiraffeStore();