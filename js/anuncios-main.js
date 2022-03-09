const url = 'http://localhost:3030/api'
const base = 'http://localhost:3030/images'

async function anunciosMain(){

    const req = await fetch(`${url}/anuncios/list`, {
        method: 'GET',
        body: JSON.stringify(),
        headers: {
            'Content-Type':'Application/json'
        }
    })
    const res = await req.json()
    const data = res.result
    console.log(data)
    

    const anuncios = data.map(item => `
         
        <article class="post-modern wow slideInLeft">
            <a class="post-modern-media" href="#">
                <img src="${base}/604783a1-174b-4d66-8cba-d7b7a10e1327.jpg" alt="" width="571" height="353"/>
            </a>
            <h4 class="post-modern-title"><a class="post-modern-title" href="#">${item.titulo}</a></h4>
                <ul class="post-modern-meta">
                    <li><a class="button-winona" href="#">R$ ${parseFloat(item.valor)}</a></li>
                    <li>Lote</li>
                    <li>Local</li>
                </ul>
            <p>${item.descricao}</p>
        </article>  
    `
    )
    document.getElementById('anuncios-main').innerHTML = anuncios
}



anunciosMain()