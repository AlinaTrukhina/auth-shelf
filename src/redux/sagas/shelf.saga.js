import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* fetchShelf(action) {
  try {
    



    //TODO: create a get route to get shelf items 
   const shelfitems = yield axios.get('/api/shelf');

    // automatically log a user in after registration
    yield put({ type: 'SET_SHELF', payload: shelfitems.data });

   
    
  } catch (error) {
    console.log('Error with getting items from shelf:', error);
  }
}

function* shelfSaga() {
  yield takeLatest('FETCH_SHELF', fetchShelf);
}

export default shelfSaga;