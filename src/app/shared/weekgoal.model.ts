export class WeekGoal {
    constructor(
        // properties on the class
        public description: string,
        public week: number,
        public done: boolean = false
    ) {} 
}