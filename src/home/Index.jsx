import {
  Container,Content, ContainerInput, ContainerButtons, DivButton
} from './styled';
import Input from '../components/Input';
import Button from '../components/Button';
import { useState } from 'react';

function Home() {

  const [number, setNumber] = useState ('')
  let numbers = [];
  let firtNumber;
  let secondNumber;
  let sum;
  let result = '';
  

  function addNumberInput (num) {
    if(num === 'c'){
      setNumber('')
      return
    }
  
    setNumber(number + num)
    if(num === '='){
      numbers.push(number)
      let array = numbers[0].split('');

      let addition = array.indexOf('+');
      let subtraction = array.indexOf('-')
      let multiplication = array.indexOf('.')
      let division = array.indexOf('/')
      
      if (addition > 0){
        oparation('+', array)
        sum = Number(firtNumber) + Number(secondNumber);
      }
      if (subtraction > 0){
        oparation('-', array)
        sum = Number(firtNumber) - Number(secondNumber);
      }
      if (multiplication > 0){
        oparation('*', array)
        sum = Number(firtNumber) * Number(secondNumber);
      }
      if (division > 0){
        oparation('/', array)
        sum = Number(firtNumber) / Number(secondNumber);
      }
      
      result = sum.toString()
      
      setNumber(number + '=' + result)

    }

  }

  function oparation (oparation, arr) {
      let index = arr.indexOf(oparation)
      let arrayLength = arr.length;

      firtNumber = arr.slice(0, index).join('')
      secondNumber = arr.slice(index + 1, arrayLength ).join('')
  }


  return (
    <Container>
     <Content>
      <ContainerInput>
        <Input number={number}/>
      </ContainerInput>
      <ContainerButtons>
        <DivButton>
          <Button
           label='x'
           addNumberInput={addNumberInput}
          />
          <Button
           label='/'
           addNumberInput={addNumberInput}
          />
          <Button
           label='c'
           addNumberInput={addNumberInput}
          />
          <Button
           label='*'
           addNumberInput={addNumberInput}
          />
        </DivButton>
        <DivButton>
        <Button
           label='7'
           addNumberInput={addNumberInput}
          />
          <Button
           label='8'
           addNumberInput={addNumberInput}
          />
          <Button
           label='9'
           addNumberInput={addNumberInput}
          />
          <Button
           label='-'
           addNumberInput={addNumberInput}
          />
        </DivButton>
        <DivButton>
        <Button
           label='4'
           addNumberInput={addNumberInput}
          />
          <Button
           label='5'
           addNumberInput={addNumberInput}
          />
          <Button
           label='6'
           addNumberInput={addNumberInput}
          />
          <Button
           label='+'
           addNumberInput={addNumberInput}
          />
        </DivButton>
        <DivButton>
        <Button
           label='1'
           addNumberInput={addNumberInput}
          />
          <Button
           label='2'
           addNumberInput={addNumberInput}
          />
          <Button
           label='3'
           addNumberInput={addNumberInput}
          />
          <Button
           label='='
           addNumberInput={addNumberInput}
          />
        </DivButton>
      </ContainerButtons>
     </Content>
    </Container>
  )
}

export default Home;
