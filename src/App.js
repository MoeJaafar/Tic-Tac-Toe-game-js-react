//Written by Mohammad Jaafar 7/8/2021
//TicTacToe game based on react js
import './App.css';
let k=0;

function change1()
{
    let btn = document.getElementById("Button1");
    btn.value = "meow";
        if( btn.innerHTML=== "" ) {
            if (k % 2 === 1) {
                btn.innerHTML = 'O';
                btn.className = "oStyle";
            } else {btn.innerHTML = 'X';
                     btn.className = "xStyle"; }

            k++;
            console.log(k)
        }

}
function change2()
{
    let btn = document.getElementById("Button2");
    btn.value = "meow";
    if( btn.innerHTML=== "" ) {
        if (k % 2 === 1) {
            btn.innerHTML = 'O';
            btn.className = "oStyle";
        } else {btn.innerHTML = 'X';
            btn.className = "xStyle"; }
        k++;
        console.log(k)
    }
}
function change3()
{
    let btn = document.getElementById("Button3");
    btn.value = "meow";
    if( btn.innerHTML=== "" ) {
        if (k % 2 === 1) {
            btn.innerHTML = 'O';
            btn.className = "oStyle";
        } else {btn.innerHTML = 'X';
            btn.className = "xStyle"; }
        k++;
        console.log(k)
    }
}
function change4()
{
    let btn = document.getElementById("Button4");
    btn.value = "meow";
    if( btn.innerHTML=== "" ) {
        if (k % 2 === 1) {
            btn.innerHTML = 'O';
            btn.className = "oStyle";
        } else {btn.innerHTML = 'X';
            btn.className = "xStyle"; }
        k++;
        console.log(k)
    }
}
function change5()
{
    let btn = document.getElementById("Button5");
    btn.value = "meow";
    if( btn.innerHTML=== "" ) {
        if (k % 2 === 1) {
            btn.innerHTML = 'O';
            btn.className = "oStyle";
        } else {btn.innerHTML = 'X';
            btn.className = "xStyle"; }
        k++;
        console.log(k)
    }
}
function change6()
{
    let btn = document.getElementById("Button6");
    btn.value = "meow";
    if( btn.innerHTML=== "" ) {
        if (k % 2 === 1) {
            btn.innerHTML = 'O';
            btn.className = "oStyle";
        } else {btn.innerHTML = 'X';
            btn.className = "xStyle"; }
        k++;
        console.log(k)
    }
}
function change7()
{
    let btn = document.getElementById("Button7");
    btn.value = "meow";
    if( btn.innerHTML=== "" ) {
        if (k % 2 === 1) {
            btn.innerHTML = 'O';
            btn.className = "oStyle";
        } else {btn.innerHTML = 'X';
            btn.className = "xStyle"; }
        k++;
        console.log(k)
    }
}
function change8()
{
    let btn = document.getElementById("Button8");
    btn.value = "meow";
    if( btn.innerHTML=== "" ) {
        if (k % 2 === 1) {
            btn.innerHTML = 'O';
            btn.className = "oStyle";
        } else {btn.innerHTML = 'X';
            btn.className = "xStyle"; }
        k++;
        console.log(k)
    }
}
function change9()
{
    let btn = document.getElementById("Button9");
    btn.value = "meow";
    if( btn.innerHTML=== "" ) {
        if (k % 2 === 1) {
            btn.innerHTML = 'O';
            btn.className = "oStyle";
        } else {btn.innerHTML = 'X';
            btn.className = "xStyle"; }
        k++;
        console.log(k)
    }
}

function App() {
  return (
      <div className={"App"}>
          <div className={"tictactoe"}>
              <div className={"row"}>
    <button onClick={change1} className={"buttonStyle"} id={"Button1"}></button>
    <button onClick={change2} className={"buttonStyle"} id={"Button2"}></button>
    <button onClick={change3} className={"buttonStyle"} id={"Button3"}></button>
              </div>
              <div className={"row"}>
                  <button onClick={change4} className={"buttonStyle"} id={"Button4"}></button>
                  <button onClick={change5} className={"buttonStyle"} id={"Button5"}></button>
                  <button onClick={change6} className={"buttonStyle"} id={"Button6"}></button>
              </div>
              <div className={"row"}>
                  <button onClick={change7} className={"buttonStyle"} id={"Button7"}></button>
                  <button onClick={change8} className={"buttonStyle"} id={"Button8"}></button>
                  <button onClick={change9} className={"buttonStyle"} id={"Button9"}></button>
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <div className={"row"}>
                  <div className={"info"}>Tic Tac Toe By Moe Jaafar</div>
              </div>
          </div>

      </div>
  );
}

export default App;
