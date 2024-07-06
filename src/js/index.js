window.onload = () =>
{
    const imagem = document.querySelector("img")
    const botaoVoltar = document.querySelector("#voltar")
    const botaoAvancar = document.querySelector("#avancar")
    let fotoActual = 0

    const tamanhoDaGaleria = 5
    const galeria = new Array(5) 

    for (let contador = 0; contador < galeria.length; contador++)
    {
        galeria[contador] = `./src/image/cachorro${contador}.jpg`
    }

    imagem.setAttribute("src", galeria[fotoActual])

    console.log(galeria)

    botaoAvancar.onclick = () =>
    {
        imagem.getAttribute("src")
        fotoActual++
        if (fotoActual >= galeria.length) fotoActual = 0

        imagem.setAttribute("src", galeria[fotoActual])
        console.log(imagem.getAttribute("src"))
    }

    botaoVoltar.onclick = () =>
    {
        fotoActual--
        if (fotoActual < 0) fotoActual = galeria.length - 1
        imagem.setAttribute("src", galeria[fotoActual])
    }



}