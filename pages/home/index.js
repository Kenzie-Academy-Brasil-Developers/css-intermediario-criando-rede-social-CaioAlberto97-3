const divPostContent = document.querySelector('.post-content')
function exibirPosts(array){
    for(let i=0; i < posts.length; i++){
        let divPost = document.createElement('div')
        divPost.setAttribute('id', `${posts[i].id_post}`)
        // console.log(divPost.id)

        let divUser = document.createElement('div')
        divUser.classList.add('user')
        // divUser.setAttribute('id', `${posts[i].id_post}`)

        let img = document.createElement('img')
        img.src =`${users[posts[i].user - 1].img}`

        let div = document.createElement('div')
        let p = document.createElement('p')
        p.innerText =`${users[posts[i].user - 1].user}`

        let small = document.createElement('small')
        small.innerText = `${users[posts[i].user - 1].stack}`

        divUser.append(img, div)
        div.append(p, small)

        let h2 = document.createElement('h2')
        h2.innerText = `${posts[i].title}`
        let pPost = document.createElement('p')
        pPost.classList.add('p-post')
        pPost.innerText = `${posts[i].text}`

        let divPostBottom = document.createElement('div')
        divPostBottom.classList.add('post-bottom')
        let button = document.createElement('button')
        button.classList.add('button-grey')
        button.innerText = 'Abrir Post'
        button.addEventListener('click', abrirModal)
        
        let imgLike = document.createElement('img')
        imgLike.src = '../../assets/img/Vector.png'
        imgLike.setAttribute('id', `${posts[i].id_post}`)
        imgLike.addEventListener('click', like)

        let smallCounter = document.createElement('small')
        smallCounter.innerText = Math.floor(Math.random() * (100 - 0 + 1) + 0)

        divPostBottom.append(button, imgLike, smallCounter)
        divPost.append(divUser, h2, pPost, divPostBottom)
        divPostContent.append(divPost)
    }
}
exibirPosts(posts)


function like(){
    let id = event.target.id
    let div = document.getElementById(`${id}`)
    let img = div.children[3].children[1]
    let small = event.path[1].children[2]

    console.log(img.src)

    if (img.src == 'https://crispy-potato-e6f95f09.pages.github.io/assets/img/Vector.png'){
        img.src = 'https://crispy-potato-e6f95f09.pages.github.io/assets/img/Vector2.png'
        small.innerText ++
    } else {
        img.src = 'https://crispy-potato-e6f95f09.pages.github.io/assets/img/Vector.png'
        small.innerText --
    }

}

const buttonPostar = document.querySelector('form button')
buttonPostar.addEventListener('click', adcPost)

const input = document.querySelector('#post-title')
const txtArea = document.querySelector('#txtArea')

function adcPost(e){
    if(input.value == "" && txtArea.value == ""){
        
    }    
    else if (input.value != "" && txtArea.value != ""){
        e.preventDefault()
        let newPost = {
            id_post: `${posts.length + 1}`,
            user: 1,
            title: input.value,
            text: txtArea.value,
        }
        posts.unshift(newPost)

        divPostContent.innerHTML = ""
        exibirPosts(posts)
        input.value = ""
        txtArea.value = ""
    }    
}

const aside = document.querySelector('aside')
const divFlex = document.querySelector('aside .flex')
console.log(divFlex)

function exibirSugestoes(){
    for (let i=0; i < sugestUsers.length; i++){
        let divUser = document.createElement('div')
        divUser.classList.add('user')

        let img = document.createElement('img')
        img.src = `${users[sugestUsers[i] - 1].img}`
        
        let div = document.createElement('div')
        let p = document.createElement('p')
        p.innerText = `${users[sugestUsers[i] - 1].user}`

        let small = document.createElement('small')
        small.innerText = `${users[sugestUsers[i] - 1].stack}`

        let divButton = document.createElement('div')
        divButton.classList.add('div-button')
        let button = document.createElement('button')
        button.classList.add('button-outlined')
        button.innerText = 'Seguir'
        button.addEventListener('click', seguir)

        divFlex.append(divUser)
        divButton.append(button)
        divUser.append(img, div, divButton)
        div.append(p, small)
    }
}
exibirSugestoes()

function seguir(){
    let button = event.target

    if (button.innerText == 'Seguir'){
        button.innerText = 'Seguindo'  
        button.classList.add('button-outlined-seguindo')
        console.log(button)
    } else {
        button.innerText = 'Seguir'
        button.classList.remove('button-outlined-seguindo')
        console.log(button)
    }

}


const sectionModal = document.querySelector('.section-modal')

function abrirModal(){
    let id = event.path[2].children[3].children[1].id

    for (let i = 0; i < posts.length; i++){
        if (posts[i].id_post == id){
            let divWrapper = document.createElement('div')
            divWrapper.classList.add('modal-wrapper', 'show-modal')
            
            let divModalCard = document.createElement('div')
            divModalCard.classList.add('modal-card', 'show-modal', 'show')

            let divX = document.createElement('div')
            divX.classList.add('close')
            divX.innerText = 'X'
            divX.addEventListener('click', fecharModal)

            let divUser= document.createElement('div')
            divUser.classList.add('user', 'user-modal')

            let img = document.createElement('img')
            img.src = `${users[posts[i].user - 1].img}`

            let div = document.createElement('div')
            let p = document.createElement('p')
            p.innerText = `${users[posts[i].user - 1].user}`
            let small = document.createElement('small')
            small.innerText = `${users[posts[i].user - 1].stack}`

            let h2 = document.createElement('h2')
            h2.innerText = `${posts[i].title}`
            let pPost = document.createElement('p')
            pPost.classList.add('p-post')
            pPost.innerText = `${posts[i].text}`


            divWrapper.append(divModalCard)
            divModalCard.append(divX, divUser, h2, pPost)
            divUser.append(img, div)
            div.append(p, small)
            sectionModal.append(divWrapper)
        }
    }
}

// function fecharModal(){
//     let modal = document.querySelector('.modal-wrapper')
//     modal.innerHTML = ''
//     modal.classList = 'hide-modal'
// }

function fecharModal(){
    let modalCard = document.querySelector('.modal-card')
    modalCard.classList.remove('show', 'show-modal')
    modalCard.classList.add('hide')

    let modal = document.querySelector('.modal-wrapper')
        modal.classList.add('hide-wrapper')

        setTimeout(function(){
            modal.innerHTML="", 100;
            setTimeout(modal.classList = 'hide-modal', 200)
        }, 1000)
    

}