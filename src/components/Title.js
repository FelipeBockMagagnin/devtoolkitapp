import React from "react";

export default function Title({children}) {
    return (
        <h1 className="mb-6 text-4xl font-extrabold dark:text-white">{children}</h1>
    )
}