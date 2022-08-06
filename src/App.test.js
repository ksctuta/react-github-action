import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  // App 컴포넌트 랜더링
  render(<App />);
  // screen object를 이용해 원하는 엘리먼트에 접근 (접근할때 ID로 접근)
  const counterElement = screen.getByTestId('counter');
  // id가 counter인 엘리먼트가 0인지 테스트
  expect(counterElement).toHaveTextContent(0);
});

test("minus button has correct text", () =>{
  // App 컴포넌트 랜더링
  render(<App />);
  // screen object를 이요해서 원하는 엘리먼트에 접근 (접근할때 ID로 접근)
  const buttonElement = screen.getByTestId('minus-button');
  // 버튼에 - 인지 확인
  expect(buttonElement).toHaveTextContent("-");
})

test("plus button has correct text", () =>{
  // App 컴포넌트 랜더링
  render(<App />);
  // screen object를 이용해서 원하는 엘리먼트에 접근 (접근할때 ID로 접근)
  const buttonElement = screen.getByTestId('plus-button');
  // 버튼에 + 인지 확인
  expect(buttonElement).toHaveTextContent("+");
})

test("When the + button is pressed, the counter changes to +1", () =>{
  // App 컴포넌트 랜더링
  render(<App />);
  // screen object를 이용해서 원하는 엘리먼트에 접근 (접근할때 ID로 접근)
  const buttonElement = screen.getByTestId('plus-button');

  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");

  // 버튼이 클릭됬을때 숫자 올라갔는지 확인
  expect(counterElement).toHaveTextContent(1);
})

test("When the - button is pressed, the counter changes to -1", () =>{
  // App 컴포넌트 랜더링
  render(<App />);
  // screen object를 이용해서 원하는 엘리먼트에 접근 (접근할때 ID로 접근)
  const buttonElement = screen.getByTestId('minus-button');

  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");

  // 버튼이 클릭됬을때 숫자 내려갔는지 확인
  expect(counterElement).toHaveTextContent(-1);
})

test("on/off button has blue color", () =>{
  // App 컴포넌트 랜더링
  render(<App />);
  // screen object를 이용해서 원하는 엘리먼트에 접근 (접근할때 ID로 접근)
  const buttonElement = screen.getByTestId('on/off-button');

  // style background blue인지 확인
  expect(buttonElement).toHaveStyle({backgroundColor: 'blue'});
})

test("Prevent the -,+ button from being presse when the on/off button is clicked", () =>{
  // App 컴포넌트 랜더링
  render(<App />);
  // screen object를 이용해서 원하는 엘리먼트에 접근 (접근할때 ID로 접근)
  const onOffElement = screen.getByTestId('on/off-button');

  fireEvent.click(onOffElement);
  // plus 버튼 
  const plusButtonElement = screen.getByTestId('plus-button');

  // 버튼에 비활성화 되었는지
  expect(plusButtonElement).toBeDisabled()
})
