const util = require ("util")
const fs = require ("fs")
const uuidv1 = require ("uuid/v1")
const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync =util.promisify(fs.writeFile) 


class Store {
read(){
    return readFileAsync("db/db.json","utf8")
}
write(note){
    return writeFileAsync("db/db.json",JSON.stringify(note))
}
getNotes(){
    return this.read().then((notes)=>{
        let parseNotes;
        try{
            parseNotes =[].concat(JSON.parse(notes))
        } catch(err){
            parseNotes=[]
        }
        return parseNotes
    })
    
}
removeNote(id){
    return this.getNotes()
    .then((notes)=>notes.filter((note)=>note.id !==id))
    .then((filteredNotes)=>this.write(filteredNotes))
}
}
module.exports = new Store()