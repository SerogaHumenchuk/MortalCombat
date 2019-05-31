function resetGif(){
    setTimeout(function(){
        document.querySelector('.thirdPageWrapp').classList.remove('hide');
        document.querySelector('.gifPage').classList.add('hide');
        playClickFightSound();
        setTimeout( () => {
            playClickFight();
        }, 1500);
        resetTimer();
    },3000)
}