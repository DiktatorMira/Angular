export class MyClass{
    IsCollapsed: boolean = true;
    constructor() {}
    toogleCollapse(){
        this.IsCollapsed = !this.IsCollapsed
    }
}