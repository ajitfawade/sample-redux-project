import { store } from '../store';

export function dispatch(action) {
    store.dispatch(action);
}

export function isEmpty(o) {
    if (Object.keys(o).length <= 0 || !o) {
        return true;
    } else {
        return false;
    }
}

export const isEmail = (val) => {
    let validationFlag: boolean = true;
    if (!val.includes('@') || !val) {
        return false;
    }
    return true;
};

export const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

export function getDateFromString(d: string) {
    if (d === null) {
        return 'N/A';
    }
    let date = new Date(d);
    return `${monthNames[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}
