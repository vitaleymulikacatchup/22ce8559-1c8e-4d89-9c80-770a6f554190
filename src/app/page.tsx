"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, GraduationCap, Heart, Mail, MapPin, Star, Trophy, Twitter, Users, Zap } from "lucide-react";

const assetMap = [];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Team", id: "team" },
            { name: "Features", id: "features" },
            { name: "Players", id: "players" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="FC Barcelona"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Més que un club"
          description="Experience the passion, tradition, and excellence of FC Barcelona. Join millions of culers worldwide in supporting the greatest football club in history."
          tag="FC Barcelona"
          tagIcon={Award}
          buttons={[
            { text: "Join Us", href: "contact" },
            { text: "Watch Highlights", href: "https://fcbarcelona.com" }
          ]}
          imageSrc="https://images.pexels.com/photos/12313588/pexels-photo-12313588.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Aerial view of Camp Nou stadium filled with spectators during a football match at sunset in Barcelona, Spain."
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Legacy"
          description={[
            "Founded in 1899, FC Barcelona has grown to become one of the most successful and beloved football clubs in the world.",
            "With our motto 'Més que un club' (More than a club), we represent the values of respect, effort, ambition, teamwork and humility.",
            "From Camp Nou to La Masia, we continue to set the standard for excellence in football and beyond."
          ]}
          buttons={[
            { text: "Our History", href: "https://fcbarcelona.com/en/club/history" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="What Makes Us Special"
          description="Discover the pillars that make FC Barcelona the most successful club in football history"
          tag="Excellence"
          tagIcon={Trophy}
          features={[
            {
              title: "La Masia Academy",
              description: "Our world-renowned youth academy has produced legends like Messi, Xavi, and Iniesta",
              icon: GraduationCap
            },
            {
              title: "Camp Nou Experience",
              description: "The largest stadium in Europe with capacity for 99,354 passionate culers",
              icon: MapPin
            },
            {
              title: "Tiki-Taka Philosophy",
              description: "Our unique playing style based on possession, short passing, and player movement",
              icon: Zap
            },
            {
              title: "Global Community",
              description: "Over 400 million fans worldwide supporting the Barça values and spirit",
              icon: Users
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="players" data-section="players">
        <ProductCardTwo
          title="Our Star Players"
          description="Meet the talented athletes who wear the Barça colors with pride"
          tag="Team 2025"
          tagIcon={Star}
          products={[
            {
              id: "1",
              brand: "FC Barcelona",
              name: "Robert Lewandowski",
              price: "#9",
              rating: 5,
              reviewCount: "850k",
              imageSrc: "https://images.pexels.com/photos/3302365/pexels-photo-3302365.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A young African American football player wearing sports gear in an outdoor stadium on a sunny day."
            },
            {
              id: "2",
              brand: "FC Barcelona",
              name: "Pedri González",
              price: "#8",
              rating: 5,
              reviewCount: "720k",
              imageSrc: "https://images.pexels.com/photos/9502006/pexels-photo-9502006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Female soccer player dribbling a ball during a casual game on a grassy field at sunset."
            },
            {
              id: "3",
              brand: "FC Barcelona",
              name: "Ronald Araújo",
              price: "#4",
              rating: 5,
              reviewCount: "690k",
              imageSrc: "https://images.pexels.com/photos/9502006/pexels-photo-9502006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Female soccer player dribbling a ball during a casual game on a grassy field at sunset."
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Fans Say"
          description="Hear from the passionate culers who make FC Barcelona more than just a club"
          tag="Culer Voices"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",
              name: "María García",
              role: "Culer since 1995",
              company: "Barcelona Local",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/33382396/pexels-photo-33382396.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "An enthusiastic football fan celebrating with arms raised in a jersey against a red background."
            },
            {
              id: "2",
              name: "David Chen",
              role: "International Fan",
              company: "Penya Barcelona Singapore",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5789418/pexels-photo-5789418.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Joyous man celebrating a football victory with fans in a stadium, showing happiness and excitement."
            },
            {
              id: "3",
              name: "Alessandro Rossi",
              role: "Season Ticket Holder",
              company: "Camp Nou Regular",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4011736/pexels-photo-4011736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Crop unrecognizable person in bright yellow shirt standing near white stairway for training in sports hall"
            },
            {
              id: "4",
              name: "Sophie Martin",
              role: "Youth Coach",
              company: "Barça Academy",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/27271634/pexels-photo-27271634.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Excited women fans celebrate with flags and smiles during a sports event outdoors."
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Leadership Team"
          description="Meet the people who guide FC Barcelona towards continued success"
          tag="Management"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Joan Laporta",
              role: "President",
              imageSrc: "https://images.pexels.com/photos/22028295/pexels-photo-22028295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Players in green uniforms engage in a dynamic soccer match on a grassy field.",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com/fcbarcelona" }
              ]
            },
            {
              id: "2",
              name: "Xavi Hernández",
              role: "Head Coach",
              imageSrc: "https://images.pexels.com/photos/21675896/pexels-photo-21675896.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A black and white photo of a youth soccer team huddling on the field during dusk.",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com/fcbarcelona" }
              ]
            },
            {
              id: "3",
              name: "Deco",
              role: "Sporting Director",
              imageSrc: "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fans cheer as players take the field at a vibrant football stadium, creating an electric atmosphere."
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Join Us"
          title="Get Exclusive Barça Access"
          description="Stay connected with FC Barcelona. Get the latest news, match updates, and exclusive content delivered to your inbox."
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive emails from FC Barcelona. Unsubscribe anytime."
          imageSrc="https://images.pexels.com/photos/33079680/pexels-photo-33079680.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Close-up view of the iconic San Siro Stadium in Milan, showcasing its unique architecture."
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Club",
              items: [
                { label: "History", href: "https://fcbarcelona.com/en/club/history" },
                { label: "Values", href: "https://fcbarcelona.com/en/club/values" },
                { label: "Stadium", href: "https://fcbarcelona.com/en/club/facilities/camp-nou" }
              ]
            },
            {
              title: "Team",
              items: [
                { label: "First Team", href: "https://fcbarcelona.com/en/football/first-team" },
                { label: "La Masia", href: "https://fcbarcelona.com/en/football/youth" },
                { label: "Women's Team", href: "https://fcbarcelona.com/en/football/women" }
              ]
            },
            {
              title: "Fans",
              items: [
                { label: "Membership", href: "https://fcbarcelona.com/en/membership" },
                { label: "Fan Clubs", href: "https://fcbarcelona.com/en/fans" },
                { label: "Store", href: "https://store.fcbarcelona.com" }
              ]
            }
          ]}
          copyrightText="© 2025 | FC Barcelona - Més que un club"
        />
      </div>
    </ThemeProvider>
  );
}