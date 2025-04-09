import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxjzImax7BsmT3tsWSxWmiaKS-DRUjN3s",
  authDomain: "prepwise-f6b01.firebaseapp.com",
  projectId: "prepwise-f6b01",
  storageBucket: "prepwise-f6b01.firebasestorage.app",
  messagingSenderId: "483516710751",
  appId: "1:483516710751:web:34aa93573845d26618c0ea",
  measurementId: "G-WS7DJK6Q1N",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
