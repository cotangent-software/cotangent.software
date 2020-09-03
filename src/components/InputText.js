import React from 'react';

function InputText({ required, onChange, placeholder, label, rows=null, cols=null, gutterBottom }) {
  const placeholderVal = placeholder + (required ? ' *' : '');
  
  let inputEl = <input type={'text'} placeholder={placeholderVal} onChange={onChange}/>;
  if(rows && cols) {
    inputEl = <textarea style={{ resize: 'none' }} rows={rows} cols={cols} placeholder={placeholderVal} onChange={onChange}/>
  }
  return (
    <div style={{ marginBottom: gutterBottom ? '10px' : 0}}>
      <label>
        { label }
        { inputEl }
      </label>
    </div>
  );
}

export default InputText;