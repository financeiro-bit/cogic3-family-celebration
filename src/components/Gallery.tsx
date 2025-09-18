import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Photo {
  id: number;
  src: string;
  alt: string;
  category: string;
}

// Placeholder photos - estas serão substituídas pelas fotos reais da igreja
const photos: Photo[] = [
  {
    id: 1,
    src: "/placeholder.svg",
    alt: "Culto de adoração",
    category: "Cultos"
  },
  {
    id: 2,
    src: "/placeholder.svg", 
    alt: "Momento de oração",
    category: "Cultos"
  },
  {
    id: 3,
    src: "/placeholder.svg",
    alt: "Celebração da família",
    category: "Eventos"
  },
  {
    id: 4,
    src: "/placeholder.svg",
    alt: "Grupo de jovens",
    category: "Ministérios"
  },
  {
    id: 5,
    src: "/placeholder.svg",
    alt: "Batismo",
    category: "Eventos"
  },
  {
    id: 6,
    src: "/placeholder.svg",
    alt: "Conferência",
    category: "Eventos"
  }
];

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const categories = ["Todos", "Cultos", "Eventos", "Ministérios"];

  const filteredPhotos = selectedCategory === "Todos" 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (!selectedPhoto) return;
    
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredPhotos.length - 1;
    } else {
      newIndex = currentIndex < filteredPhotos.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  return (
    <section id="gallery" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20">
            <p className="text-reino-gold font-medium tracking-[0.2em] text-sm uppercase mb-6">
              NOSSA COMUNIDADE
            </p>
            <h2 className="text-reino-brown text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
              <span className="font-bold">Nossas</span> fotos
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Momentos especiais da nossa jornada de fé, adoração e comunhão em família.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-16">
            <div className="bg-reino-beige/30 rounded-2xl p-2 flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-reino-brown text-white shadow-soft'
                      : 'text-reino-brown hover:bg-white/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group cursor-pointer overflow-hidden rounded-3xl bg-reino-beige/20 aspect-[4/3]"
                onClick={() => openLightbox(photo)}
              >
                <div className="relative w-full h-full bg-gradient-to-br from-reino-beige/30 to-reino-brown/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <Camera className="h-16 w-16 text-reino-brown/30 group-hover:text-reino-gold/50 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-reino-brown font-medium text-lg">{photo.alt}</p>
                    <p className="text-reino-brown/60 text-sm">{photo.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-reino-brown/5 rounded-3xl p-12">
              <h3 className="text-reino-brown text-3xl md:text-4xl font-light leading-tight mb-6">
                Quer fazer parte dessas <span className="font-bold">memórias?</span>
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                Venha viver momentos especiais conosco. Cada culto é uma oportunidade 
                de crescer em comunhão e fé.
              </p>
              <Button
                className="bg-reino-gold hover:bg-reino-warm text-reino-brown font-bold px-10 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 border-0"
              >
                Venha nos Visitar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigatePhoto('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={() => navigatePhoto('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Photo */}
            <div className="bg-reino-beige/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="flex items-center justify-center h-96 bg-gradient-to-br from-reino-beige/30 to-reino-brown/10 rounded-xl">
                <Camera className="h-24 w-24 text-white/30" />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-white text-xl font-semibold mb-2">{selectedPhoto.alt}</h3>
                <p className="text-white/70">{selectedPhoto.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;