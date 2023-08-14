'use client';

import { useState } from 'react';
import ReactCalendar from 'react-calendar';
import  TipTap  from './editor.jsx';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Calendar() {
  const [value, onChange] = useState<Value>(new Date());
  const [showEditor, setShowEditor] = useState<boolean>(false);

  function getFormattedDate(date: any) {
    var year = date.getFullYear();
  
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return month + '/' + day + '/' + year;
  }
  

  return (
    <div>
     {showEditor ?
     <TipTap date={getFormattedDate(value)}/> :
     <ReactCalendar
      onChange={onChange}
      onClickDay={() => setShowEditor((prev) => !prev)}
      value={value} 
    />}
    </div>
  );
}
//oh... huh