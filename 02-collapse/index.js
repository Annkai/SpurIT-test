const button = document.querySelector('.collapsible__button');
const content = document.querySelector('.collapsible__content');
const actionVisible = document.querySelector('.collapsible__action--visible');
const actionHidden = document.querySelector('.collapsible__action--hidden');

let isContentShow = { val: true };
let isActionVisibleShow = { val: true };
let isActionHiddenShow = { val: true };

const elements = [content, actionVisible, actionHidden];
let animations = [];

for (let i = 0; i < elements.length; i++) {
    let animation = elements[i].animate([
        { opacity: 1 },
        { opacity: 0 }
    ], {
        fill: 'forwards',
        duration: 1500,
    });

    animations.push(animation);
    animation.pause();
}

const hide = (el, isShow) => {
    el.playbackRate = 1;
    isShow.val = false;
}

const show = (el, isShow) => {
    el.playbackRate = -1;
    isShow.val = true;
}

const toggleContent = () => {
    if (isContentShow.val) {
        hide(animations[0], isContentShow);
        animations[0].play();
    } else if (!isContentShow.val) {
        show(animations[0], isContentShow);
    }
}

const toggleActions = () => {
    if (isActionVisibleShow.val && isActionHiddenShow.val) {
        hide(animations[1], isActionVisibleShow);
        animations[1].play();
    } else if (!isActionVisibleShow.val && isActionHiddenShow.val) {
        show(animations[1], isActionVisibleShow);
        hide(animations[2], isActionHiddenShow);
        animations[2].play();
    } else {
        hide(animations[1], isActionVisibleShow);
        show(animations[2], isActionHiddenShow);
    }
}

button.addEventListener("click", toggleContent, false);
button.addEventListener("click", toggleActions, false);