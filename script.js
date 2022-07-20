function insert(num){
    $('.showing-result').val($('.showing-result').val() + num);
}
function eql() {
    $('.showing-result').val(eval($('.showing-result').val()));
}
function c(){
    $('.showing-result').val('');
}
function del(){
    value = $('.showing-result').val();
    $('.showing-result').val(value.substring(0, value.length - 1));
}