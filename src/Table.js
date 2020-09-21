import React, { useEffect, useState } from 'react';

const Table = ({ users }) => {
    const [sortedUsers, updateSortedUsers] = useState([]);
    useEffect(() => updateSortedUsers(users), [users]);
    return (
        <div>
            <table className='table'>
                
            </table>
        </div>
    )
}