let arrayImmagini = []


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    const element = ev.target

    getPosition(element)
    console.log(element)

}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    // ev.clientX = 480
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
    CreaImmagini();
}
getUser();



const doc = document.querySelector('#div');
const doc2 = document.querySelector('#div2');
let arrayposition = []
function CreaImmagini() {
    arrayImmagini.map((x, i) => {

        const image = document.createElement('div')
        image.innerHTML = '<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">' + '<img src=' + x + ' alt="" draggable="true" ondragstart="drag(event)" id="drag1[' + i + ']">' + '</div>'
        doc.appendChild(image)

    })
}

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
        arrayposition.push({ x, y })


    }
})();

// getPosition function
function getPosition(elem) {

    let lastItem = arrayposition[arrayposition.length - 1];
    console.log(lastItem)
    elem.style.position = "absolute";
    elem.style.left = lastItem.x + 'px';
    elem.style.top = lastItem.y + 'px';





}
