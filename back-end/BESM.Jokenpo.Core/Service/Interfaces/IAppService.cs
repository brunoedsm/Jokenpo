using System.Collections.Generic;
using BESM.Jokenpo.Core.Entities;

namespace BESM.Jokenpo.Core.Service.Interfaces
{
    public interface IAppService
    {
        List<Weapon> GetWeapons();
        Weapon GetWeaponByName(string name); 

    }    
}