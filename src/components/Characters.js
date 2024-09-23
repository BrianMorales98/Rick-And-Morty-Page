import React from 'react'

const Characters = ({ characters = [] }) => {
  return (
    <div className="row">
      {
        characters.map((item, index) => (
          <div key={index} className='col mb-4'>
            <div className="card" style={{ minWidth: "200px" }}>
              <img src={item.image} alt="Character pic"></img>
              <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
                <hr />
                <p> Status: {item.status}</p>
                <p> Specie:  {item.species}</p>
                <p> Location: {item.location.name}</p>
                <p> Origin:  {item.origin.name}</p>
               

              </div>
            </div>
          </div>

        ))}



    </div>
  )
}

export default Characters