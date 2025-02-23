using AzureSignalRService;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddSignalR();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
    {
        Title = "Messenger API",
        Version = "v1"
    });
});

var app = builder.Build();

// Enable Swagger for all environments
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Messenger API V1");
    c.RoutePrefix = "swagger";
});

// Static files middleware should be before routing
app.UseDefaultFiles();
app.UseStaticFiles();

app.UseRouting();

// Map controllers and endpoints
app.MapControllers();
app.MapHub<ChatHub>("/messenger/hub");
app.MapGet("/messenger", () => Results.Redirect("/messenger/index.html"));
app.MapGet("/", () => Results.Redirect("/messenger/index.html"));

// CORS HANDLING / Because of problems with connecting I needed to add this cors-policy
app.UseCors(policy =>
    policy.WithOrigins("http://localhost:5000")
          .AllowAnyHeader()
          .AllowAnyMethod()
          .AllowCredentials());

app.Run();

