import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";

const About = withRouter(({history,match})=>{
    console.log(history);
    console.log(match);
    return <div><h1>About {match.params.text}</h1>
        <Button variant="contained" color="primary" onClick={()=>history.push("/")}>Go to front</Button>
    </div>
});

export default About;
