import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  public cards = [
    {
    id: "0",
    cardImg: "assets/image/imgOne.jpg",
    subtitle: "Hemerocallis",
    title: "Daylily",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam odit amet totam neque doloremque commodi velit rem saepe maiores autem at perspiciatis exercitationem quas libero quia sapiente architecto, atque magnam facilis? Est quasi explicabo reprehenderit mollitia voluptate aspernatur."
    },
    {
    id: "1",
    cardImg: "assets/image/imgTwo.jpg",
    subtitle: "Lonicera",
    title: "Honeysuckle",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, similique. Numquam odit amet totam neque doloremque commodi velit rem saepe maiores autem at perspiciatis exercitationem quas libero quia sapiente architecto, atque magnam facilis?"
    },
    {
    id: "2",
    cardImg: "assets/image/imgThree.jpg",
    subtitle: "Hydrangea",
    title: "Hydrangea",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nihil mollitia, suscipit fuga iste quod ducimus dolorem aperiam numquam sint, maiores iure!"
    },
    {
    id: "3",
    cardImg: "assets/image/imgFour.jpg",
    subtitle: "Iris",
    title: "Iris",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ex eum ut repudiandae repellat! Eligendi expedita possimus fuga deleniti tempora!"
    },
    {
    id: "4",
    cardImg: "assets/image/imgFive.jpg",
    subtitle: "Lavandula",
    title: "Lavender",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ex eum ut repudiandae repellat! Eligendi expedita possimus fuga deleniti tempora!"
    },
    {
    id: "5",
    cardImg: "assets/image/imgSix.webp",
    subtitle: "Syringa",
    title: "Lilac",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ex eum ut repudiandae repellat! Eligendi expedita possimus fuga deleniti tempora!"
    },
    {
    id: "6",
    cardImg: "assets/image/imgSeven.webp",
    subtitle: "Magnolia",
    title: "Magnolia",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ex eum ut repudiandae repellat! Eligendi expedita possimus fuga deleniti tempora!"
    },
  ];

  constructor() { }

  getCard(cardId: string){
    for(let i = 0; i <this.cards.length; i++){
      const element = this.cards[i];
      if(element.id === cardId){
        return element;
      }
    }
  }
}
