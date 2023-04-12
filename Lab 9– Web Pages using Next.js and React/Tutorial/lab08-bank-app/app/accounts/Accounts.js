'use client'
import React, { useState } from 'react'
import styles from '../page.module.css'

export default function Accounts({ initialAccounts }) {
    const [accounts, setAccounts] = useState(initialAccounts)

    async function handleTypeChange(e) {
        const response = await fetch(`/api/accounts?type=${e.target.value}`)
        const filteredAccounts = await response.json()
        setAccounts(filteredAccounts)

    }

    return (
        <div>
            <label htmlFor="acctType" className={styles.label}>Account Type</label>
            <select id="acctType" className={styles.dropdown} onChange={e => handleTypeChange(e)}>
                <option value="All">All</option>
                <option value="Saving">Saving</option>
                <option value="Current">Current</option>
            </select>

            <table id="accounts">
                <thead>
                    <tr>
                        <th>Account No</th>
                        <th>Account Type</th>
                        <th>Balance</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {accounts.map(account => <tr>{account.accountNo} </tr>)} */}
                </tbody>
            </table>


        </div>
    )
}
