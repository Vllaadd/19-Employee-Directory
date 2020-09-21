import React, { useEffect, useState } from 'react';

const Table = ({ users }) => {
    const [sortedUsers, updateSortedUsers] = useState([]);
    useEffect(() => updateSortedUsers(users), [users]);
    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th
                            scope='col'
                            onClick={() => {
                                const usersCopy = [...users];
                                const updateSort = usersCopy.sort((a, b) => {
                                    const nameA = a.name.first;
                                    const nameB = b.name.first;

                                    if(nameA < nameB) {
                                        return -1;
                                    }
                                    if(nameA > nameB) {
                                        return 1;
                                    }
                                     
                                    return 0;
                                    });
                                    updateSortedUsers(updateSort);
                                }}
                            >
                                First
                                </th>
                                <th scope='col'>Last</th>
                                <th scope='col'>Gender</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Phone</th>
                                <th scope='col'>City</th>
                                <th scope='col'>Country</th>
                                <th scope='col'>Picture</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}