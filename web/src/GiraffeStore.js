import {makeAutoObservable, observable, runInAction} from "mobx"

const baseUrl = process.env.NODE_ENV === 'development' ?
    "http://localhost:8080/":""; //Check if dev environment

class GiraffeStore {

    giraffes = ["Loading Giraffes..."];
    state = [""];


    constructor(props) {
        makeAutoObservable(this,{giraffes: observable},{autoBind:true});
        this.fetchGiraffesJS();
    }

    state = "Loading"

    fetchGiraffes (){
            fetch(baseUrl + "rest/giraffes").then(
                (response)=>
                {
                response.json().then(
                    (json)=> runInAction(()=>this.giraffes=json)
                        .then(this.state = "Doneeee")
                        .catch(this.state = "Failed")
                )}
            )
    }

    fetchGiraffesJS () {
        fetch("http://localhost:8080/rest/giraffes/query").then((res)=>console.log(res.status))
    }

}

export const giraffestore = new GiraffeStore();