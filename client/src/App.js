import './App.css';
import React from "react";
import Customer from './components/Customer';
import { Table,TableHead, TableBody,TableRow,TableCell, withStyles, Paper, CircularProgress} from "@material-ui/core";

const styles = theme => ({
  root : {
    width : '100%',
    marginTop : theme.spacing.unit * 3,
    overflowX : 'auto'
  },
  table :{
    minWidth : 1080
  },
  progress:{
    margin : theme.spacing.unit * 2
  }
})

// const customers = [{
//   'id' : 1,
//   'image' : 'https://placeimg.com/64/64/1',
//   'name' : '홍길동',
//   'br' : '910911',
//   'ge' : '남',
//   'job' : '의적'
// },
// {
//   'id' : 2,
//   'image' : 'https://placeimg.com/64/64/2',
//   'name' : '고길동',
//   'br' : '910911',
//   'ge' : '남',
//   'job' : '의적'
// },
// {
//   'id' : 3,
//   'image' : 'https://placeimg.com/64/64/3',
//   'name' : '김유신',
//   'br' : '910911',
//   'ge' : '남',
//   'job' : '의적'
// }]

class App extends React.Component {

  state ={
    customers : "",
    completed : 0
  }

  componentDidMount(){
    this.timer = setInterval(this.progress, 20);

  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const {completed} = this.state;
    this.setState({ completed : completed >= 100 ? 0 : completed +1});
  }

  render(){
    const {classes} = this.props;
    return (
      <div>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                    <TableCell>
                        번호
                    </TableCell>
                    <TableCell>
                        이미지
                    </TableCell>
                    <TableCell>
                        이름
                    </TableCell>
                    <TableCell>
                        생년월일
                    </TableCell>
                    <TableCell>
                        성별
                    </TableCell>
                    <TableCell>
                        직업
                    </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                this.state.customers ?
                this.state.customers.map(c=>{
                  return (
                    <Customer
                      key={c.id}
                      id={c.id}
                      image={c.image}
                      name={c.name}
                      br={c.br}
                      ge={c.ge}
                      job={c.job}
                      />
                  )
                }) : 
                <TableRow>
                  <TableCell colSpan="6" align="center">
                    <CircularProgress className={classes.progress} variant='determinate' value={this.state.completed}/>
                  </TableCell>
                </TableRow>
                }
              </TableBody>
            </Table>
          </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
