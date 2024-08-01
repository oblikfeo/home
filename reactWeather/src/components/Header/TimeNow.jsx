import React, { useState, useEffect } from 'react';

export function TimeNow() {

        const [currentTime, setCurrentTime] = useState(new Date());
    
        useEffect(() => {
            const intervalId = setInterval(() => {
                setCurrentTime(new Date());
            }, 1000);
    
            return () => clearInterval(intervalId);
        }, []);

    return (
        <div className="time">
            {currentTime.toLocaleTimeString()}
        </div>
    )
}