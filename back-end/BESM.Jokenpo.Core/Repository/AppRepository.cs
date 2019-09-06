using System.Collections.Generic;
using System.Linq;
using BESM.Jokenpo.Core.Entities;
using BESM.Jokenpo.Core.Repository.Interfaces;

namespace BESM.Jokenpo.Core.Repository
{
    public class AppRepository: IAppRepository
    {
        private readonly List<Weapon> weapons;

        public AppRepository()
        {
           /*Pode vir de uma tabela no banco também */
           this.weapons = new List<Weapon>();
           this.weapons.Add(new Weapon(){
              Id = 1,
              Name = "Paper",
              WeakThanThis = new List<string>(){"Stone","Spock"}              
           });     
           this.weapons.Add(new Weapon(){
              Id = 2,
              Name = "Scissor",
              WeakThanThis = new List<string>(){"Paper","Lizard"}              
           });     
           this.weapons.Add(new Weapon(){
              Id = 3,
              Name = "Spock",
              WeakThanThis = new List<string>(){"Scissor","Stone"}              
           });     
           this.weapons.Add(new Weapon(){
              Id = 4,
              Name = "Stone",
              WeakThanThis = new List<string>(){"Lizard","Scissor"}              
           });     
           this.weapons.Add(new Weapon(){
              Id = 5,
              Name = "Lizard",
              WeakThanThis = new List<string>(){"Paper","Spock"}              
           });     
        }

        public List<Weapon> GetWeapons(){         
            return this.weapons;
        }
        public Weapon GetWeaponByName(string name){
            return this.weapons.Where(x => x.Name == name).FirstOrDefault();
        }
    }    
}