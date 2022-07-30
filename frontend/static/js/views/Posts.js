import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
        constructor(){
            super();
            this.setTitle("Posts");
        }

        async getHtml(){
            return `
                <h1> About us </h1>
                <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                 or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything 
                 embarrassing hidden in the middle of text. All the Lorem Ips
                </p>
              
            `;
        }
}