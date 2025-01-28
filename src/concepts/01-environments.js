/**
 * 
 * @param {HTMLMediaElement} element 
 */
export const  environmentsComponet = (element) => {
    
    console.log( import.meta.env );
    
    
    const html = `
        dev: ${import.meta.env.DEV} <br>
        prod: ${import.meta.env.PROD} <br>
        Key: ${import.meta.env.VITE_API_KEY} <br>
        url: ${import.meta.env.VITE_BASE_URL} <br>
    `;
    element.innerHTML = html;

};