using System;
using System.Collections.Generic;

namespace BESM.Jokenpo.Core.Entities
{
    public class Weapon:Base
    {
        public List<string> WeakThanThis {get;set;}
        public int Wins {get;set;}
        public int Draws {get;set;}
        public int Loses {get;set;}

        public Weapon()
        {
            this.WeakThanThis = new List<string>();
        }
    }
}