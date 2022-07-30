import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
        constructor(){
            super();
            this.setTitle("Settings");
        }

        async getHtml(){
            return `
                <h1> Contact us </h1>
                <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                d McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                 and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de 
                </p>

            `;
        }
}