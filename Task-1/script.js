const p = document.getElementsByTagName('p')
console.log(p)

const h1 = document.getElementsByTagName('h1')
console.log(h1)

const span = document.getElementsByTagName('span')
console.log(span)

const div_id = document.getElementById('div-id')
console.log(div_id)

const div_class = document.getElementsByClassName('div-class')
console.log(div_class)

const img = document.querySelector('[src = "https://picsum.photos/200/300"]')
console.log(img)

const item = document.getElementById('list').childNodes[1].textContent
console.log(item)

const textNode = document.body.childNodes[0].textContent
console.log(textNode)

const commentNode = document.body.childNodes[1].textContent
console.log(commentNode)