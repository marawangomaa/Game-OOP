import { Ui } from "./ui.module.js";

export class Details {
    constructor(id){
        document.getElementById('btnClose').addEventListener('click',()=>{
            document.getElementById('details').classList.add('d-none')
            document.querySelector('.games').classList.remove('d-none')
        })

        this.loading = document.querySelector('.loading')

        this.getDetails(id);
    }


    async getDetails(id){
        this.loading.classList.remove('d-none')
        const options ={
            method:'get',
            headers:{
                'x-rapidapi-key': 'a41e72b45cmsha3e275728d1b02fp192426jsncc5614d63ed2' ,
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }

        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options)
        const response = await api.json();
        this.loading.classList.add('d-none')
        console.log(response);
        new Ui().displayDetails(response);
    }
}