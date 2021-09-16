export class Habit {
    constructor(
        // properties on the class
        public week: number,
        public habitName: string,
        public isMondayDone: boolean = false,
        public isTuesdayDone: boolean = false,
        public isWednesdayDone: boolean = false,
        public isThursdayDone: boolean = false,
        public isFridayDone: boolean = false,
        public isSaturdayDone: boolean = false,
        public isSundayDone: boolean = false,
        
    ) {} 
}