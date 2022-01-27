// document.getElementById('click').style.border=" 2px p-2 red "
  let ele=document.getElementById('click')
  console.log(ele)
  let eleclass=document.getElementsByClassName("container-fluid")
  console.log(eleclass)
  eleclass[0].style.background="yellow"
  eleclass[0].classList.add("bg-primary")
  
  console.log(eleclass[0].innerText)
  tn=document.getElementsByTagName('div')
  console.log(tn)

  createEle=document.createElement('p')
  createEle.innerText="this is Created Element Paragraph"
  tn[0].appendChild(createEle)
  createEle2=document.createElement('b')
  createEle2.innerText="this is Created Element Bold"
  tn[0].replaceChild(createEle2,createEle)
