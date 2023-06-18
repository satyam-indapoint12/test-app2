import React ,{ useMemo } from 'react'
import CardView from '../common/cards'
import ListStyled from './cafes.styled'
import TimingChips from './timing-chips'
import { showCafeAvailability } from '../utilities/helper'
import { isEmpty } from 'lodash'
import { StatusElement } from '../enums';
import { getWeekDay } from '../utilities/helper'

const CafeInfo = ({ selectedCafe }) => {
    const { name, description, logo, timing = [] } = selectedCafe

    const getTiming = (time) => {
        return time && <span>{time?.StartTime}:{time?.EndTime}</span>
    }
    const isOpen = useMemo(() => {
        if(!isEmpty(timing)){
            const date  = new Date()
            const day = date.getDay()
            const currentTiming = timing.find((item) => item.DayOfWorkingHours === getWeekDay(day))
            const status = showCafeAvailability(currentTiming)
            return <>{StatusElement[status]} {getTiming(currentTiming)}</>
        }
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ timing.length ])

    return <ListStyled>
         <CardView  title={name} description={description} image={logo} >
           <TimingChips timing={timing} />
           {isOpen}
        </CardView>
    </ListStyled>
    
}

export default CafeInfo