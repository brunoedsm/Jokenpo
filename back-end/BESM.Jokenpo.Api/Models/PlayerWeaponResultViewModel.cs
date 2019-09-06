using System.Collections.Generic;

namespace BESM.Jokenpo.Api.Models
{
    public class PlayerWeaponResultViewModel
    {
        public string PlayerName { get; set; }
        public string WeaponName { get; set; }
        public bool BestRanked { get; set; }
        public List<string> WonFrom { get; set; }
        public List<string> TiedWith { get; set; }
        public List<string> LostTo { get; set; }

        public PlayerWeaponResultViewModel()
        {
            WonFrom = new List<string>();
            TiedWith = new List<string>();
            LostTo = new List<string>();            
        }
    }
}