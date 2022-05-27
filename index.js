var gameGrid = []
var idNum
var size
var turn = 0
var elementNum = 0
var newElementId
var blank = "?"
//const winConditions = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]]


window.onload = (event) =>
{
    size = prompt("Enter a size")
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

function tic(callBox)
{
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
    gameGrid[idNum - 1] = callBox.innerText
    for(const condition of winConditions)
    {
        if(callBox.innerText == gameGrid[condition[0]] && callBox.innerText == gameGrid[condition[1]] && callBox.innerText == gameGrid[condition[2]])
        {
            alert("Player "+ callBox.innerText + " wins!!")
        }
    }
    console.log(gameGrid)
}

function checkWin()
{
    
}