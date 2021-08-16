export class Goal {
    constructor(
        // properties on the class
        public name: string,
        public reason: string,
        public deadlineOne: string,
        public deadlineDescriptionOne: string,
        public deadlineTwo: string,
        public deadlineDescriptionTwo: string,
        public deadlineThree: string,
        public deadlineDescriptionThree: string,
        public deadlineFour: string,
        public deadlineDescriptionFour: string,
        public accomplished: boolean = false
    ) {} 
}