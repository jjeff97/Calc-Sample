$(document).ready(function(){
console.log('jQuery is working!' );

$(".js-btn-add").on("click", addValues);
});

function addValues(event) {
    event.preventDefault();

    const numOne = parseInt($("#js-input-one").val());
    const numTwo = parseInt($("#js-input-two").val());

    console.log(numOne, numTwo);
}
