import { ref } from 'vue'
import moment from "moment/moment";
import useOrdinalSuffix from "@/composables/useOrdinalSuffix";
export default function usedateFormat(dateString) {
        const date = moment(dateString, 'YYYY-MM-DD')
        const day = date.format('DD')
        const month = date.format('MM')
        const year = date.format('YYYY')

        const toOrdinalSuffix = num => {
            const int = parseInt(num),
                digits = [int % 10, int % 100],
                ordinals = ['st', 'nd', 'rd', 'th'],
                oPattern = [1, 2, 3, 4],
                tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
            return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
                ? int + ordinals[digits[0] - 1]
                : int + ordinals[3];
        };
        return useOrdinalSuffix(Number(day))+' '+moment(month).format('MMM')+' '+year
}
