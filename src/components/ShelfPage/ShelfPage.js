import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

function ShelfPage() {

  const dispatch = useDispatch();
  const shelf = useSelector((store) => store) //TODO: need to get shelf not store

  useEffect(() => {

    dispatch({
      type: "FETCH_SHELF"
    })

  }, [])


  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <ul>
        {shelf.map((shelfItem) => (
          <li key={shelfItem.id}>
            <img src={shelfItem.image_url} />
            {shelfItem.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShelfPage;
