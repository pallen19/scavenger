import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firestore-config'
import { useState, useEffect, useRef } from 'react';
import ReactToPrint, { useReactToPrint } from 'react-to-print'

export function EventLog(props) {

    const eventLogColRef = collection(db, "eventLog")

    const [events, setEvents] = useState([])

    const componentRef = useRef()

    useEffect(() => {

        const getEvents = async () => {
            const data = await getDocs(eventLogColRef); // handle promise, will return all documents from a specific collection
            setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getEvents()

    }, [])

    return (
        <>
            <ReactToPrint trigger={() => <button>Print / Download</button>}
                content={() => componentRef.current} />

            <div ref={componentRef}>

                <p>Event Log</p>

                {events.map((eventChange) => {
                    return (
                        <div>
                            {" "}
                            <h2>Altered Field: {eventChange.altered}</h2>
                            <h2>Before: {eventChange.before}</h2>
                            <h2>After: {eventChange.after}</h2>
                            <h2>Date Changed: {eventChange.dateAltered}</h2>
                        </div>
                    );
                })}
            </div>
        </>
    )

}