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

function ElemFlow({ demanda }) {

    const [_demanda, _setDemanda] = useState(demanda);

    const [isEditable, setIsEditable] = useState({
        vazao_dia: false,
        tempo_h: false,
        periodo_d: false
    })

    const onToggleEditMode = (obj) => {

        setIsEditable(prev => {
            return {
                ...prev,
                [obj]: !isEditable[obj]
            }
        })

    };

    const onChange = (e, index) => {

        const { name, value } = e.target;

        let newDem = _demanda.map((_dem, i) => {

            if (i === index) {
                return { ..._dem, [name]: value }
            }
            return _dem;
        })
        _setDemanda(newDem)

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
                        <TableBody>
                            <TableRow sx={{ '& .MuiTableCell-sizeMedium': { px: 1, py: 0 } }}>
                                {/* botões de edião*/}
                                <TableCell>
                                    {isEditable.vazao_dia ? (
                                        <>
                                            <IconButton
                                                aria-label="done"
                                                onClick={() => onToggleEditMode('vazao_dia')}
                                            >
                                                <DoneAllOutlinedIcon sx={{ fontSize: 19 }} />
                                            </IconButton>
                                            <IconButton
                                                aria-label="revert"
                                                onClick={() => onToggleEditMode('vazao_dia')}
                                            >
                                                <DoDisturbOutlinedIcon sx={{ fontSize: 19 }} />
                                            </IconButton>
                                        </>
                                    ) : (
                                        <IconButton
                                            aria-label="delete"
                                            onClick={() => onToggleEditMode('vazao_dia')}
                                        >
                                            <ModeEditOutlineOutlinedIcon sx={{ fontSize: 19 }} />
                                        </IconButton>
                                    )}
                                </TableCell>
                                <TableCell>{'Vazão (l/dia)'}</TableCell>
                                {_demanda.map((row, i) =>
                                (
                                    <TableCell key={'__' + i}>

                                        {isEditable.vazao_dia ? (
                                            <TextField
                                                name={'vazao_dia'}
                                                value={row.vazao_dia}

                                                onChange={(e) => onChange(e, i)}
                                                variant="standard"
                                            />
                                        ) : (
                                            row.vazao_dia
                                        )}
                                    </TableCell>
                                )
                                )
                                }
                            </TableRow>

                            <TableRow sx={{ '& .MuiTableCell-sizeMedium': { px: 1, py: 0 } }}>
                                {/* botões de edião*/}
                                <TableCell>
                                    {isEditable.tempo_h ? (
                                        <>
                                            <IconButton
                                                aria-label="done"
                                                onClick={() => onToggleEditMode('tempo_h')}
                                            >
                                                <DoneAllOutlinedIcon sx={{ fontSize: 19 }} />
                                            </IconButton>
                                            <IconButton
                                                aria-label="revert"
                                                onClick={() => onToggleEditMode('tempo_h')}
                                            >
                                                <DoDisturbOutlinedIcon sx={{ fontSize: 19 }} />
                                            </IconButton>
                                        </>
                                    ) : (
                                        <IconButton
                                            aria-label="delete"
                                            onClick={() => onToggleEditMode('tempo_h')}
                                        >
                                            <ModeEditOutlineOutlinedIcon sx={{ fontSize: 19 }} />
                                        </IconButton>
                                    )}
                                </TableCell>
                                <TableCell>{'Tempo (h/dia)'}</TableCell>
                                {_demanda.map((row, i) =>
                                (
                                    <TableCell key={'__' + i}>
                                        {isEditable.tempo_h ? (
                                            <TextField
                                                name={'tempo_h'}
                                                value={row.tempo_h}

                                                onChange={(e) => onChange(e, i)}
                                                variant="standard"
                                            />
                                        ) : (
                                            row.tempo_h
                                        )}
                                    </TableCell>
                                )
                                )
                                }
                            </TableRow>

                            <TableRow sx={{ '& .MuiTableCell-sizeMedium': { px: 1, py: 0 } }}>
                                {/* botões de edião*/}
                                <TableCell>
                                    {isEditable.tempo_h ? (
                                        <>
                                            <IconButton
                                                aria-label="done"
                                                onClick={() => onToggleEditMode('periodo_d')}
                                            >
                                                <DoneAllOutlinedIcon sx={{ fontSize: 19 }} />
                                            </IconButton>
                                            <IconButton
                                                aria-label="revert"
                                                onClick={() => onToggleEditMode('periodo_d')}
                                            >
                                                <DoDisturbOutlinedIcon sx={{ fontSize: 19 }} />
                                            </IconButton>
                                        </>
                                    ) : (
                                        <IconButton
                                            aria-label="delete"
                                            onClick={() => onToggleEditMode('periodo_d')}
                                        >
                                            <ModeEditOutlineOutlinedIcon sx={{ fontSize: 19 }} />
                                        </IconButton>
                                    )}
                                </TableCell>
                                <TableCell>{'Período (dias/mês)'}</TableCell>
                                {_demanda.map((row, i) =>
                                (
                                    <TableCell key={'__' + i}>
                                        {isEditable.periodo_d ? (
                                            <TextField
                                                name={'periodo_d'}
                                                value={row.periodo_d}

                                                onChange={(e) => onChange(e, i)}
                                                variant="standard"
                                            />
                                        ) : (
                                            row.periodo_d
                                        )}
                                    </TableCell>
                                )
                                )
                                }
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>

    )
}
export { ElemFlow }