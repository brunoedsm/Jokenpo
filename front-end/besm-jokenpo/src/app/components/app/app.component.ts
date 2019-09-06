import { Component } from '@angular/core';
import { PlayerWeaponModel } from '../../model/playerweapon.model';
import { RestService } from '../../service/rest.service';
import { WeaponModel } from '../../model/weaponmodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'BESM Jokenpo';
  public isPlaying: boolean;
  public qtdPlayers: number;
  public lstPlayersWeapons: PlayerWeaponModel[];
  public lstWeapons: WeaponModel[];
  public currentPlayer: PlayerWeaponModel;
  public playerOrder:number;
  public matchResults:any;

  constructor(private rest: RestService) { }

  ngOnInit() {
    this.qtdPlayers = 2;
    this.lstPlayersWeapons = [];
    this.isPlaying = false;
    this.currentPlayer = new PlayerWeaponModel();
    this.playerOrder = 0;
    this.changePlayerQtd();
  }

  changePlayerQtd() {
    this.lstPlayersWeapons = [];
    for (var i = 0; i < this.qtdPlayers; i++) {      
      this.lstPlayersWeapons.push({
        playerName: '',
        weaponName: ''
      });
    }
  }

  playMatch() {

    /* validação Simples */
    if(!this.isValid())
      return;

      this.rest.getWeapons().subscribe((result) => {
          this.lstWeapons = result;
          this.isPlaying = true;
          this.currentPlayer = this.lstPlayersWeapons[this.playerOrder];
          this.currentPlayer.weaponName = this.lstWeapons[0].name;
      });      
  }

  isValid(){
      let error:string = '';      
      let lstPlayersCopy = this.lstPlayersWeapons;

      this.lstPlayersWeapons.forEach(function(playerToValidate,i){

          if(playerToValidate.playerName === '')
              error += `Preencha o nome do jogador ${i + 1}\n`;                          
          else{            
            var repenteance = lstPlayersCopy.filter(function(x){ return x.playerName === playerToValidate.playerName});
            if(repenteance.length > 1)
                error += `O nome do jogador ${i + 1}" ocorre mais de uma vez\n`;          
          }
      });
      
      if(error === '')
        return true;
      else
      {
        this.showMessageError(error);
        return false;
      }              
  }

  selectWeapon(){
      this.lstPlayersWeapons[this.playerOrder].weaponName = this.currentPlayer.weaponName;
      this.playerOrder++;
      this.currentPlayer = this.lstPlayersWeapons[this.playerOrder];
      if(this.currentPlayer !== undefined)
        this.currentPlayer.weaponName = this.lstWeapons[0].name;
  }

  showResults(){
    this.rest.sendChoices(this.lstPlayersWeapons).subscribe((data) => {
        if(data.message !== null)
         this.showMessageError(data.message);
        else{
          this.matchResults = data.playerWeaponResults;
        }
    });      
  }

  playMatchAgain(){
    this.matchResults = null; 
    this.playerOrder = 0;
    this.playMatch();
  }
  
  showMessageError(msg:string){
    var errorContainer = document.getElementById('dvAlert');
    errorContainer.innerText = msg;
    errorContainer.style.display = 'block';
    setTimeout(function(container){ 
      container.innerText = '';
      container.style.display = 'none';
    }, 3000,errorContainer);
  }

}
