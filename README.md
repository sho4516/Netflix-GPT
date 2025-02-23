# Netflix-GPT 🎥✨

Netflix-GPT is a modern web application that combines the power of **OpenAI's GPT** with **TMDB (The Movie Database)** to provide personalized movie and TV show recommendations. Built with **React**, **Firebase**, and **Tailwind CSS**, this project offers a seamless user experience for discovering and exploring entertainment content.

---

## Features 🌟

- **AI-Powered Recommendations**: Get personalized movie and TV show suggestions powered by OpenAI's GPT.
- **Search and Browse**: Search for movies and TV shows using the TMDB API.
- **User Authentication**: Sign up, log in, and manage your profile using Firebase Authentication.
- **Firebase Backend**: Utilizes Firebase Hosting, Firestore, and Cloud Functions for a scalable backend.

---

## Tech Stack 💻

- **Frontend**: React, Tailwind CSS, Redux Toolkit
- **Backend**: Firebase (Authentication, Firestore, Cloud Functions)
- **APIs**: OpenAI GPT, TMDB API
- **Deployment**: Firebase Hosting

---

## Live Demo 🚀

Check out the live demo of Netflix-GPT:  
👉 [https://netflix-gpt-77c9c.web.app](https://netflix-gpt-77c9c.web.app)

---

## Installation 🛠️

Follow these steps to set up Netflix-GPT locally:

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase CLI (`npm install -g firebase-tools`)

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/sho4516/Netflix-GPT.git
   cd Netflix-GPT

2. **Install dependencies**:
    ```bash
    npm install

3. **Set up firebase**:
- Create a Firebase project at Firebase Console.
- Add your Firebase configuration in src/firebase.js.
- Enable Firebase Authentication (Email/Password) and Firestore.

4. **Set up OpenAI and TMDB APIs**:
- Add your OpenAI API key and TMDB API key as Firebase secrets:
    ```bash
    firebase functions:secrets:set OPENAI_API_KEY
    firebase functions:secrets:set TMDB_API_KEY

5. **Run the app locally**:
    ```bash
    npm start

6. **Deploy to Firebase**:
    ```bash
    npm run build
    firebase deploy

---

## Folder Structure 📂

    Netflix-GPT/
    ├── public/                  # Static assets
    ├── src/
    │   ├── components/          # Reusable React components
    │   ├── hooks/               # Custom React hooks
    │   ├── redux/               # Redux store and slices
    │   ├── utils/               # Utility functions
    │   ├── App.js               # Main application component
    │   ├── firebase.js          # Firebase configuration
    │   └── index.js             # Entry point
    ├── tailwind.config.js       # Tailwind CSS configuration
    ├── firebase.json            # Firebase configuration
    └── README.md                # Project documentation

---

## Contributing 🤝

Contributions are welcome! If you'd like to contribute to Netflix-GPT, follow these steps:

- Fork the repository.
- Create a new branch (git checkout -b feature/YourFeatureName).
- Commit your changes (git commit -m 'Add some feature').
- Push to the branch (git push origin feature/YourFeatureName).
- Open a pull request.

---

## Contact 📧

For questions or feedback, feel free to reach out:

- Shobhit Goyal
- GitHub: @sho4516
- Email: shobhitgoyalg@gmail.com