const hello=(a,b)=>{
    return{
        a,
        b,
        c:'hello'
    }
}

const x=hello('moaed')
const{a,c}=x
console.log(a,c)