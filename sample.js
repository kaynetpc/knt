
import { KNT } from './utils/js/knt';

// import { KNT } from 'knt-react/utils/js/knt'

var listA = [{name: "shoe", price: 20, currency: "$"}, {name: "bag", price: 20, currency: "$"}, {name: "pen", price: 20, currency: "$"},] 

var total = KNT.cal.roundUpNum(KNT.array.getValuesArrayByKey(listA, "price"));

var viewHeaderTr = (
            <tr>
                {
                    KNT.array.getKeys(listA).map((keys, index) => (
                        <th key={index}>{keys}</th>
                    ))
                }
            </tr>
)


console.log(total)
console.table(viewHeaderTr)