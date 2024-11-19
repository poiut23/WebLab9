function init() {
//add your javascrip between these two lines of code

    function myEventFunction() {
        alert("Dontai Cantrell: This is a test.");
    }

    var entrtbutton = document.getElementById('entrtbutton');
    var entryInput = document.getElementById('entryinput'); 
    var textOutput = document.getElementById('textoutput'); 

    entrtbutton.addEventListener('click', myEventFunction);

    entrtbutton.addEventListener('click', function () {
        console.log('I was clicked');
        entrtbutton.style.backgroundColor = '#C00';
        entrtbutton.innerHTML = '<strong>Alert Me</strong>';

       
        textOutput.textContent = entryInput.value;
    });
}

window.addEventListener('load', init);