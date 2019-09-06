using System.Collections.Generic;
using BESM.Jokenpo.Core.Entities;
using BESM.Jokenpo.Core.Repository.Interfaces;
using BESM.Jokenpo.Core.Service.Interfaces;

namespace BESM.Jokenpo.Core.Service
{
    public class AppService: IAppService
    {
        private readonly IAppRepository _repository;
        public AppService(IAppRepository repository){
            this._repository = repository;
        }
        public List<Weapon> GetWeapons(){
            return _repository.GetWeapons();
        }
        public Weapon GetWeaponByName(string name){
            return _repository.GetWeaponByName(name);
        }
    }    
}