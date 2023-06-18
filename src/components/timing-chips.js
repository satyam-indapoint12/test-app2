import React from 'react'
import {Stack,Chip,Tooltip} from "@mui/material";



const TimingChips = ({ timing }) => 

    (<Stack direction="row" spacing={1}>
    {timing.map((timing, index) => 
        <Tooltip placement='top-start' title={`${timing.StartTime}-${timing.EndTime}`}>
            <Chip label={timing?.DayOfWorkingHours} color="primary" />
        </Tooltip>
    )}
    </Stack>)


export default TimingChips