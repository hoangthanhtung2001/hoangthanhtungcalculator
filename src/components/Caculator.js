import React from 'react'

const Caculator = ({number,setValue,value,cal,cal2}) => {
  console.log(typeof value)
      const handleClick =(buttonName)=>{
          switch (buttonName) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '+':
            case '-':
            case '/':
            case '*':
              if (value=== "0") {
                setValue(buttonName);
              } else {
                setValue(prev=>prev+buttonName);
              }
              break;
            case '.':
              if(value==="0"){
                setValue("0.")
              }
              else{
                setValue(prev=>prev+".")
              }
              break;
            case '=':
              //todo add a regex test to see if the statment is correct before passing it to eval
              //todo limit the result  to 14
              console.log(value);
              setValue(eval(value))
              break;
            case 'AC':
              setValue("0")
              break;
            case '+/-':
              setValue(prev=> parseInt(prev,10)*-1);
              break;
            case '%':
              setValue(prev=> parseFloat(prev,10)/100);
              break;
            default:
              break;
          }
      
      }
      
  return (
    <div className='container'>
        <div className='left'>
            <div className='btn-cal'>
                  {/* <button onClick={()=>handleClick("AC")}>AC</button>
                  <button onClick={()=>handleClick("+/-")}>+/-</button>
                  <button onClick={()=>handleClick("%")}>%</button> */}
                  {
                    Object.keys(cal).map(key=>(
                      <button key={key} onClick={()=>handleClick(cal[key])}>{cal[key]}</button>
                    ))
                  }
                </div>
            <div className='number'>
              {
                Object.keys(number).map(key=>(
                  <button key={key} name={number[key]} onClick={()=>handleClick(number[key]+"")}>{number[key]}</button>
                ))
              }
            </div>
            
        </div>
        <div className='right'>
          {/* <button>÷</button>
          <button>X</button>
          <button>-</button>
          <button>+</button>
          <button>=</button> */}
              {
                Object.keys(cal2).map(key=>(
                    <button key={key}  onClick={()=>handleClick(cal2[key])}>{cal2[key]}</button>
                ))
              }
        </div>
    </div>
  )
}

export default Caculator