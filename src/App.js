import './App.css';
import Customer from './components/Customer';

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

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
