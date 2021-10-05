import './App.css';
import Button from "@material-ui/core/Button";
import {TextField} from "@material-ui/core";
import {classes} from "istanbul-lib-coverage";
import {giraffestore} from "./GiraffeStore";
import { observer } from "mobx-react-lite";

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <h1>State: {giraffestore.state}</h1>
                <div>
                    <Button onClick={()=>giraffestore.postGiraffess("Karsten")}>Tilføj giraf</Button>
                    <h1></h1>
                </div>
                <div>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="filled-basic" label="Filled" variant="filled" />
                    </form>
                </div>
                <h1></h1>
                <div>
                    <ul>
                        {giraffestore.giraffes.map((giraffeName,key)=>
                            <li key={key}>{giraffeName}</li>
                        )}
                    </ul>
                </div>
            </header>
        </div>

    );
}

export default observer(App);
