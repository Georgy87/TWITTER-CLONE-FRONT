import formatDistance from "date-fns/formatDistance";
import ruLang from "date-fns/locale/ru";
export const formDate = (date: Date): string => {
    return formatDistance(date, new Date(), { locale: ruLang });
};
