import React from 'react'
import { ICoinMarkets } from '../../types/coinMarkets'
import { numberAug } from '../../utils/stringParser';

interface IMarketsTableRowProps {
    market: ICoinMarkets
}

const MarketsTableRow: React.FC<IMarketsTableRowProps> = ({ market }) => {

    const {
        exchangeId,
        baseSymbol,
        quoteSymbol,
        priceUsd,
        volumeUsd24Hr,
        volumePercent,
    } = market;

    return (
        <tr
            className='cursor-pointer dark:bg-bg-200 hover:dark:bg-bg-100 border-block-end'
            onClick={() => console.log()}
        >
            <td className='text-start p-4 md:p-2'>{exchangeId}</td>
            <td className='flex text-start p-4 md:p-2 items-center '>
                {baseSymbol}/{quoteSymbol}
            </td>
            <td className='text-start p-4 md:p-2 md:hidden'>${numberAug(priceUsd)}</td>
            <td className='text-start p-4 md:p-2'>${numberAug(volumeUsd24Hr, 0)}</td>
            <td className='p-4 md:p-2 text-end md:hidden'>{numberAug(volumePercent)}%</td>

        </tr>
    )
}

export default MarketsTableRow