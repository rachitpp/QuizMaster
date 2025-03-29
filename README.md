# 🧠 QuizMaster - Test Your React Knowledge! 🎓

A modern **Interactive Quiz Application** where users can:  
✅ Challenge themselves with React-related questions 📚  
✅ Track their score with real-time feedback on answers ✓  
✅ Race against time with an interactive countdown timer ⏱️  
✅ See their final score with personalized feedback 🏆  
✅ Enjoy a beautiful, responsive UI across all devices 📱  

---

## 🚀 Features  
✔️ **Interactive Quiz** – Test your knowledge with challenging questions  
✔️ **Real-time Feedback** – Know immediately if your answer is correct  
✔️ **Countdown Timer** – Race against the clock to complete the quiz  
✔️ **Results Page** – Get detailed feedback on your performance  
✔️ **Modern UI** – Sleek design with animations and responsive layout  

---

## 🛠️ Tech Stack  
- **Frontend:** React 18, Vite  
- **Styling:** Pure CSS with modern features  
- **State Management:** React Context API  
- **Data Source:** JSON Server for questions data  
- **Animations:** CSS transitions and keyframes  

---

## 💻 Installation  
Follow these steps to set up the project locally:  

1️⃣ **Clone the repository**  
   ```sh
   git clone https://github.com/yourusername/QuizMaster.git
   cd QuizMaster
   ```

2️⃣ **Install dependencies**  
   ```sh
   npm install
   # or
   yarn install
   ```

3️⃣ **Start the JSON server for quiz data**  
   ```sh
   npm run server
   # or
   yarn server
   ```

4️⃣ **Start the development server**  
   ```sh
   npm run dev
   # or
   yarn dev
   ```

5️⃣ **Open your browser**  
   Navigate to the URL shown in the terminal (typically `http://localhost:5173`)

---

## 📱 Responsive Design
QuizMaster is built with a fully responsive design that works beautifully on:
- 💻 Desktop computers and laptops
- 📱 Mobile phones (portrait and landscape)
- 🖥️ Tablets of all sizes
- 🖥️ Different screen resolutions and aspect ratios

---

## 📋 Project Structure

```
QuizMaster/
├── data/                # Quiz questions data
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and other assets
│   ├── components/      # Reusable UI components
│   ├── Context/         # React Context for state management
│   ├── MainComponent/   # Main application components
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

---

## 🛠️ Available Scripts  
- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build
- `npm run server` - Start the JSON server for quiz data
- `npm run lint` - Run ESLint to check code quality

---

## 🚀 Deployment
This application requires both the frontend and the JSON server to be deployed. To deploy:

1️⃣ **Build the project**  
   ```sh
   npm run build
   # or
   yarn build
   ```

2️⃣ **Deploy the frontend**  
   Upload the `dist` folder to any static site hosting service like Netlify, Vercel, or GitHub Pages.

3️⃣ **Deploy the JSON server**  
   For the quiz data, you'll need to deploy the JSON server to a service like Heroku or use a database service.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🙏 Acknowledgments

- This project was created as a practice application for demonstrating React skills
- React team for the amazing library
- Vite team for the lightning-fast build tool
- All open-source contributors whose libraries made this project possible
