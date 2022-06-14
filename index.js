var gameGrid = []
var idNum
var size
var sizeSq
var sizeStr
var sizeInt
var turn = 0
var elementNum = 0
var newElementId
var blank = "⠀"
var flexId
var gameWon = false;

window.onload = (event) =>
{
    size = prompt("Enter a size")
    sizeSq = size * size
    sizeStr = size * 120 + "px"
    let newSizeStr = size * 220 + "px"
    sizeInt = parseInt(size)
    document.getElementById("flex-container").style.width = sizeStr
    document.getElementById("flex-container").style.height = sizeStr
    for(let i = 0; i < size * size; i++)
    {
        addElement()
    }
}

function addElement() {
    // create a new div element
    newBox = document.createElement("div");
    newElementId = "flex" + elementNum
    newBox.setAttribute("id", newElementId)
    newBox.setAttribute("onclick", "tic(this)")
    // and give it some content
    var newContent = document.createTextNode(blank);
    // add the text node to the newly created div
    newBox.appendChild(newContent); 
    // add the newly created element and its content into the DOM
    flexCont = document.getElementById("flex-container");
    flexCont.appendChild(newBox)
    elementNum += 1
  }

function tic(callBox){
    if(!gameWon){
    if(callBox.innerText != blank)
    {
        alert("This space is occupied!")
    }
    else if(turn == 0)
    {
        callBox.innerText = "O"
        turn = 1
    }
    else
    {
        callBox.innerText = "X"
        turn = 0
    }
    idNum = parseInt(callBox.getAttribute("id").substring(4), 10)
    checkWin(callBox.innerText)
    setTimeout(function() { autoMove(idNum); }, 1000)
    }
}

function checkWin(sign)
{
    bool = true
    for(let x = 0; x <= ((sizeInt - 1) * sizeInt); x = x + sizeInt)
    {
        bool = true;
        for(let y = x; y <= x + (sizeInt - 1); y++)
        {
            flexId = "flex" + y
            if(document.getElementById(flexId).innerText != sign)
            {
                bool = false;
            }
        }
        if(bool)
        {
            alert("Player " + sign + " wins!!!")
            gameWon = true
        }
    }
    for(x = 0; x < sizeInt; x++)
    {
        bool = true;
        for(y = x; y < sizeSq; y = (y + sizeInt))
        {
            flexId = "flex" + y
            if(document.getElementById(flexId).innerText != sign)
            {
                bool = false;
            }
        }
        if(bool)
        {
            alert("Player " + sign + " wins!!!")
            gameWon = true
        }
    }
    bool = true
    for(x = 0; x < sizeSq; x = x + (sizeInt + 1))
    {
        flexId = "flex" + x
        if(document.getElementById(flexId).innerText != sign)
        {
            bool = false;
        }
    }
    if(bool)
    {
        alert("Player " + sign + " wins!!!")
        gameWon = true
    }
    bool = true
    for(x = (sizeInt - 1); x <= sizeInt * (sizeInt - 1); x = x + (sizeInt - 1))
    {
        flexId = "flex" + x
        if(document.getElementById(flexId).innerText != sign)
        {
            bool = false;
        }
    }
    if(bool)
    {
        alert("Player " + sign + " wins!!!")
        gameWon = true
    }
}

function autoMove(idNum)
{
    let random = parseInt((Math.random() * 8), 10)
    let clickId = "flex" + idNum
    flexId = "flex" + random
    if(random == 0)
    {
        random = idNum - sizeInt - 1
        flexId = "flex" + random
    }
    if(random == 1)
    {
        random = idNum - sizeInt
        flexId = "flex" + random
    }
    if(random == 2)
    {
        random = idNum - sizeInt + 1
        flexId = "flex" + random
    }
    if(random == 3)
    {
        random = idNum - 1
        flexId = "flex" + random
    }
    if(random == 4)
    {
        random = idNum + 1
        flexId = "flex" + random
    }
    if(random == 5)
    {
        random = idNum + sizeInt - 1
        flexId = "flex" + random
    }
    if(random == 6)
    {
        random = idNum + sizeInt
        flexId = "flex" + random
    }
    if(random == 7)
    {
        random = idNum + sizeInt + 1
        flexId = "flex" + random
    }
    while(random < 0 || random > (sizeSq - 1) || document.getElementById(flexId).innerText != blank)
    {
        random = parseInt((Math.random() * sizeSq), 10)
        flexId = "flex" + random
        if(gameWon)
        {
            break;
        }
    }
    if(!gameWon)
    {
    if(turn == 0)
    {
        document.getElementById(flexId).innerText = "O"
        turn = 1
    }
    else
    { 
        document.getElementById(flexId).innerText = "X"
        turn = 0
    }
    checkWin(document.getElementById(flexId).innerText)
    }
}
