import React from 'react';
import MarketsTableRow from './MarketsTableRow';
import { ICoinMarkets } from '../../types/coinMarkets';

interface IExchangesTableProps {
    markets: ICoinMarkets[],
}

const MarketsTable: React.FC<IExchangesTableProps> = ({ markets }) => {
    const renderMarketsTableRow = (list: ICoinMarkets[]) =>
        list.map(item => <MarketsTableRow key={item.baseId} market={item} />);

    return (
        <table className="table-auto w-full mx-auto relative border-collapse">
            <thead className='bg-primary-300 dark:bg-bg-300 sticky top-0'>
                <tr>
                    <th className='text-start p-4 sm:text-sm sm:p-2'>Exchange</th>
                    <th className='text-start p-4 sm:text-sm sm:p-2'>Pair</th>
                    <th className='text-start p-4 md:hidden'>Price</th>
                    <th className='text-start p-4 sm:text-sm sm:p-2'>Volume(24Hr)</th>
                    <th className='text-end p-4 md:hidden'>Volume(%)</th>
                </tr>
            </thead>
            <tbody>
                {renderMarketsTableRow(markets)}
            </tbody>
        </table>
    )
};

export default MarketsTable;