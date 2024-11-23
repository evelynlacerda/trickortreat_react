interface PrincipalLineupType {
    key: number;
    date: number;
    month: string;
    singerName: string;
    singerSurname: string;
    address: string;
    startHour: string;
    endHour: string;
}

interface EventLineupType {
    key: number;
    singer: string;
    startHour: string;
    endHour: string;
}

export const PRINCIPAL_LINEUP_ITEMS: PrincipalLineupType[] = [
	{
        key: 1,
		date: 30,
		month: "October",
		singerName: "Alan",
		singerSurname: "Walker",
		address: "Madson Square Garden - New York, NY 10001",
        startHour: "11:00pm",
        endHour: "03:00am",
	},
	{
        key: 2,
		date: 31,
		month: "October",
		singerName: "Steave",
		singerSurname: "Aoki",
		address: "Madson Square Garden - New York, NY 10001",
        startHour: "11:00pm",
        endHour: "03:00am",
	},
];

export const EVENT_LINEUP_ITEMS: EventLineupType[] = [
    // October 30
    {
        key: 1,
        singer: "Robin Schulz",
        startHour: "05:00pm",
        endHour: "06:30pm",
    },
    {
        key: 2,
        singer: "KSHMR",
        startHour: "06:45pm",
        endHour: "08:15pm",
    },
    {
        key: 3,
        singer: "Jonas Blue",
        startHour: "08:30pm",
        endHour: "10:00pm",
    },
    {
        key: 4,
        singer: "Alok",
        startHour: "10:15pm",
        endHour: "11:45pm",
    },
    {
        key: 5,
        singer: "Alan Walker",
        startHour: "12:00am",
        endHour: "01:00am",
    },

    // October 31
    {
        key: 6,
        singer: "Martin Garrix",
        startHour: "05:00pm",
        endHour: "06:30pm",
    },
    {
        key: 7,
        singer: "Tiësto",
        startHour: "06:45pm",
        endHour: "08:15pm",
    },
    {
        key: 8,
        singer: "David Guetta",
        startHour: "08:30pm",
        endHour: "10:00pm",
    },
    {
        key: 9,
        singer: "Afrojack",
        startHour: "10:15pm",
        endHour: "11:45pm",
    },
    {
        key: 10,
        singer: "Steve Aoki",
        startHour: "12:00am",
        endHour: "01:00am",
    }
]