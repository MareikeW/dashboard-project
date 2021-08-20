export class Todo {
    constructor(
        // properties on the class
        //public id: number,
        public task: string,
        public weekday: string,
        public priority: string,
        public done: boolean = false
    ) {} 
}