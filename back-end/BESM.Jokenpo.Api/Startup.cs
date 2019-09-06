using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using BESM.Jokenpo.Core.Repository;
using BESM.Jokenpo.Core.Repository.Interfaces;
using BESM.Jokenpo.Core.Service;
using BESM.Jokenpo.Core.Service.Interfaces;

namespace BESM.Jokenpo.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }        
        public void ConfigureServices(IServiceCollection services)
        {
            services.ConfigureCors();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            /*Services*/
            services.AddScoped<IAppService, AppService>();            
            /*Repositories*/
            services.AddScoped<IAppRepository, AppRepository>();           
        }
                
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {                
                app.UseHsts();
            } 
            app.UseCors("CorsPolicy");           
            app.UseMvc();           

        }
    }
}
