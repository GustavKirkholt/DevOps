import {makeAutoObservable, runInAction} from "mobx"

const baseUrl = process.env.NODE_ENV === 'development' ?
    "http://localhost:8080/":""; //Check if dev environment

  class GiraffeStore {

    giraffes = ["Loading Girafess..."];

      constructor(props) {
          makeAutoObservable(this,{},{autoBind:true});
          this.fetchGiraffes();
      }

      fetchGiraffes (){
          fetch(baseUrl + "rest/giraffes").then(
              (response)=> response.json().then(
                  (json)=> runInAction(()=>this.giraffes=json)
              )
          )
      }
  }

export const giraffestore = new GiraffeStore();