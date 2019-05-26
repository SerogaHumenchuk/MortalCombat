function resetGif(){
    setTimeout(function(){
        document.querySelector('.thirdPageWrapp').classList.remove('hide');
        document.querySelector('.gifPage').classList.add('hide');
        resetTimer();
    },3000)
}