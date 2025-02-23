# 🚀 Messenger App

**Messenger App** is a modern chat application built using **Vue 3**, **Ionic**, **TypeScript**, **Vite**, and **SignalR**. It supports nickname-based authentication and real-time messaging.

---

## 📌 Technologies

- **Vue 3** – Frontend framework
- **Ionic Framework** – UI components
- **TypeScript** – Typed JavaScript
- **Vite** – Build tool
- **SignalR** – WebSocket communication with the server

---

## ⚙️ Installation and Setup

### 1️⃣ Clone the repository

```sh
  git clone https://github.com/Hayk909/AzureSignalRService_My_Test.git
  cd  AzureSignalRService_My_Test/src/frontend
```

### 2️⃣ Install dependencies

```sh
  npm install
```

### 3️⃣ Configure environment variables - (MISS THIS STEP - because we have not ENVs)
### But if we have it will be like this
Create a `.env` file in the project's root directory and add:

```env
VITE_API_BASE_URL=http://localhost:3209
VITE_SIGNALR_URL=http://localhost:3209/messenger/hub
VITE_PORT=5000
```

### 4️⃣ Start the application

```sh
  npm run dev
```

## 📂 Project Structure
frontend/
 ├── src/
 │   ├── api/
 │   ├── assets/
 │   ├── components/
 │   ├── constants/
 │   ├── enum/
 │   ├── features/
 │   ├── locales/
 │   ├── router/
 │   ├── types/
 │   ├── utils/
 │   ├── views/
 │   ├── App.vue
 │   ├── i18n.ts
 │   ├── main.ts
 │   ├── index.html
 │   ├── vite.config.ts
 │   ├── tsconfig.json
 │   ├── vite-env.d.ts
 │   ├── .eslintrc.cjs
 │   ├── .editorconfig
 │   ├── package.json
 │   ├── package-lock.json
 │   ├── README.md
 ├── .gitignore
 ├── .env

Once started successfully, open [http://localhost:5000](http://localhost:5000) in your browser.

---

## 🌐 Page Structure

| URL     | Description        |
| ------- | ----------------- |
| `/`     | Login (enter nickname) |
| `/chat` | Chat room         |

---

## 📌 Features

✅ Real-time messaging without page reload
✅ Intuitive UI using Ionic
✅ Mobile-friendly
✅ TypeScript for code reliability
✅ Global translation system with i18n

---

### 💡 Developer

👨‍💻 **[Hayk Ohanyan]**
📧 Email: [hayk_ohanyan2000@mail.ru](mailto:hayk_ohanyan2000@mail.ru)\
🌍 GitHub: [Hayk909](https://github.com/Hayk909)

---

✨ *Built with love and Vue!*

