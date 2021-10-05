import {makeAutoObservable, observable, runInAction} from "mobx"

const baseUrl = process.env.NODE_ENV === 'development' ?
    "http://localhost:8080/":""; //Check if dev environment

class GiraffeStore {

    giraffes = ["Loading Giraffes..."];
    state = [""];


    constructor(props) {
        makeAutoObservable(this,{giraffes: observable},{autoBind:true});
        this.fetchGiraffes();
    }

    state = "Loading"

    fetchGiraffes (){
            fetch(baseUrl + "rest/giraffes").then(
                (response)=>
                {
                response.json().then(
                    (json)=> runInAction(()=>this.giraffes=json)
                        .then(this.state = "Done")
                        .catch(this.state = "Failed")
                )}
            )
    }

    postGiraffess (newGiraffe) {
        fetch(baseUrl + "rest/giraffes", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(newGiraffe)
        }).then(response => response.json())
            .then( response => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
            .then(this.fetchGiraffes()
        )}

   // postGiraffess (newGiraffe) {
      //  fetch(baseUrl + "rest/giraffes", {
        //    method: 'post',
          //  headers: {
            //    'Content-Type': 'application/json',
              //  'Accept': 'application/json',
           // },
           // body: JSON.stringify(newGiraffe)
       // }).then(function (response) {
         //   return response.json();
       // }).then(this.fetchGiraffes()
       // )}


}

export const giraffestore = new GiraffeStore();