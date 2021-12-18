import React from 'react'

export default function TodoItem({item, index}) {
    return (
        <li>
            <strong>{index}</strong>
            {item.title}
        </li>
    )
}
