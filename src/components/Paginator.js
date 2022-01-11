import { Button, ButtonGroup, Grid, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "1.7em",
        paddingTop: "1.5em"
    },
    button: {
        width: "1em"
    },
    numperpage: {
        height: "1.7em",
        top: "12px",
        marginLeft: "1em"
    },
}))

export default function Paginator({ pageinfo, goToPage }) {
    const classes = useStyles();

    function pageLeft() {
        goToPage(pageinfo.pageNumber - 1, pageinfo.numPerPage)
    }

    function pageRight() {
        goToPage(pageinfo.pageNumber + 1, pageinfo.numPerPage)
    }

    function changeNumPerPage(e) {
        goToPage(pageinfo.pageNumber, e.target.value)
    }

    return (
        pageinfo ? (
            <div>
                <ButtonGroup className={classes.root} size="large" color="primary" aria-label="large outlined primary button group">
                    <Button onClick={pageLeft} className={classes.button} disabled={pageinfo.pageNumber < 2} variant="contained"><ArrowBackIosIcon /></Button>

                    {
                        [...Array(pageinfo.totalPages).keys()].map((i) => {
                            return (
                                <Button onClick={() => goToPage(i + 1, pageinfo.numPerPage)} className={classes.button} disabled={pageinfo.pageNumber === i + 1}>{i + 1}</Button>
                            )
                        })
                    }

                    <Button onClick={pageRight} className={classes.button} disabled={pageinfo.pageNumber === pageinfo.totalPages} variant="contained"><ArrowForwardIosIcon /></Button>
                </ButtonGroup>
                <Select
                    className={classes.numperpage}
                    variant="outlined"
                    id="sel-page-number"
                    value={pageinfo.numPerPage}
                    onChange={changeNumPerPage}
                >
                    <MenuItem value={5}>5 / page</MenuItem>
                    <MenuItem value={10}>10 / page</MenuItem>
                    <MenuItem value={25}>25 / page</MenuItem>
                </Select>
            </div>
        ) : (
            <div />
        )
    )
}
