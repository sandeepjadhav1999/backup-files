let movies = [
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds",
];


const movie = movies.find(movie =>(movie.includes('Mrs')))
const movie2 = movies.find(m => m.indexOf("Mrs") === 0);



function sum(){
    let arr=[...arguments]
    return arr.reduce((a,b)=>{
        return a+b
    })
}



function hi(obj,k,v){
    const ooo = {...obj}
    console.log(ooo)
}



objj={q:1,w:2}

hi(objj,1,2)



function makeDeck(){
    const deck = []
    const suits =['d','h','s','c']
    const values = '2,3,4,5,6,7,8,9,10,K,Q,J,A'

    for(let value of values.split(',')){
        for(let suit of suits){
            deck.push({
                value,
                suit
            })
        }
    }
    return deck
}
