import React from 'react';

function Store({ setStores, stores }) {
  return (
    <>
      {stores.map((store) => (
        
        <tr key={store.id}>
          <td className="row-name">
            <span>{store.name}</span>
          </td>
          <td>
          <a href={store.url}>
            <img src={store.image} alt={store.name} style={{ maxWidth: '40px' }} />
          </a>           
          </td>
          <td>
            <span>{store.season}</span>
          </td>
          <td>
            <span>{store.episode}</span>
          </td>
        </tr>
        
      ))}
    </>
  );
}

export default Store;