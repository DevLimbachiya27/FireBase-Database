import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDu_DcDT76C13IBREaFwqPb1omZMudW-3E",
  authDomain: "fir-database-feb06.firebaseapp.com",
  projectId: "fir-database-feb06",
  storageBucket: "fir-database-feb06.firebasestorage.app",
  messagingSenderId: "46925414748",
  appId: "1:46925414748:web:4c731e2d6ebeabef598199",
  measurementId: "G-HM7YP90E6Y"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);