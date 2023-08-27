import React from 'react'

function TopButtons({setQuery}) {


  const cities =[
    {
      id:1,
      title: "london"
    },
    {
      id:2,
      title: "sydney"
    },
    {
      id:3,
      title: "Tokyo"
    },
    {
      id:4,
      title: "Toronto"
    },
    {
      id:5,
      title: "paris"
    },
  ];

  return( <div  className="flex items-center justify-around my-6">
    {cities.map((city) =>(

      <button key={city.id} className="text-white text-lg font-med"
      onClick={() => setQuery({ q: city.title })}
      >

      {city.title}
      </button>
    ))}
  </div>
  );
}

export default TopButtons;