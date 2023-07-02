const form = document.querySelector('form');

form.addEventListener('submit',(e) =>createTopic(e));

async function createTopic(e) {
    e.preventDefault()
    console.log(e.target);

    const formData = new FormData(form);

    const topicName = formData.get('topicName');
    const username = formData.get('username');
    const post = formData.get('postText');

    // console.log(topicName);
}