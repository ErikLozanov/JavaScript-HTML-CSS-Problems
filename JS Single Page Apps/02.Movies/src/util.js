const views = document.querySelectorAll('view-section');

function hideAll() {
    document.querySelectorAll('.view-section').forEach(v => v.style.display = 'none');
}

export function showView(section) {
    hideAll();
    section.style.display = 'block';
}

export function spinner() {
    const element = document.createElement('p');
    element.innerHTML = 'Loading &hellip;';

    return element;
}