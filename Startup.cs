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
using GraphQL;
using GraphQL.Types;
using NttTimeApi.GraphQL;

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
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            services.AddSwagger();

            var connection = @"Server=(localdb)\mssqllocaldb;Database=ntt_time;Trusted_Connection=True;ConnectRetryCount=0";
            services.AddDbContext<NttDbContext>(options => options.UseSqlServer(connection));
            services.AddSingleton<IDocumentExecuter, DocumentExecuter>();
            services.AddSingleton<TimeEntryQuery>();
            services.AddSingleton<TimeEntryType>();
            var sp = services.BuildServiceProvider();
            services.AddSingleton<ISchema>(new TimeEntryShema(new FuncDependencyResolver(type => sp.GetService(type))));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseSwaggerUi3WithApiExplorer(s =>
            {
                s.SwaggerRoute = "/swagger/v1/swagger.json";
                s.SwaggerUiRoute = "/swagger";

                s.GeneratorSettings.DocumentProcessors.Add(new SecurityDefinitionAppender("TEST_HEADER", new SwaggerSecurityScheme
                {
                    Type = SwaggerSecuritySchemeType.ApiKey,
                    Name = "TEST_HEADER",
                    In = SwaggerSecurityApiKeyLocation.Header,
                    Description = "TEST_HEADER"
                }));
            });

            app.UseGraphiQl();
            app.UseMvc();
        }
    }
}
