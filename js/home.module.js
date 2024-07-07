import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Home { 
    constructor(){
        document.querySelectorAll('.nav-link').forEach((link) => {
           link.addEventListener("click", () => {
            this.changActiveLink(link)

            const category = link.dataset.category

            this.gitGames(category)
           }) ;
        });

        this.loading = document.querySelector('.loading')
        this.details = document.getElementById('details')
        this.games = document.querySelector('.games')

        this.ui = new Ui();


        this.gitGames('MMORPG')

    }


    changActiveLink(link){

        document.querySelector('.navbar-nav .active').classList.remove('active');
            link.classList.add('active')
    }

    async gitGames(cat){


        this.loading.classList.remove('d-none')
        


        const options ={
            method:'get',
            headers:{
                'x-rapidapi-key': 'a41e72b45cmsha3e275728d1b02fp192426jsncc5614d63ed2' ,
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        } 


        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}` , options )
        const response = await api.json();
        this.loading.classList.add('d-none')

        console.log(response);
        

        this.ui.displayGames(response);

        document.querySelectorAll('.card').forEach((card)=>{
            card.addEventListener('click',()=>{
                this.details.classList.remove('d-none')
                this.games.classList.add('d-none')
                new Details(card.dataset.id);
            })
        })
        

    }


}