import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //const a: Int;
  public computerChoice:any;
  public result:any=0;
  public result_of_game:string='';
  onCLICK(data:number) {
    this.computerChoice = Math.random()
    // this.computerChoice < 0.40 = камінь
    // this.computerChoice < 0.70 = бумага
    // this.computerChoice < 1 = ножиці
    this.result_of_game='';
    this.result = data;
    this.comparePARAM(this.computerChoice,  this.result)
  }

  comparePARAM(comp: any, user: any){
    //
    if (comp === user) { this.result_of_game='Нічія!'}
    //Якщо користувач вибрав бумагу
    else if (user === 1) {
        //Компютер вибрав камінь
        if (comp > 0 && comp <= 0.40) {
          this.result_of_game='Ви перемогли!!'
        }
        //Компютер вибрав бумагу
        else if (comp > 0.40 && comp <= 0.70) {
          this.result_of_game='Нічія!'
       }
        //Компютер вибрав ножиці
        else if(comp > 0.70 && comp <= 1) {
          this.result_of_game='Ви програли!'
        }
    }
    //Якщо користувач вибрав ножиці
     else if (user === 2) {
        //Компютер вибрав камінь
        if (comp > 0 && comp <= 0.40) {
          this.result_of_game='Ви програли!'
        }
        //Компютер вибрав бумагу
        else if (comp > 0.40 && comp <= 0.70) {
          this.result_of_game='Ви перемогли!!'
        }
        //Компютер вибрав ножиці
        else if(comp > 0.70 && comp <= 1) {
          this.result_of_game='Нічія!'
        }
     }
    //Якщо користувач вибрав камінь
    else if (user === 3) {
      //Компютер вибрав камінь
      if (comp > 0 && comp <= 0.40) {
        this.result_of_game='Нічія!'
      }
      //Компютер вибрав бумагу
      else if (comp > 0.40 && comp <= 0.70) {
        this.result_of_game='Ви перемогли!!'
      }
      //Компютер вибрав ножиці
      else if(comp > 0.70 && comp <= 1) {
        this.result_of_game='Ви перемогли!!'
      }
    }
    }
}
