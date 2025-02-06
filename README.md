# Real-time Messenger Service

A lightweight real-time messaging service built with SignalR and ASP.NET Core, providing both WebSocket and REST API capabilities.

## Features

- Real-time message broadcasting using SignalR
- REST API endpoints for message sending
- Swagger API documentation
- Docker support
- Health monitoring endpoint

## Tech Stack

- ASP.NET Core 7.0
- SignalR for real-time communication
- Docker for containerization
- Swagger for API documentation

## Quick Start

### Prerequisites
- Docker
- .NET SDK 7.0 (for development)

### Running with Docker
```bash
# Clone the repository
git clone <repository-url>

# Run the service
./run.sh
```

The service will be available at:
- Web Interface: `http://localhost:3209/messenger`
- Swagger UI: `http://localhost:3209/swagger`
- API Endpoint: `http://localhost:3209/api/messenger`

### Development Setup

1. Clone the repository
2. Navigate to the src directory:
```bash
cd src
dotnet run
```

## API Documentation

See [API.md](API.md) for detailed integration instructions.

## Project Structure

```
.
├── src/
│   ├── Controllers/     # API endpoints (AzureSignalRService.Controllers)
│   ├── Models/         # Data models (AzureSignalRService.Models)
│   ├── Hubs/          # SignalR hubs (AzureSignalRService.Hubs)
│   └── wwwroot/       # Static files
├── Dockerfile          # Container configuration
└── run.sh             # Run script
```

## Configuration

The service runs on port 3209 by default. To change the port:
1. Modify the `run.sh` script
2. Update the Docker port mapping
