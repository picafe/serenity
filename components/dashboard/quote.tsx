"use client";

import {useEffect, useState} from 'react';

export default function Quote() {

  const api = `https://api.quotable.io/quotes/random?limit=1&maxLength=175&tags=courage|self-help|motivational|happiness|inspirational|famous-quotes`;

  const [imgUrl, setImgUrl] = useState<string>("");

  useEffect(() => {
    const getQuotes = async () => {
        try {
            const response = await fetch(api);
            const data = await response.json();
            const url = `http://localhost:3001/api/quote?title=${data[0].content}&author=${data[0].author}`;
            setImgUrl(url);
            console.log(data[0])
        } catch (error) {
          console.error('Error fetching JSON data:', error);
        }
    }
    getQuotes();
  },[]);
  

  return (
    <div>
      <div className='rounded-lg'>
        <img src={imgUrl} alt="" />
      </div>
    </div>
  )
} 