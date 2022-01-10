import { TableRow } from '@material-ui/core';
import React from 'react';
import Account from './Account';

export default function AccountList({ accounts }) {
    return (
        accounts.map(account => {
            return (
                <TableRow className="AccountListRow" key={account.id}>
                    <Account account={account}/>
                </TableRow>
            )
        })
    )
}
