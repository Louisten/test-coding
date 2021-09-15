import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [number, setNumber] = useState('');
  // const [initial, setInitial] = useState('');

  useEffect(() => {
    urutanAngka(6);
  });

  function urutanAngka(n) {
    let a = 1;
    let b = 1;
    let counterTotal = 0;

    const Fibonaci = () => {
      let hasil = 0;
      if (counterTotal < 2) {
        hasil = a;
      } else {
        hasil = a + b;
        a = b;
        b = hasil;
      }
      counterTotal++;
      return hasil;
    };

    const Result = (n) => {
      const arrayDimensi = [n];
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (i == 0 || i == n / 2 || i == n - 1) {
            arrayDimensi[i][j] = Fibonaci();
          } else if (j == n - 1 && i < n / 2) {
            arrayDimensi[i][j] = Fibonaci();
          } else if (j == 0 && i > n / 2) {
            arrayDimensi[i][j] = Fibonaci();
          } else {
            arrayDimensi[i][j] = 0;
          }
        }
      }

      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (arrayDimensi[j][i] == 0) {
            console.info('\t');
          } else {
            console.info(arrayDimensi[j][i] + '\t');
          }
        }
        console.info('\n');
      }
      return arrayDimensi;
    };

    console.log(Result(6));
  }

  return (
    <div className="App">
      {/* <input value={initial} onChange={(value) => setInitial(value)} /> */}
      <br />
      {number}
      <br />
    </div>
  );
}

export default App;
