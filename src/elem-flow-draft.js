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
   
   
   {demandas.map((row) => (
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
{demandas.map((row) => (
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