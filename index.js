var gameGrid = []
var idNum
var size
var sizeSq
var turn = 0
var elementNum = 0
var newElementId
var blank = "⠀"
var flexId
//const winConditions = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]]


window.onload = (event) =>
{
    size = prompt("Enter a size")
    sizeSq = size * size
    alert("The size is " + size)
    let sizeStr = size * 120 + "px"
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
    console.log(elementNum)
    console.log(newBox)
  }

function tic(callBox){
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
    idNum = callBox.getAttribute("id").substring(4)
    checkWin(callBox.innerText)
    // gameGrid[idNum - 1] = callBox.innerText
    // for(const condition of winConditions)
    // {
    //     if(callBox.innerText == gameGrid[condition[0]] && callBox.innerText == gameGrid[condition[1]] && callBox.innerText == gameGrid[condition[2]])
    //     {
    //         alert("Player "+ callBox.innerText + " wins!!")
    //     }
    // }
    // console.log(gameGrid)
}

function checkWin(sign)
{
    let bool = true
    let sizeInt = parseInt(size)
    console.log("Sign: " + sign + "\nBool = " + bool + "\nSizeSq: " + sizeSq)
    for(let x = 0; x <= ((sizeInt - 1) * sizeInt); x = x + sizeInt)
    {
        bool = true;
        for(let y = x; y <= x + (sizeInt - 1); y++)
        {
            flexId = "flex" + y
            console.log("FlexID: " + flexId + "\nX: " + x + "\nY: " + y)
            if(document.getElementById(flexId).innerText != sign)
            {
                bool = false;
            }
        }
        if(bool)
        {
            alert("Player " + sign + " wins!!!")
        }
    }
    for(x = 0; x < sizeInt; x++)
    {
        bool = true;
        for(y = x; y < sizeSq; y = (y + sizeInt))
        {
            flexId = "flex" + y
            console.log("-----VERTICAL CHECK-----")
            console.log("FlexID: " + flexId + "\nX: " + x + "\nY: " + y + "\nBool: " + bool + "\nSign: " + sign)
            if(document.getElementById(flexId).innerText != sign)
            {
                console.log("---COMPARISON FALSE---")
                bool = false;
            }
        }
        if(bool)
        {
            alert("Player " + sign + " wins!!!")
        }
    }
    bool = true
    for(x = 0; x < sizeSq; x = x + (sizeInt + 1))
    {
        flexId = "flex" + x
        console.log("FlexID: " + flexId + "\nX: " + x + "\nY: " + y)
        if(document.getElementById(flexId).innerText != sign)
        {
            bool = false;
        }
    }
    if(bool)
    {
        alert("Player " + sign + "win!!!")
    }
    bool = true
    for(x = (sizeInt - 1); x <= sizeInt * (sizeInt - 1); x = x + (sizeInt - 1))
    {
        flexId = "flex" + x
        console.log("FlexID: " + flexId + "\nX: " + x + "\nY: " + y)
        if(document.getElementById(flexId).innerText != sign)
        {
            bool = false;
        }
    }
    if(bool)
    {
        alert("Player " + sign + " wins!!!")
    }
}
