let arrayImmagini = []
let positionX = 0;
let positionY = 0;


function allowDrop(ev) {
    ev.preventDefault();

    // ev.target.style.border = "1px solid red";
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    const element = ev.target
    ChangeImpostazioni(element)
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    ev.target.appendChild(document.getElementById(data));

}



let inputdiRicerca = document.querySelector('#input')

function Ricerca() {
    let match = inputdiRicerca.value;
    console.log(match)
    DeleteT();
    getUser(match)
}

function DeleteT() {
    const imgdel = document.querySelectorAll('#div1');

    var btnsArr = Array.prototype.slice.call(imgdel);
    console.log(btnsArr)
    // arrayImmagini.map((x) => {
    //     console.log(x)
    //     x.remove()
    // })

}

async function getUser(search) {

    try {
        const response = await axios.get('https://pixabay.com/api/?key=26732894-7ab7a716c214b455a08379fe1&q=' + search + '&image_type=photo&per_page=40');
        const apiImage = (response.data.hits);
        apiImage.map((x) => {
            arrayImmagini.push(x.largeImageURL)
        })
    } catch (error) {
        console.error(error);
    }
    CreaImmagini();


}
getUser();


const doc = document.querySelector('#div');
const doc2 = document.querySelector('#div2');
const docDrop = document.querySelector('#div-drop');
function CreaImmagini() {
    arrayImmagini.map((x, i) => {

        const image = document.createElement('div')
        image.innerHTML = '<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">' + '<img src=' + x + ' alt="" draggable="true" ondragstart="drag(event)" id="drag1[' + i + ']" class="immagini" onclick="ChangeImpostazioni(elem)">' + '</div>'
        doc.appendChild(image)

    })
}

function ChangeImpostazioni(elem) {
    let img = elem
    // img.style.width = '200px'
}



function Drop() {
    for (let i = 0; i < 4400; i++) {
        const image1 = document.createElement('div')
        image1.innerHTML = '<div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>'
        docDrop.appendChild(image1)
    }
}
Drop();
(function () {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        const doc2 = document.querySelector('#div2');

        // console.log(doc2.clientWidth)
        // console.log(doc2.clientHeight)
        var eventDoc, doc;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || doc2;
            doc = eventDoc.documentElement;
            body = eventDoc.body;


            event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
        }
        let x = event.pageX
        let y = event.pageY

        // console.log(x, y)
        positionX = x
        positionY = y


    }
})();





