import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CMSSection } from "@/hooks/usePageContent";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CMSSectionRendererProps {
  section: CMSSection;
  isEditable?: boolean;
  onSectionClick?: (sectionId: string) => void;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export function CMSSectionRenderer({ section, isEditable, onSectionClick }: CMSSectionRendererProps) {
  const content = section.content || {};
  
  const handleClick = (e: React.MouseEvent) => {
    if (isEditable && onSectionClick) {
      e.preventDefault();
      e.stopPropagation();
      onSectionClick(section.id);
    }
  };

  const editableStyles = isEditable 
    ? "cursor-pointer hover:outline hover:outline-2 hover:outline-primary hover:outline-offset-2 transition-all relative group" 
    : "";

  const EditOverlay = () => isEditable ? (
    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
        Click to edit
      </span>
    </div>
  ) : null;

  switch (section.type) {
    case 'hero':
      return (
        <section 
          className={`relative h-screen flex items-center justify-center overflow-hidden ${editableStyles}`}
          onClick={handleClick}
          data-section-id={section.id}
        >
          <EditOverlay />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-background/90 z-10" />
          {content.backgroundImage && (
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url('${content.backgroundImage}')` }} 
            />
          )}
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-light text-white mb-6"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              {(content.headline as string) || 'Page Title'}
            </motion.h1>
            {content.subtitle && (
              <motion.p 
                className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {content.subtitle as string}
              </motion.p>
            )}
            {content.ctaText && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button size="lg" asChild>
                  <Link to={(content.ctaLink as string) || '#'}>
                    {content.ctaText as string}
                  </Link>
                </Button>
              </motion.div>
            )}
          </div>
        </section>
      );

    case 'text':
      return (
        <section 
          className={`py-16 ${editableStyles}`}
          onClick={handleClick}
          data-section-id={section.id}
        >
          <EditOverlay />
          <div className="container mx-auto px-4">
            {content.heading && (
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                {content.heading as string}
              </h2>
            )}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground whitespace-pre-wrap leading-relaxed">
                {(content.body as string) || ''}
              </p>
            </div>
          </div>
        </section>
      );

    case 'image':
      return (
        <section 
          className={`py-16 ${editableStyles}`}
          onClick={handleClick}
          data-section-id={section.id}
        >
          <EditOverlay />
          <div className="container mx-auto px-4">
            {content.src ? (
              <figure className="text-center">
                <img 
                  src={content.src as string} 
                  alt={(content.alt as string) || ''} 
                  className="max-w-full h-auto rounded-lg mx-auto shadow-lg"
                />
                {content.caption && (
                  <figcaption className="text-sm text-muted-foreground mt-4">
                    {content.caption as string}
                  </figcaption>
                )}
              </figure>
            ) : (
              <div className="bg-muted h-64 rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">No image configured</span>
              </div>
            )}
          </div>
        </section>
      );

    case 'two_column':
      return (
        <section 
          className={`py-16 ${editableStyles}`}
          onClick={handleClick}
          data-section-id={section.id}
        >
          <EditOverlay />
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                {content.leftHeading && (
                  <h3 className="text-2xl font-light mb-4">{content.leftHeading as string}</h3>
                )}
                <p className="text-muted-foreground leading-relaxed">
                  {(content.leftContent as string) || ''}
                </p>
              </div>
              <div>
                {content.rightHeading && (
                  <h3 className="text-2xl font-light mb-4">{content.rightHeading as string}</h3>
                )}
                <p className="text-muted-foreground leading-relaxed">
                  {(content.rightContent as string) || ''}
                </p>
              </div>
            </div>
          </div>
        </section>
      );

    case 'three_column':
      return (
        <section 
          className={`py-16 ${editableStyles}`}
          onClick={handleClick}
          data-section-id={section.id}
        >
          <EditOverlay />
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map(col => (
                <div key={col} className="text-center">
                  {content[`col${col}Heading`] && (
                    <h3 className="text-xl font-light mb-4">{content[`col${col}Heading`] as string}</h3>
                  )}
                  <p className="text-muted-foreground">
                    {(content[`col${col}Content`] as string) || ''}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    case 'cards_grid':
      const cards = (content.cards as Array<{ title: string; description: string; icon?: string; link?: string }>) || [];
      return (
        <section 
          className={`py-16 ${editableStyles}`}
          onClick={handleClick}
          data-section-id={section.id}
        >
          <EditOverlay />
          <div className="container mx-auto px-4">
            {content.heading && (
              <h2 className="text-4xl font-light mb-12 text-center">
                {content.heading as string}
              </h2>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards.map((card, i) => (
                <motion.div 
                  key={i}
                  className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h3 className="text-xl font-medium mb-3">{card.title}</h3>
                  <p className="text-muted-foreground">{card.description}</p>
                  {card.link && (
                    <Link to={card.link} className="text-primary hover:underline mt-4 inline-block">
                      Learn more →
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );

    case 'features':
      const features = (content.features as Array<{ title: string; description: string; icon?: string }>) || [];
      return (
        <section 
          className={`py-16 bg-muted/30 ${editableStyles}`}
          onClick={handleClick}
          data-section-id={section.id}
        >
          <EditOverlay />
          <div className="container mx-auto px-4">
            {content.heading && (
              <h2 className="text-4xl font-light mb-12 underline-accent inline-block">
                {content.heading as string}
              </h2>
            )}
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-medium">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    case 'testimonials':
      const testimonials = (content.testimonials as Array<{ quote: string; author: string; role?: string; company?: string }>) || [];
      return (
        <section 
          className={`py-16 bg-primary/5 ${editableStyles}`}
          onClick={handleClick}
          data-section-id={section.id}
        >
          <EditOverlay />
          <div className="container mx-auto px-4">
            {content.heading && (
              <h2 className="text-4xl font-light mb-12 text-center">
                {content.heading as string}
              </h2>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <blockquote key={i} className="bg-background p-6 rounded-lg shadow-sm">
                  <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                  <footer className="text-sm">
                    <strong>{testimonial.author}</strong>
                    {testimonial.role && <span className="text-muted-foreground">, {testimonial.role}</span>}
                    {testimonial.company && <span className="text-muted-foreground"> at {testimonial.company}</span>}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      );

    case 'cta':
      return (
        <section 
          className={`py-16 ${editableStyles}`}
          onClick={handleClick}
          data-section-id={section.id}
        >
          <EditOverlay />
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-12 rounded-lg text-center">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                {(content.headline as string) || 'Ready to Get Started?'}
              </h2>
              {content.description && (
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {content.description as string}
                </p>
              )}
              <Button size="lg" asChild>
                <Link to={(content.buttonLink as string) || '/contact'}>
                  {(content.buttonText as string) || 'Contact Us'}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      );

    case 'faq':
      const faqs = (content.faqs as Array<{ question: string; answer: string }>) || [];
      return (
        <section 
          className={`py-16 ${editableStyles}`}
          onClick={handleClick}
          data-section-id={section.id}
        >
          <EditOverlay />
          <div className="container mx-auto px-4 max-w-3xl">
            {content.heading && (
              <h2 className="text-4xl font-light mb-8 underline-accent inline-block">
                {content.heading as string}
              </h2>
            )}
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      );

    case 'stats':
      const stats = (content.stats as Array<{ value: string; label: string }>) || [];
      return (
        <section 
          className={`py-16 bg-charcoal text-white ${editableStyles}`}
          onClick={handleClick}
          data-section-id={section.id}
        >
          <EditOverlay />
          <div className="container mx-auto px-4">
            {content.heading && (
              <h2 className="text-4xl font-light mb-12 text-center">
                {content.heading as string}
              </h2>
            )}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-light text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );

    case 'gallery':
      const images = (content.images as Array<{ src: string; alt?: string }>) || [];
      return (
        <section 
          className={`py-16 ${editableStyles}`}
          onClick={handleClick}
          data-section-id={section.id}
        >
          <EditOverlay />
          <div className="container mx-auto px-4">
            {content.heading && (
              <h2 className="text-4xl font-light mb-12 text-center">
                {content.heading as string}
              </h2>
            )}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image, i) => (
                <motion.div
                  key={i}
                  className="aspect-square overflow-hidden rounded-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt || ''} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );

    case 'video':
      const videoUrl = content.url as string;
      const getEmbedUrl = (url: string) => {
        if (url?.includes('youtube.com/watch')) {
          const videoId = url.split('v=')[1]?.split('&')[0];
          return `https://www.youtube.com/embed/${videoId}`;
        }
        if (url?.includes('youtu.be')) {
          const videoId = url.split('youtu.be/')[1]?.split('?')[0];
          return `https://www.youtube.com/embed/${videoId}`;
        }
        if (url?.includes('vimeo.com')) {
          const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
          return `https://player.vimeo.com/video/${videoId}`;
        }
        return url;
      };
      
      return (
        <section 
          className={`py-16 ${editableStyles}`}
          onClick={handleClick}
          data-section-id={section.id}
        >
          <EditOverlay />
          <div className="container mx-auto px-4 max-w-4xl">
            {content.title && (
              <h2 className="text-4xl font-light mb-8 text-center">
                {content.title as string}
              </h2>
            )}
            {videoUrl ? (
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src={getEmbedUrl(videoUrl)}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">No video configured</span>
              </div>
            )}
          </div>
        </section>
      );

    case 'custom':
      return (
        <section 
          className={`py-16 ${editableStyles}`}
          onClick={handleClick}
          data-section-id={section.id}
        >
          <EditOverlay />
          <div className="container mx-auto px-4">
            <div dangerouslySetInnerHTML={{ __html: (content.html as string) || '' }} />
          </div>
        </section>
      );

    default:
      return (
        <section 
          className={`py-8 ${editableStyles}`}
          onClick={handleClick}
          data-section-id={section.id}
        >
          <EditOverlay />
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            Unknown section type: {section.type}
          </div>
        </section>
      );
  }
}
