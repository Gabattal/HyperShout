import './App.css'
import {Channel} from "./pages/Channel";
import {getAnalytics} from "firebase/analytics";
import {initializeApp} from "firebase/app";
import {collection, getDocs, getFirestore} from "firebase/firestore/lite";
import {useEffect} from "react";

function App() {

    const firebaseConfig = {
        apiKey: import.meta.env.VITE_API_KEY,
        authDomain: import.meta.env.VITE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_APP_ID,
        measurementId: import.meta.env.VITE_MEASUREMENT_ID
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const analytics = getAnalytics(app);
    async function getCities(db:any) {
        const citiesCol = collection(db, 'test');
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map(doc => doc.data());
        console.log(cityList)
        return cityList;
    }

    getCities(db)
    return (
        <div className="App">
            <Channel/>
        </div>
    )
}

export default App
