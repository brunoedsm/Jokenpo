using System.Collections.Generic;

namespace BESM.Jokenpo.Api.Models
{
    public class MatchResultViewModel
    {
        public string Message { get; set; }

        public List<PlayerWeaponResultViewModel> PlayerWeaponResults { get; set; }

        public MatchResultViewModel(){
            this.PlayerWeaponResults = new List<PlayerWeaponResultViewModel>();
        }
    }
}