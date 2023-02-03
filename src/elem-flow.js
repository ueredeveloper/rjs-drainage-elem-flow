import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';

import FormLabel from '@mui/material/FormLabel';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import DoDisturbOutlinedIcon from '@mui/icons-material/DoDisturbOutlined';

/*
1 - criar ponto env
2 - link github https://github.com/ueredeveloper/rjs-drainage-elem-flow.git

*/



function ElemFlow({ finalidades }) {

    const [_finalidades, _setFinalidades] = useState(finalidades);

    const [isEditable, setIsEditable] = useState({
        vazao_dia: false,
        tempo_h: false,
        periodo_d: false
    })

    const onToggleEditMode = (int_id, obj) => {

        setIsEditable(prev => {
            return {
                ...prev,
                [obj]: !isEditable[obj]
            }
        })

    };

    const onChange = (e, row, obj) => {
        /* if (!previous[row.id]) {
           setPrevious((state) => ({ ...state, [row.id]: row }));
         }*/
        const { name, value } = e.target;
        const { int_id } = row;

        let newRows = finalidades.map((_row) => {
            if (_row.int_id === int_id) {
                let __row = _row
                __row[name][obj] = value
                return __row
            }
            return _row

        });

        _setFinalidades(newRows)

    };


    return (
        <Box>
            <FormLabel id="demo-controlled-radio-buttons-group">Vazão</FormLabel>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ height: 250, maxHeight: 250 }}>
                    <Table aria-label="caption table">
                        <TableHead >
                            <TableRow sx={{ '& .MuiTableCell-sizeMedium': { px: 1, py: 0 } }}>
                                <TableCell />
                                <TableCell >Mês</TableCell>
                                <TableCell >Jan</TableCell>
                                <TableCell >Fev</TableCell>
                                <TableCell >Mar</TableCell>
                                <TableCell >Abr</TableCell>
                                <TableCell >Mai</TableCell>
                                <TableCell >Jun</TableCell>
                                <TableCell >Jul</TableCell>
                                <TableCell >Ago</TableCell>
                                <TableCell >Set</TableCell>
                                <TableCell >Out</TableCell>
                                <TableCell >Nov</TableCell>
                                <TableCell >Dez</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {finalidades.map((row) => (
                                <TableRow key={'_' + row.id} sx={{ '& .MuiTableCell-sizeMedium': { px: 1, py: 0 } }}>
                                    {/* botões */}
                                    <TableCell>

                                        {isEditable.vazao_dia ? (
                                            <>
                                                <IconButton
                                                    aria-label="done"
                                                    onClick={() => onToggleEditMode(row.int_id, 'vazao_dia')}
                                                >
                                                    <DoneAllOutlinedIcon sx={{ fontSize: 19 }} />
                                                </IconButton>
                                                <IconButton
                                                    aria-label="revert"
                                                    onClick={() => onToggleEditMode(row.int_id, 'vazao_dia')}
                                                >
                                                    <DoDisturbOutlinedIcon sx={{ fontSize: 19 }} />
                                                </IconButton>
                                            </>
                                        ) : (
                                            <IconButton
                                                aria-label="delete"
                                                onClick={() => onToggleEditMode(row.int_id, 'vazao_dia')}
                                            >
                                                <ModeEditOutlineOutlinedIcon sx={{ fontSize: 19 }} />
                                            </IconButton>
                                        )}
                                    </TableCell>
                                    {/* info */}
                                    <TableCell>{'Vazão (l/dia)'}</TableCell>

                                    {['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'].map((m, i) => {

                                        return (
                                            <TableCell key={'__' + i}>
                                                {isEditable.vazao_dia ? (
                                                    <TextField
                                                        name={m}
                                                        value={row[m].vazao_dia}

                                                        onChange={(e) => onChange(e, row, 'vazao_dia')}
                                                        variant="standard"
                                                    />
                                                ) : (
                                                    row[m].vazao_dia
                                                )}

                                            </TableCell>)
                                    })}


                                </TableRow>

                            ))}
                            {finalidades.map((row) => (
                                <TableRow key={'_' + row.id} sx={{ '& .MuiTableCell-sizeMedium': { px: 1, py: 0 } }}>
                                    {/* botões */}
                                    <TableCell>

                                        {isEditable.tempo_h ? (
                                            <>
                                                <IconButton
                                                    aria-label="done"
                                                    onClick={() => onToggleEditMode(row.int_id, 'tempo_h')}
                                                >
                                                    <DoneAllOutlinedIcon sx={{ fontSize: 19 }} />
                                                </IconButton>
                                                <IconButton
                                                    aria-label="revert"
                                                    onClick={() => onToggleEditMode(row.int_id, 'tempo_h')}
                                                >
                                                    <DoDisturbOutlinedIcon sx={{ fontSize: 19 }} />
                                                </IconButton>
                                            </>
                                        ) : (
                                            <IconButton
                                                aria-label="delete"
                                                onClick={() => onToggleEditMode(row.int_id, 'tempo_h')}
                                            >
                                                <ModeEditOutlineOutlinedIcon sx={{ fontSize: 19 }} />
                                            </IconButton>
                                        )}
                                    </TableCell>
                                    {/* info */}
                                    <TableCell>{'Tempo (h/dia)'}</TableCell>

                                    {['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'].map((m, i) => {

                                        return (
                                            <TableCell key={'__' + i}>
                                                {
                                                    isEditable.tempo_h ?
                                                        (
                                                            <TextField
                                                                name={m}
                                                                value={row[m].tempo_h}

                                                                onChange={(e) => onChange(e, row, 'tempo_h')}
                                                                variant="standard"
                                                            />
                                                        ) : (
                                                            row[m].tempo_h
                                                        )
                                                }
                                            </TableCell>)
                                    })}


                                </TableRow>

                            ))}
                            {finalidades.map((row) => (
                                <TableRow key={'_' + row.id} sx={{ '& .MuiTableCell-sizeMedium': { px: 1, py: 0 } }}>
                                    {/* botões */}
                                    <TableCell>

                                        {isEditable.periodo_d ? (
                                            <>
                                                <IconButton
                                                    aria-label="done"
                                                    onClick={() => onToggleEditMode(row.int_id, 'periodo_d')}
                                                >
                                                    <DoneAllOutlinedIcon sx={{ fontSize: 19 }} />
                                                </IconButton>
                                                <IconButton
                                                    aria-label="revert"
                                                    onClick={() => onToggleEditMode(row.int_id, 'periodo_d')}
                                                >
                                                    <DoDisturbOutlinedIcon sx={{ fontSize: 19 }} />
                                                </IconButton>
                                            </>
                                        ) : (
                                            <IconButton
                                                aria-label="delete"
                                                onClick={() => onToggleEditMode(row.int_id, 'periodo_d')}
                                            >
                                                <ModeEditOutlineOutlinedIcon sx={{ fontSize: 19 }} />
                                            </IconButton>
                                        )}
                                    </TableCell>
                                    {/* info */}
                                    <TableCell>{'Tempo (h/dia)'}</TableCell>

                                    {['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'].map((m, i) => {

                                        return (
                                            <TableCell key={'__' + i}>
                                                {isEditable.periodo_d ? (
                                                    <TextField
                                                        name={m}
                                                        value={row[m].periodo_d}

                                                        onChange={(e) => onChange(e, row, 'periodo_d')}
                                                        variant="standard"
                                                    />
                                                ) : (
                                                    row[m].periodo_d
                                                )}
                                            </TableCell>)
                                    })}


                                </TableRow>

                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>

    )
}
export { ElemFlow }