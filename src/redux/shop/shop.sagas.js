import { takeEvery, call, put } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';


import { 
    fetchCollectionsSuccess, 
    fetchCollectionsFailure 
} from './shop.actions';
import ShopActionTypes from './shop.types';

export function* fetchCollectionAsync() {
    try{
        const collectionRef = firestore.collection('collections');
        const snapshop = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshop);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionStart() {
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START, 
        fetchCollectionAsync
        );
}