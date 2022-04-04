
const LOAD = 'post_state/LOAD';
const UPDATE = 'post_state/UPDATE';

const todays = new Date();
const init_state = {
    date : todays.getFullYear() + '-' + (todays.getMonth()+1),
    post_state : ''
}

// Action Creators
export function loadYM(dates) {
    return { type: LOAD, dates };
}

export function updateYM(dates) {
    console.log('updateym 시작')
    console.log(dates)
    return { type: UPDATE, dates };
}

// Reducer
export default function reducer(state = init_state, action = {}) {
    switch (action.type) {
        case 'post_state/LOAD':
            console.log( 'reducer에서 호출 :' +  action.dates);
            return {date : action.dates};
        case 'post_state/UPDATE':
                console.log( 'reducer에서 UPDATE호출');
                let change_date = action.dates.cur_date;
                // console.log(change_date);
                let change_year = change_date.split('-')[0];
                if(action.dates.btn_nm === 'Prev')
                {
                    let Minus_month = change_date.split('-')[1] - 1;
                    console.log(Minus_month);
                    if(Minus_month < 1)
                    {
                        change_year -= 1;
                        Minus_month = 12;
                    }
                    change_date = change_year + '-' + Minus_month;
                    return {date : change_date};
                }    
                else if(action.dates.btn_nm === 'Next')
                {
                    let plus_month = change_date.split('-')[1];
                    plus_month = (plus_month*1) + 1
                    if(plus_month > 12)
                    {
                        change_year = (change_year*1) + 1
                        plus_month = 1;
                    }
                    change_year = change_year + '-' + plus_month;
                    return {date : change_year};
                }
        default: 
        return state;
    }
}