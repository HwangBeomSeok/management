import './App.css';
import React from "react";
import Customer from './components/Customer';
import { Table,TableHead, TableBody,TableRow,TableCell, withStyles, Paper} from "@material-ui/core";

const styles = theme => ({
  root : {
    width : '100%',
    marginTop : theme.spacing.unit *3,
    overflowX : 'auto'
  },
  table :{
    minWidth : 1080
  }
})

const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'br' : '910911',
  'ge' : '남',
  'job' : '의적'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '고길동',
  'br' : '910911',
  'ge' : '남',
  'job' : '의적'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '김유신',
  'br' : '910911',
  'ge' : '남',
  'job' : '의적'
}]

class App extends React.Component {
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
                customers.map(c=>{
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
                })
                }
              </TableBody>
            </Table>
          </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
