import React, { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const storedCount = localStorage.getItem("pageVisits");
        const initialCount = Number(storedCount) || 0;
        setCount(initialCount + 1);
        localStorage.setItem("pageVisits", initialCount + 1);
    }, []);

    return (
        <div className="border rounded-[20px] bg-blue-500 text-white p-4">
            Page Visits: {count}
        </div>
    );
};

export default Counter;
