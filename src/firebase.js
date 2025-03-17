import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDtDclv8Ho0ZioxFWJui2Su9ZjxgpQ5vk4",
  authDomain: "cruzada-data.firebaseapp.com",
  databaseURL: "https://cruzada-data-default-rtdb.firebaseio.com",
  projectId: "cruzada-data",
  storageBucket: "cruzada-data.firebasestorage.app",
  messagingSenderId: "989261404355",
  appId: "1:989261404355:web:f3354f549c65deb7e22a76",
  measurementId: "G-33T78PG3MM"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };