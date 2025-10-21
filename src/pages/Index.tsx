import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Index = () => {
  const [showRecipe, setShowRecipe] = useState(false);
  const benefits = [
    {
      icon: "Sun",
      title: "Доступность 24/7",
      description: "Ваш сайт работает круглосуточно, независимо от местоположения пользователя"
    },
    {
      icon: "Info",
      title: "Полная информация",
      description: "Возможность представить полную информацию о продукте в удобном формате"
    },
    {
      icon: "Maximize",
      title: "Гибкость и масштабируемость",
      description: "Сайт можно обновлять и дополнять новыми материалами в любое время"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-pink-50">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFD93D] via-[#FF6B9D] to-[#4ECDC4] opacity-20 animate-gradient-flow bg-[length:200%_200%]"></div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-[#FFD93D] via-[#FF6B9D] to-[#4ECDC4] bg-clip-text text-transparent leading-tight">
              Рецепт хорошего настроения
            </h1>
            <button 
              onClick={() => setShowRecipe(true)}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#FFD93D] to-[#FF6B9D] text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <span className="relative z-10">Узнать больше</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF6B9D] to-[#4ECDC4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              О продукте
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Веб-сайт — это виртуальное пространство, представляющее собой совокупность взаимосвязанных страниц, 
              размещённых в Интернете. Он позволяет пользователям получать информацию о продукте.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="group border-2 border-transparent hover:border-[#4ECDC4] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6 inline-block p-4 bg-gradient-to-br from-[#FFD93D] to-[#FF6B9D] rounded-2xl group-hover:animate-float">
                    <Icon name={benefit.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#4ECDC4]/10 via-[#FFD93D]/10 to-[#FF6B9D]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-12 border-2 border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-[#FFD93D] via-[#FF6B9D] to-[#4ECDC4] rounded-full flex items-center justify-center animate-float">
                  <Icon name="Sparkles" size={48} className="text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  Преимущества веб-сайта
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Веб-сайт предоставляет уникальные возможности для бизнеса: постоянную доступность, 
                  гибкость в представлении контента и возможность масштабирования в зависимости от ваших потребностей.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Рецепт хорошего настроения. Создано с любовью ❤️
          </p>
        </div>
      </footer>

      <Dialog open={showRecipe} onOpenChange={setShowRecipe}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-[#FFD93D] via-[#FF6B9D] to-[#4ECDC4] bg-clip-text text-transparent">
              Рецепт хорошего настроения
            </DialogTitle>
            <DialogDescription className="text-base pt-4">
              Ингредиенты для создания позитивного настроя каждый день
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 pt-4">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#FFD93D]/10 to-[#FFD93D]/5 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#FFD93D] to-[#FF6B9D] rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Начните день с улыбки</h3>
                  <p className="text-gray-600">
                    Проснувшись, улыбнитесь себе в зеркале. Это простое действие запускает выработку эндорфинов — гормонов счастья.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#FF6B9D]/10 to-[#FF6B9D]/5 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#FF6B9D] to-[#4ECDC4] rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Найдите 10 минут для себя</h3>
                  <p className="text-gray-600">
                    Выделите время на то, что приносит вам радость: чтение, медитация, прогулка или любимое хобби.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#4ECDC4]/10 to-[#4ECDC4]/5 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#4ECDC4] to-[#FFD93D] rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Окружите себя позитивом</h3>
                  <p className="text-gray-600">
                    Общайтесь с людьми, которые вас вдохновляют. Слушайте приятную музыку, смотрите на красивые вещи.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#FFD93D]/10 to-[#FF6B9D]/10 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#FFD93D] via-[#FF6B9D] to-[#4ECDC4] rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Практикуйте благодарность</h3>
                  <p className="text-gray-600">
                    Каждый вечер вспоминайте три вещи, за которые вы благодарны. Это помогает сфокусироваться на хорошем.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#4ECDC4]/10 to-[#FFD93D]/10 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#4ECDC4] to-[#FFD93D] rounded-full flex items-center justify-center text-white font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Делайте добрые дела</h3>
                  <p className="text-gray-600">
                    Помогайте другим — это возвращается к вам удвоенной радостью. Даже маленький добрый поступок имеет значение.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#FFD93D]/20 via-[#FF6B9D]/20 to-[#4ECDC4]/20 p-6 rounded-2xl border-2 border-[#4ECDC4]/30">
              <p className="text-center text-gray-700 font-medium">
                Помните: хорошее настроение — это выбор, который вы делаете каждый день! ✨
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;