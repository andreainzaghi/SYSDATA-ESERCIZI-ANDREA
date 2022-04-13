let arrayImmagini = []


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

async function getUser() {
    try {
        const response = await axios.get('https://pixabay.com/api/?key=26732894-7ab7a716c214b455a08379fe1&q=yellow+flowers&image_type=photo&per_page=40');
        const apiImage = (response.data.hits);
        apiImage.map((x) => {
            arrayImmagini.push(x.largeImageURL)
        })
    } catch (error) {
        console.error(error);
    }
    CreaImmagini()
}
getUser()


console.log(arrayImmagini)

const doc = document.querySelector('#div');
function CreaImmagini() {
    arrayImmagini.map((x) => {
        const image = document.createElement('div1')
        image.innerHTML = '<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">' + '<img src=' + x + ' alt="" draggable="true" ondragstart="drag(event)" id="drag1">' + '</div>'
        doc.appendChild(image)

    })
}