import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import database from "@/firebase/firebaseConfig";

const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const dbRef = ref(database, "your/data/path");
        onValue(dbRef, (snapshot) => {
            const fetchedData = snapshot.val();
            console.log("Fetched Data:", fetchedData);
            setData(fetchedData);
        });
    }, []);

    return (
        <div>
            <h1>Realtime Data from Firebase</h1>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
};

export default App;
