// Criando lógica de postagem
const postTitle = document.querySelector(".post__input--title")
const postContent = document.querySelector(".post__input--content")
const postButton = document.querySelector(".post__form--button")

const allPosts = document.querySelector(".post__registry--list")

postButton.addEventListener('click', (e) => {
    console.log("Click");
    const post = {
        titulo: postTitle.value,
        conteudo: postContent.value,
    }
    allPosts.innerHTML += `
        <li class="post__registry--item">
            <div class="post__registry--header">
                <img src="imagens/foto-de-perfil-2.png" alt="Imagem de perfil">
                <h3>${post.titulo}</h3>
            </div>  
            <article class="post__registry--article">${post.conteudo}</article>
            <button class="post__registry--like">
                <i class="fa-regular fa-heart curtir"></i>
            </button>
        </li>
    `;
    e.preventDefault()
})

// Criando funcionalidade de curtir
const likeButton = document.querySelector(".post__registry--like")
likeButton.addEventListener('click', (e) => {
    const i = document.querySelector("#heart")
    if (e.target.className.includes("curtir") && e.target == i) {
        i.className = "fa-solid fa-heart"
    } else {
        i.className = "fa-regular fa-heart curtir"
    }

    e.preventDefault()
})

// Criando Mudança de background
const bcgInput = document.querySelector(".config-input")
console.log(bcgInput);

