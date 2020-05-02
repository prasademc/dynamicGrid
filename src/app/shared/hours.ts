export const Hours = [
    {
        key: 'Hour Interval: 4 Hours',
        value: '4'
    },
    {
        key: 'Hour Interval: 6 Hours',
        value: '6'
    },
    {
        key: 'Hour Interval: 24 Hours',
        value: '24'
    }
]

export const SelectedHours:number = 4;

class Units {
    time: string;
    value: string;
}

export class GridItem {
    selectHour: string;
    name: string;
    units: Units[];
}

export class Grid {
    Grid: GridItem[];
}