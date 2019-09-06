using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using BESM.Jokenpo.Core.Service.Interfaces;
using BESM.Jokenpo.Api.Models;
using System.Linq;

namespace BESM.Jokenpo.Api.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
    [ApiController]
    public class MatchController : ControllerBase
    {
        private readonly IAppService _service;

        public MatchController(IAppService service)
        {
            _service = service;
        }
        // GET api/values
        [HttpGet]
        [Route("Weapons")]
        public ActionResult<List<WeaponViewModel>> Weapons()
        {
            var weapons = _service.GetWeapons();

            return weapons.Select(x => new WeaponViewModel(){
                Id = x.Id,
                Name = x.Name
            }).ToList();
        }

        // POST api/values
        [HttpPost]
        [Route("Choices")]
        public ActionResult<MatchResultViewModel> Choices([FromBody]List<PlayerWeaponViewModel> playersWeapons)
        {
            var result = new MatchResultViewModel();
            int bestScoreFound = 0;
            if (playersWeapons == null || playersWeapons.Count == 0)
            {
                result.Message = "Erro: nenhuma opção de jogador + sinal de mão foi recebida. Favor validar.";
                return result;
            }

            for (var i = 0; i < playersWeapons.Count; i++)
            {
                var playerWeaponResult = new PlayerWeaponResultViewModel(){
                    PlayerName = playersWeapons[i].PlayerName,
                    WeaponName = playersWeapons[i].WeaponName
                };
                /*Esta variável pode ser persistida em banco para fins de estatística dos jogadores*/
                var currentPlayerToCount = _service.GetWeaponByName(playerWeaponResult.WeaponName);
                
                foreach (var pw in playersWeapons.Where(x => x.PlayerName != playerWeaponResult.PlayerName))
                {
                    if (currentPlayerToCount.Name == pw.WeaponName)
                    {
                        currentPlayerToCount.Draws++;
                        playerWeaponResult.TiedWith.Add(pw.PlayerName);
                    }
                    else if (currentPlayerToCount.WeakThanThis.Contains(pw.WeaponName))
                    {
                        currentPlayerToCount.Wins++;                        
                        playerWeaponResult.WonFrom.Add(pw.PlayerName);
                    }
                    else{
                        currentPlayerToCount.Loses++;
                        playerWeaponResult.LostTo.Add(pw.PlayerName);
                    }
                }
                /*Armazena sempre a maior pontuação calculada*/
                if(currentPlayerToCount.Wins > bestScoreFound)
                    bestScoreFound = currentPlayerToCount.Wins;
               
                result.PlayerWeaponResults.Add(playerWeaponResult);
            }
            /*Classifica os maiores pontuados, não considero se houve apenas empate*/
            if(bestScoreFound > 0)
                result.PlayerWeaponResults.ForEach(x =>{
                    if(x.WonFrom.Count == bestScoreFound)
                        x.BestRanked = true;
                });

            return result;
        }
    }
}
