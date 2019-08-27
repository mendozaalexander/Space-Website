function drop()
{
    document.getElementById("planets").classList.toggle("show");
}

window.onclick = function(event)
{
    if (!event.target.matches('.dropbtn'))
    {
        var myDropdown = document.getElementById("planets");
        if (myDropdown.classList.contains('show')) 
            myDropdown.classList.remove('show'); 
    }
}