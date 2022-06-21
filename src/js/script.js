const elements = {
    allRating: Array.from(document.querySelectorAll('.rating')),
    container: document.querySelector('.container'),
    button: document.querySelector('button'),
    span: document.querySelector('span'),
    body: document.querySelector('body')
}

const cleanOtherChoices = () => {
    elements.allRating.forEach(othersRank => {
        const rankClass = othersRank.classList;
        (rankClass.contains('rankChoice'))
            ? rankClass.remove('rankChoice')
            : null;
    });
};

const toRank = (rankClicked) => {
    const rankChoiceClass = rankClicked.target.classList;
    const isButtonDisabled = elements.button.disabled;
    const hasClassRankChoice = rankChoiceClass.contains('rankChoice');

    (isButtonDisabled)
        ? elements.button.removeAttribute('disabled')
        : null;

    return (hasClassRankChoice)
        ? null
        : cleanOtherChoices() & rankChoiceClass.add('rankChoice');

};

const screenBlocker = () => {
    const createBlocker = document.createElement('div');
    createBlocker.classList.toggle('blocker');
    const getBlocker = document.querySelector('.blocker');
    const hasElementBlockerInBody = elements.body.querySelector('.blocker');

    return (hasElementBlockerInBody)
        ? elements.body.removeChild(getBlocker)
        : elements.body.appendChild(createBlocker);
};

const containerAnimationAfterClick = () => {
    const toggleClassContainer = (className) => {
        elements.container.classList.toggle(className);
    };

    const doAnimation = () => {
        setTimeout(() => {
            toggleClassContainer('exitContainer');
        }, 1000);
        setTimeout(() => {
            toggleClassContainer('toggleContainerElements');
            toggleClassContainer('exitContainer');
            toggleClassContainer('entraceContainer');
        }, 2000);
        setTimeout(() => {
            toggleClassContainer('entraceContainer');
            screenBlocker();
        }, 2800);
    };

    return doAnimation()
};

const buttonSubmitEvent = () => {
    const getRankValue = document.querySelector('.rankChoice').getAttribute('data-rate');
    const overviewMessage = `You selected ${getRankValue} of 5`;
    elements.span.innerText = overviewMessage;
    screenBlocker();
    containerAnimationAfterClick();
}

elements.allRating.forEach(rate => rate.addEventListener('click', toRank));
elements.button.addEventListener('click', buttonSubmitEvent);
