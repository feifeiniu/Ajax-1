console.log('我是main.js ')

let n = 1
getPage.onclick = ()=>{
    const  request = new XMLHttpRequest()
    request.open(`get`,`/page${n+1}`)
    request.onreadystatechange =()=>{
        if(request.readyState===4){
            if(request.status >= 200 && request.status < 300){
               const array = JSON.parse(request.response)
               array.forEach(item => {
                   const li = document.createElement('li')
                   li.textContent = item.id
                   xxx.appendChild(li)
               });
               n+=1
            }
}
    }
    request.send()
}
getJSON.onclick =()=>{
    const  request = new XMLHttpRequest()
    request.open(`get`,`/5.json`)
    request.onreadystatechange =()=>{
            if(request.readyState===4){
                if(request.status >= 200 && request.status < 300){
                    const bool = JSON.parse(request.response)//解析
                    myName.textContent = bool.name
    }
}
        }
        request.send()
    }
getXML.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open(`get`,`/4.xml`)
    request.onreadystatechange = ()=>{
      if(request.readyState===4){
          if(request.status >= 200 && request.status < 300){
              const dom = request.responseXML
              const text = dom.getElementsByTagName(`warning`)[0].textContent
              console.log(text.trim())
          }
      }  
    }
    request.send()
}
getHTML.onclick = ()=>{
    const request =  new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onload=()=>{
    const div = document.createElement('div')//创建div标签
    div.innerHTML = request.response//填写div内容
    document.body.appendChild(div)//插到身体里面
}
    request.onerror = ()=>{
    console.log(`失败了`)
}
    request.send()
}

getJS.onclick = () =>{
    const request =  new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onload=()=>{
    console.log(`request.response`)
    console.log(request.response)

    const script = document.createElement('script')//创建script标签
    script.innerHTML = request.response//填写script内容
    document.body.appendChild(script)//插到身体里面
}
    request.onerror = ()=>{
    console.log(`失败了`)
}
    request.send()
}

getCSS.onclick = ()=>{
const request =  new XMLHttpRequest();
request.open('GET','/style.css')//1
request.onreadystatechange = ()=>{
    if (request.readyState===4) {
        if (request.status >= 200 && request.status < 300) {
            const style = document.createElement('style')//创建style标签
            style.innerHTML = request.response//填写style内容
            document.head.appendChild(style)//插到头里面
        }else{
            alert(`加载 CSS 失败了`)
        }
    
}
}
request.send()//2
}


