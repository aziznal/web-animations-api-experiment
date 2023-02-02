async function animateGreenBox() {
    const greenboxAnimation = [
        {
            transform: 'rotate(0)'
        },
        {
            transform: 'rotate(180deg)'
        }
    ]
    
    const animation = document.getElementById('greenBox').animate(greenboxAnimation, 1000);
    
    return new Promise((resolve) => {
        animation.onfinish = () => {
            resolve();
        }
    });
}

async function animateRedBox() {
    const redboxAnimation = [
        {
            transform: 'rotate(0)'
        },
        {
            transform: 'rotate(180deg)'
        }
    ]
    
    const animation = document.getElementById('redBox').animate(redboxAnimation, 1000);
    
    return new Promise((resolve) => {
        animation.onfinish = () => {
            resolve();
        }
    });
}

async function animateVioletBox() {
    const violetBoxAnimation = [
        {
            transform: 'rotate(0)'
        },
        {
            transform: 'rotate(180deg)'
        }
    ]
    
    const animation = document.getElementById('violetBox').animate(violetBoxAnimation, 1000);
    
    return new Promise((resolve) => {
        animation.onfinish = () => {
            resolve();
        }
    });
}

async function run() {
    await animateGreenBox();
    await animateRedBox();
    await animateVioletBox();
}

run();
