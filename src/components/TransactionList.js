import { Table, TableBody, TableRow, Typography } from '@material-ui/core'
import Transaction from './Transaction'

export default function TransactionList({ transactions, nickname }) {

    console.log(JSON.stringify(transactions))
    return (
        transactions.map(transaction => {
            return (
                <TableRow className="AccountListRow" key={transaction.id}>
                    <Transaction transaction={transaction}/>
                </TableRow>
            )
        })
    )
}
