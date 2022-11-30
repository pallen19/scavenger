import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firestore-config'
import { useState, useEffect } from 'react';

export function EventLog(props) {

    const eventLogColRef = collection(db, "eventLog")

    const [events, setEvents] = useState([])

    useEffect(() => {

        const getEvents = async () => {
            const data = await getDocs(eventLogColRef); // handle promise, will return all documents from a specific collection
            setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getEvents()

    }, [])

    return (
        <div>
            <p>Event Log</p>

            {events.map((eventChange) => {
                return (
                    <div>
                        {" "}
                        <h1>Altered Field: {eventChange.altered}</h1>
                        <h2>Changes: {eventChange.changes}</h2>
                        <h3>Date Changed: {eventChange.dateAltered}</h3>
                    </div>
                ); 
            })}

            <button onClick={() => console.log("hi")} >CLick</button>
        </div>
    )

}