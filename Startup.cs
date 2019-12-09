using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using NttTimeApi.Db;
using NSwag;
using NSwag.AspNetCore;
using NSwag.SwaggerGeneration.Processors.Security;
using Microsoft.Extensions.Hosting;


namespace ntt_time
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc(options => options.EnableEndpointRouting = false);
            services.AddControllers(options => options.EnableEndpointRouting = false);
            services.AddControllersWithViews(options => options.EnableEndpointRouting = false);
            //services.AddRazorPages().AddMvcOptions(options => options.EnableEndpointRouting = false);
            services.AddSwaggerDocument();

            var connection = @"Server=(localdb)\mssqllocaldb;Database=ntt_time;Trusted_Connection=True;ConnectRetryCount=0";
            services.AddDbContext<NttDbContext>(options => options.UseSqlServer(connection));
            
    }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseSwagger(s =>
            {
                s.Path = "/swagger/v1/swagger.json";
                //s.SwaggerUiRoute = "/swagger";

                // s.GeneratorSettings.DocumentProcessors.Add(new SecurityDefinitionAppender("TEST_HEADER", new SwaggerSecurityScheme
                // {
                //     Type = SwaggerSecuritySchemeType.ApiKey,
                //     Name = "TEST_HEADER",
                //     In = SwaggerSecurityApiKeyLocation.Header,
                //     Description = "TEST_HEADER"
                // }));
            });

            app.UseSwaggerUi3();

            app.UseMvc();
        }
    }
}
