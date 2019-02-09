let targetNum;

targetNum = Math.floor((Math.random() * 100) + 1);
let statement = document.getElementById("result");




function guess()
{
    let guess = parseInt(document.getElementById('number').value);
    if(guess < targetNum)
    {
        statement.style.color = "blue"
        statement.innerHTML = "Too Low!";
    }
    else if(guess > targetNum)
    {
        statement.style.color = "red"
        statement.innerHTML = "Too Much!";
    }
    else
    {
        statement.style.color = "green"
        statement.innerHTML = "Perfect!";
    }
}
  