import React from 'react'
import Select from 'react-select'
import "./style.css"


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
      padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 100,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }
  
//    <Select styles={customStyles} options={options} />


class App extends React.Component  {
  render() {  
    return (
<div id="menu">  
<Select           defaultValue={options[0]}
 options={options} />
</div>       
       )
  }
}

export default App;         
