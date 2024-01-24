import React from "react";

export default function Title({children}) {
    return (
        <h1 className="mb-6 text-4xl font-extrabold text-gray-800 dark:text-white">{children}</h1>
    )
}