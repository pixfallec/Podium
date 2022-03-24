import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCJhorOpiL1sxkNU2AXmM0JzmnFaVN02ys',
  authDomain: 'minigame-b5124.firebaseapp.com',
  databaseURL: 'https://minigame-b5124-default-rtdb.firebaseio.com',
  projectId: 'minigame-b5124',
  storageBucket: 'minigame-b5124.appspot.com',
  messagingSenderId: '506988618994',
  appId: '1:506988618994:web:a0bec51f7abae8289fdc6b',
  measurementId: 'G-MV7HBVYMGL',
};

const app = initializeApp(firebaseConfig);
const RealTimeDB = getDatabase(app);

// const oscarsRef = ref(RealTimeDB, 'Oscars');

export default RealTimeDB;
