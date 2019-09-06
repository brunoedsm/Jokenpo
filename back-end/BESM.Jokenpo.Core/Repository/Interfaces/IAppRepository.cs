using System.Collections.Generic;
using BESM.Jokenpo.Core.Entities;

namespace BESM.Jokenpo.Core.Repository.Interfaces
{
    public interface IAppRepository
    {
        List<Weapon> GetWeapons();   
        Weapon GetWeaponByName(string name);     
    }    
}