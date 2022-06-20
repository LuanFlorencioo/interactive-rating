const elements = {
    allRating: Array.from(document.querySelectorAll('.rating')),
    container: document.querySelector('.container'),
    button: document.querySelector('button'),
    span: document.querySelector('span'),
    body: document.querySelector('body')
}

const events = {
    ratingClickEvent(e) {
        elements.allRating.forEach(rate => rate.classList.remove('rated'));
        e.target.classList.toggle('rated');

        (elements.button.disabled)
            ? elements.button.removeAttribute('disabled')
            : null;
    },

    buttonSubmitEvent(e) {
        e.preventDefault();
        const setBlocker = () => {
            const createBlocker = document.createElement('div');
            createBlocker.classList.toggle('blocker');

            (elements.body.querySelector('.blocker'))
                ? elements.body.removeChild(document.querySelector('.blocker'))
                : elements.body.appendChild(createBlocker);
        }
        setBlocker();

        const rated = document.querySelector('.rated').getAttribute('data-rate');
        const messageThanks = `You selected ${rated} of 5`
        elements.span.innerText = messageThanks;

        const setContainerClass = (className) => {
            elements.container.classList.toggle(className)
        }
        setTimeout(() => {
            setContainerClass('exitContainer');
        }, 1000);
        setTimeout(() => {
            setContainerClass('rated');
            setContainerClass('exitContainer');
            setContainerClass('entraceContainer');
        }, 2000);
        setTimeout(() => {
            setContainerClass('entraceContainer');
            setBlocker();
        }, 2800);
    }
}

elements.allRating.forEach(rate => {
    rate.addEventListener('click', events.ratingClickEvent)
})
elements.button.addEventListener('click', events.buttonSubmitEvent)
