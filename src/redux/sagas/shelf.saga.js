import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* fetchShelf() {
  try {
    



    //TODO: create a get route to get shelf items 
   const shelfitems = yield axios.get('/api/shelf');

    // automatically log a user in after registration
    yield put({ type: 'SET_SHELF', payload: shelfitems.data });

   
    
  } catch (error) {
    console.log('Error with getting items from shelf:', error);
  }
}

function* deleteItem(action) {
    try {
        yield axios.delete(`/api/shelf/${action.payload.id}`, action.payload)
        
        yield put({
            type: 'FETCH_SHELF'
        })
    } catch (error) {
        console.log('Error with delete items from shelf:', error);
    }
}

function* shelfSaga() {
  yield takeLatest('FETCH_SHELF', fetchShelf);
  yield takeLatest('DELETE_ITEM', deleteItem)
}

export default shelfSaga;