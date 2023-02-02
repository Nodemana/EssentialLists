export class List {
    static NextId = 0;
    static allLists = [];
    id;
    list_name;
    elements = [];
    element_states = [];
    constructor(list_name){
        this.id = ++List.NextId;
        this.list_name = list_name;
        List.allLists.push(this)
        //console.log(this.id)
    }

    AddElement(){
        
    }

    static findById(id) {
        return List.allLists.find(list => list.id === id);
    }
}