
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Mic, MicOff, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// Mock responses for the chatbot
const mockResponses: Record<string, string[]> = {
  en: [
    "How can I help you explore career options?",
    "Would you like to learn more about scholarships available to you?",
    "I can help you find educational resources tailored to your interests.",
    "Have you considered exploring our AR/VR experiences to visualize different careers?",
    "Let me know if you need help finding opportunities in your area.",
    "I'm here to answer any questions about career paths!",
  ],
  es: [
    "¿Cómo puedo ayudarte a explorar opciones de carrera?",
    "¿Te gustaría aprender más sobre las becas disponibles para ti?",
    "Puedo ayudarte a encontrar recursos educativos adaptados a tus intereses.",
    "¿Has considerado explorar nuestras experiencias de RA/RV para visualizar diferentes carreras?",
    "Avísame si necesitas ayuda para encontrar oportunidades en tu área.",
    "¡Estoy aquí para responder cualquier pregunta sobre las trayectorias profesionales!",
  ]
};

type Message = {
  id: string;
  text: string;
  isBot: boolean;
};

const ChatbotWidget = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  // Initialize Web Speech API
  useEffect(() => {
    if (typeof window !== 'undefined') {
      synthRef.current = window.speechSynthesis;
      
      if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = i18n.language;
        
        recognitionRef.current.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInput(transcript);
          setIsListening(false);
        };
        
        recognitionRef.current.onerror = () => {
          setIsListening(false);
        };
        
        recognitionRef.current.onend = () => {
          setIsListening(false);
        };
      }
    }
    
    // Add welcome message after 1 second
    const timer = setTimeout(() => {
      setIsOpen(true);
      const welcomeMessage = i18n.language === 'en'
        ? "👋 Hi there! I'm your career advisor. How can I help you today?"
        : "👋 ¡Hola! Soy tu asesor profesional. ¿Cómo puedo ayudarte hoy?";
        
      setMessages([
        { id: '1', text: welcomeMessage, isBot: true }
      ]);
      
      // Speak the welcome message
      speakText(welcomeMessage);
    }, 1000);
    
    return () => {
      clearTimeout(timer);
      if (synthRef.current && synthRef.current.speaking) {
        synthRef.current.cancel();
      }
    };
  }, [i18n.language]);
  
  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Toggle speech recognition
  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current?.start();
        setIsListening(true);
      } catch (error) {
        console.error("Speech recognition error:", error);
        setIsListening(false);
      }
    }
  };
  
  // Speak text using Web Speech API
  const speakText = (text: string) => {
    if (synthRef.current) {
      // Cancel any ongoing speech
      if (synthRef.current.speaking) {
        synthRef.current.cancel();
      }
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = i18n.language;
      
      // Use a more natural voice if available
      const voices = synthRef.current.getVoices();
      const preferredVoice = voices.find(voice => 
        voice.lang.startsWith(i18n.language) && voice.name.includes('Google')
      );
      
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
      
      synthRef.current.speak(utterance);
    }
  };
  
  // Get a random response based on the current language
  const getRandomResponse = () => {
    const responses = mockResponses[i18n.language] || mockResponses.en;
    const index = Math.floor(Math.random() * responses.length);
    return responses[index];
  };
  
  // Handle sending a new message
  const handleSendMessage = () => {
    if (input.trim()) {
      // Add user message
      const userMessage = { id: Date.now().toString(), text: input, isBot: false };
      setMessages(prev => [...prev, userMessage]);
      setInput('');
      
      // Simulate bot typing with a delay
      setTimeout(() => {
        const botResponse = getRandomResponse();
        const botMessage = { id: (Date.now() + 1).toString(), text: botResponse, isBot: true };
        setMessages(prev => [...prev, botMessage]);
        
        // Speak the bot's response
        speakText(botResponse);
      }, 1000);
    }
  };
  
  // Handle key press (Enter to send)
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <motion.button
          className={cn(
            "flex items-center justify-center w-14 h-14 rounded-full shadow-lg",
            isOpen ? "bg-red-500 hover:bg-red-600" : "bg-primary hover:bg-primary/90"
          )}
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </motion.button>
      </div>
      
      {/* Chatbot Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-4 z-40 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Chatbot Header */}
            <div className="bg-primary text-white p-4 flex items-center justify-between">
              <h3 className="font-semibold">{t('home.chatbot')}</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="hover:bg-primary-foreground/10 text-white"
              >
                <X size={18} />
              </Button>
            </div>
            
            {/* Messages Container */}
            <div className="h-80 overflow-y-auto p-4 bg-gray-50 flex flex-col space-y-3">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={cn(
                    "max-w-[80%] p-3 rounded-lg shadow-sm",
                    message.isBot 
                      ? "bg-primary/10 self-start rounded-bl-none" 
                      : "bg-primary text-white self-end rounded-br-none"
                  )}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {message.text}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input Area */}
            <div className="p-3 border-t flex items-center gap-2 bg-white">
              <Button
                variant={isListening ? "destructive" : "outline"}
                size="icon"
                onClick={toggleListening}
                className={isListening ? "animate-pulse" : ""}
              >
                {isListening ? <MicOff size={18} /> : <Mic size={18} />}
              </Button>
              
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t('common.chat') + '...'}
                className="flex-1"
              />
              
              <Button 
                variant="default"
                size="icon"
                onClick={handleSendMessage}
                disabled={!input.trim()}
              >
                <Send size={18} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotWidget;
