$(document).ready(() => {
    console.log('loaded')
    inputString = ''
    $(document).keypress((e) => {
        inputString += String.fromCharCode(e.which)
        console.log(inputString)
        if (inputString.endsWith('xyzzy')) {
            window.location.href = "http://facebook.com/din0saur";
        }
    })
})