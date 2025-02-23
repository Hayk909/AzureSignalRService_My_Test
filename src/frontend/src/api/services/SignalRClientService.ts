import * as signalR from '@microsoft/signalr';

export class SignalRService {
  private connection: signalR.HubConnection;

  constructor(hubUrl: string) {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(hubUrl, {
        transport: signalR.HttpTransportType.LongPolling, // Adding LongPolling
      }) // URL of the HUB SignalR
      .withAutomaticReconnect() // AutoReConnect if failed
      .configureLogging(signalR.LogLevel.Information) // Logging
      .build();
  }

  // Start Connecting
  async start() {
    try {
      await this.connection.start();
      console.log('✅ SignalR Connected');
    } catch (err) {
      console.error('❌ Connecting Error SignalR', err);
      setTimeout(() => this.start(), 5000); // Trying Reconnect
    }
  }

  // Event Listening
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  on(event: string, callback: (...args: any[]) => void) {
    this.connection.on(event, callback);
  }

  // Sending the Data to the Server
  async send<T extends { user: string, text: string}>(event: string, data: T) {
    try {
      await this.connection.invoke(event, data.user, data.text);
    } catch (err) {
      console.error('❌ Error of sending data to Server SignalR', err);
    }
  }
}
