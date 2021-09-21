import {makeAutoObservable, runInAction} from "mobx"

const baseUrl = process.env.NODE_ENV === 'development' ?
    "http://localhost:8080/":""; //Check if dev environment

  class GiraffeStore {

    giraffes = ["Loading Girafess..."];
    state = [""];

      constructor(props) {
          makeAutoObservable(this,{},{autoBind:true});
          this.fetchGiraffes();
      }

      fetchGiraffes (){
          try{
              fetch(baseUrl + "rest/giraffes").then(
                  (response)=> response.json().then(
                      (json)=> runInAction(()=>this.giraffes=json),
                      this.state = "Loading"
                  )
              )
          } catch (error) {this.state = "Failed"}
      }
  }

export const giraffestore = new GiraffeStore();