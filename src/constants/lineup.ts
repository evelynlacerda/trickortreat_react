interface LineupType {
    date: number;
    month: string;
    singerName: string;
    singerSurname: string;
    address: string;
    startHour: string;
    endHour: string;
}

export const LINEUP_ITEMS: LineupType[] = [
	{
		date: 30,
		month: "October",
		singerName: "Jonas",
		singerSurname: "Blue",
		address: "Madson Square Garden - New York, NY 10001",
        startHour: "11:00pm",
        endHour: "03:00am",
	},
	{
		date: 31,
		month: "October",
		singerName: "Alan",
		singerSurname: "Walker",
		address: "Madson Square Garden - New York, NY 10001",
        startHour: "11:00pm",
        endHour: "03:00am",
	},
];