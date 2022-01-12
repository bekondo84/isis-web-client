
export default class UtilsService {

    constructor() {

    }

    formatDate(date , widget) {
        if (widget == 'datetime-local') {
            return new Date(date).toISOString().slice(0, 10);
        } 
        if (widget == 'date' ) {
            return new Date(date).toISOString().slice(0, 10);
        }
        if (widget == 'time') {
            return new Date(date).toISOString();
        }
        return date;
    }
}