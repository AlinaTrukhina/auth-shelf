import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

function ShelfPage() {

  const dispatch = useDispatch();
  const shelf = useSelector((store) => store.shelf);
  const user = useSelector((store) => store.user);
  useEffect(() => {

    dispatch({
      type: "FETCH_SHELF"
    });

  }, []);

  const deleteItem = (shelfItem) => {

    dispatch({
      type: 'DELETE_ITEM',
      payload: shelfItem
    });

  }


  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <ul>
        {shelf.map((shelfItem) => (
          <li key={shelfItem.id}>
            {shelfItem.description}
            <img src={shelfItem.image_url} alt="" />

            {user.id === shelfItem.user_id && <button onClick={() => {deleteItem(shelfItem)}}>Delete</button>}
              
          </li>
         
        ))}
      </ul>
    </div>
  );
}

export default ShelfPage;
