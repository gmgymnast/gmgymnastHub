var field = document.querySelector('.General-Discussion-Post-Comment');
var backUp = field.getAttribute('placeholder');
var cancelButton = document.getElementsByClassName('create-comment-cancel');
var commentButton = document.getElementsByClassName('Create-Comment-Button');
var messageBox = document.getElementsByClassName('message-box');

var clickedID;

function showButtons(clicked_id) {
    for (var i = 0; i < cancelButton.length; i++) {
        field.value = '';
        cancelButton[i].style.display = "none";
        cancelButton[clicked_id].style.display = "block";
    }
    for (var i = 0; i < commentButton.length; i++) {
        field.value = '';
        commentButton[i].style.display = "none";
        commentButton[clicked_id].style.display = "block";
    }
    for (var i = 0; i < messageBox.length; i++) {
        field.value = '';
        messageBox[i].style.paddingBottom = '50px';
        messageBox[clicked_id].style.paddingBottom = '70px';
    }
}

function hidebuttons(clicked_id) {
    for (var i = 0; i < cancelButton.length; i++) {
        cancelButton[clicked_id].style.display = "none";
    }
    for (var i = 0; i < commentButton.length; i++) {
        commentButton[clicked_id].style.display = "none";
    }
    for (var i = 0; i < messageBox.length; i++) {
        messageBox[clicked_id].style.paddingBottom = '50px';
    }
    field.value = '';
}

field.onfocus = function() {

    this.setAttribute('placeholder', '');
    this.style.borderColor = '#333';

}

field.onblur = function() {
    this.setAttribute('placeholder', backUp)
    this.style.borderColor = '#aaa';
}