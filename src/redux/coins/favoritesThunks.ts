import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { setFavorites, toggleFavorite } from './favoritesSlice';
import type { AppThunk, RootState } from '../store';




export const loadFavorites =
  (uid: string): AppThunk =>
  async (dispatch) => {
    try {
      const docRef = doc(db, 'users', uid);
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        const data = snap.data();
        dispatch(setFavorites((data.favoriteCoins as string[]) || []));
      } else {
        await setDoc(docRef, { favoriteCoins: [] });
        dispatch(setFavorites([]));
      }
    } catch (error) {
      console.error('Failed to load favorites', error);
    }
  };

export const toggleFavoriteAndSync =
  (coinId: string): AppThunk =>
  async (dispatch, getState) => {
    dispatch(toggleFavorite(coinId));
    const state = getState() as RootState;
    const uid = state.auth.user?.uid;
    if (!uid) return;
    try {
      const docRef = doc(db, 'users', uid);
      await setDoc(docRef, { favoriteCoins: state.favorites.favoriteCoins }, { merge: true });
    } catch (error) {
      console.error('Failed to save favorites', error);
    }
  };