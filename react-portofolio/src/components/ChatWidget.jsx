import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "../styles/ChatWidget.css";

// Inisialisasi Gemini API
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || "");

const SYSTEM_PROMPT = `Anda adalah asisten virtual bernama "Edwin's Assistant". Anda ada di layar portofolio milik Edwin. 
Tugas Anda adalah menjawab pertanyaan pengunjung tentang Edwin berdasarkan informasi berikut:
- Nama: Dimas Edwin Saputra
- Email Kontak: dimasedwinsaputra@gmail.com
- Bidang/Keahlian: Web Developer, AI/ML (Machine Learning), Computer Vision, dan Administrasi Database.
Instruksi:
1. Jawablah dengan ramah, profesional, dan gunakan Bahasa Indonesia.
2. Jawab seringskas dan sejelas mungkin.
3. Jika ditanya hal di luar pemrograman/portofolio/biodata Edwin, tolak dengan sopan dan arahkan kembali ke topik portofolio Edwin.`;

const model = genAI.getGenerativeModel({ 
  model: "gemini-2.5-flash",
  systemInstruction: SYSTEM_PROMPT
});

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Halo! Saya asisten AI portfolio Edwin. Tanyakan profil, keahlian, pengalaman, proyek, atau kontak Edwin.",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userText = inputText;
    const newUserMsg = {
      id: Date.now(),
      sender: "user",
      text: userText,
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInputText("");
    setIsLoading(true);

    try {
      if (!import.meta.env.VITE_GEMINI_API_KEY) {
        throw new Error("API Key Gemini belum diset di .env");
      }

      // Menambahkan pesan loading/mengetik
      const thinkingMsgId = Date.now() + 1;
      setMessages((prev) => [...prev, { id: thinkingMsgId, sender: "bot", text: "Mengetik..." }]);

      // Menyusun riwayat percakapan untuk Gemini
      const history = messages
        .filter(m => m.id !== 1) // abaikan pesan sapaan awal
        .map(m => ({
          role: m.sender === "user" ? "user" : "model",
          parts: [{ text: m.text }],
        }));

      // Memulai percakapan dengan konteks
      const chat = model.startChat({
        history: history
      });

      const result = await chat.sendMessage(userText);
      const response = await result.response;
      const text = response.text();

      // Ganti pesan "Mengetik..." dengan jawaban asli
      setMessages((prev) => prev.map(msg => 
        msg.id === thinkingMsgId ? { ...msg, text: text } : msg
      ));

    } catch (error) {
      console.error("AI Chat Error:", error);
      setMessages((prev) => {
        // Hapus pesan mengetik
        const filtered = prev.filter(msg => msg.text !== "Mengetik...");
        return [...filtered, {
          id: Date.now() + 2,
          sender: "bot",
          text: "Maaf, fitur AI sedang tidak dapat diakses (API Key mungkin belum diisi atau kuota habis)."
        }];
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  return (
    <div className="chat-widget-container">
      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">
                <span className="bot-icon">🤖</span>
              </div>
              <div>
                <h4 className="chat-title">Edwin's Assistant</h4>
                <p className="chat-subtitle">Selalu online</p>
              </div>
            </div>
            <button className="chat-close-btn" onClick={toggleChat}>
              &times;
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chat-message ${
                  msg.sender === "user" ? "user-message" : "bot-message"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form className="chat-input-form" onSubmit={handleSendMessage}>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ketik pesan..."
              className="chat-input"
            />
            <button
              type="submit"
              className="chat-send-btn"
              disabled={!inputText.trim() || isLoading}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button className={`chat-toggle-btn ${isOpen ? 'open' : ''}`} onClick={toggleChat}>
        {isOpen ? (
          <span className="close-icon">&times;</span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="chat-icon"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
