const templateCache = {};


export async function getTemplate(name) {

    if(templateCache[name] == undefined) {
        const request = await fetch(`/JS Client Side Rendering/Demo/templates/${name}.html`);
        const template = await request.text();
    
        templateCache[name] = template;
    }



    return templateCache[name];
}