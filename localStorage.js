localStorage.setItem('name','Harry')
localStorage.getItem('name')
obj={name:'krishnaja',length:'1'}
console.log(typeof(obj))
jso=JSON.stringify(obj)
console.log(jso)
console.log(typeof(jso))
parsed=JSON.parse(`{"name":"krishnaja","length":"1", "a":{"animal":"elephant"}}`)
console.log(parsed)
localStorage.removeItem
localStorage.clear