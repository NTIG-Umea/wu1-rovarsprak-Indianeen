document.addEventListener('DOMContentLoaded', () => {
    // kolla i webbläsarens console för att se vad som händer
    console.log('Laddat');

    // välj de element vi behöver
    const message = document.querySelector('#message');
    const textbox = document.querySelector('#textbox');
    const button = document.querySelector('#translate');

    // lyssna på knapptryck

    button.addEventListener('click', (e) => {
        // läs in texten från textboxen
        const text = textbox.value;
        // skicka texten till funktionen för att översätta
        const translation = translate(text);
        // Hur kan du rensa textboxen?
        // skriv ut översättningen i message
        display(translation, message);
    });

});

const translate = (text) => {
    // översätt texten till rövarspråket

    let message = JOptionPane.showInputDialog("Skriv ord att översätta.");
    let konsonanter = "bcdfghjklmnpqrstvwxz";
    let translation = new StringBuilder();



    for(char ; message.toLowerCase().toCharArray();) {
        if (konsonanter.indexOf(c) > 0) {
            translation.append(c).append("o").append(c);
        }else {
            translation.append(c);
        }

    }

    System.out.println(translation);
    console.log(text)
    return text;
};

const display = (translation, element) => {
    // skapa ett p element för texten
    const p = document.createElement('p');
    // sätt texten till översättningen
    p.textContent = translation;
    // fäst elementet
    element.insertBefore(p, element.firstChild);
};