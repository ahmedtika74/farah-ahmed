
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Heart, Lock, Music, Calendar } from 'lucide-react';
import couplePhoto from '@/assets/img_3781.jpg';

const CORRECT_PASSWORD = 'ahmedlovefarah';

export default function Index() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [daysTogether, setDaysTogether] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  // Set your anniversary date here
  const anniversaryDate = new Date('2025-06-07T00:00:00');
  
  useEffect(() => {
    if (isAuthenticated) {
      const startDate = new Date('2025-06-07');
      const today = new Date();
      const diffTime = Math.abs(today.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysTogether(diffDays);
      const calculateTime = () => {
      const now = new Date();
      const diff = now.getTime() - anniversaryDate.getTime();

      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const months = Math.floor(days / 30.44);
      const years = Math.floor(months / 12);

      setTimeElapsed({
        years: years,
        months: months % 12,
        days: days % 30,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Try again! ❤️');
      setPassword('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-2xl border-primary/20 animate-fadeIn">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="relative">
                <Heart className="w-16 h-16 text-primary animate-heartbeat" fill="currentColor" />
                <Lock className="w-6 h-6 text-primary absolute -bottom-1 -right-1 bg-background rounded-full p-1" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-primary">Our Love Story</CardTitle>
            <CardDescription className="text-base">
              Enter the password to unlock our memories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Enter password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-center text-lg border-primary/30 focus:border-primary"
                />
                {error && (
                  <p className="text-sm text-destructive text-center animate-fadeIn">
                    {error}
                  </p>
                )}
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
              >
                Unlock Our Story
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fadeIn">
          <div className="flex justify-center items-center gap-4">
            <Heart className="w-12 h-12 text-primary animate-heartbeat" fill="currentColor" />
            <h1 className="text-5xl md:text-6xl font-bold text-primary">
              Ahmed & Farah
            </h1>
            <Heart className="w-12 h-12 text-primary animate-heartbeat" fill="currentColor" />
          </div>
          <p className="text-xl text-muted-foreground">Our Beautiful Journey Together</p>
        </div>

        {/* Days Counter */}
        <Card className="shadow-xl border-primary/20 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <CardContent className="pt-6">
            {/* Time Together Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Time We've Shared Together
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { label: 'Years', value: timeElapsed.years },
              { label: 'Months', value: timeElapsed.months },
              { label: 'Days', value: timeElapsed.days },
              { label: 'Hours', value: timeElapsed.hours },
              { label: 'Minutes', value: timeElapsed.minutes },
              { label: 'Seconds', value: timeElapsed.seconds },
            ].map((item, index) => (
              <div
                key={item.label}
                className="bg-card rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl font-bold text-primary mb-2">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-muted-foreground font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
          </CardContent>
        </Card>

        {/* Photo */}
<Card className="p-8 bg-card/80 backdrop-blur-sm border-romantic-border animate-fade-in-delay-2">
          <div className="text-center mb-6">
            <Heart className="w-8 h-8 text-romantic-accent mx-auto mb-2" />
            <h2 className="text-2xl font-semibold text-romantic-primary">
              Our Precious Moments
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-lg aspect-square group">
              <img
                src={couplePhoto}
                alt="Ahmed and Farah"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-lg font-medium">
                  Together Forever ❤️
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center p-8 rounded-lg bg-romantic-accent/10">
              <div className="text-center space-y-4">
                <Heart className="w-16 h-16 text-romantic-accent mx-auto animate-pulse-slow" />
                <p className="text-lg text-romantic-primary font-medium">
                  "Every moment with you is a treasure"
                </p>
                <p className="text-romantic-secondary">
                  More memories to come...
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Music Player */}
        <Card className="shadow-xl border-primary/20 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Music className="w-8 h-8 text-primary" />
              <div>
                <CardTitle className="text-2xl">Our Song</CardTitle>
                <CardDescription>The melody of our love</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Xno24NdFZiI?loop=1&playlist=r4BFkJoUMIw"
                title="Our Favorite Song"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="border-0"
              ></iframe>
            </div>
          </CardContent>
        </Card>

        {/* Love Message */}
        <Card className="shadow-xl border-primary/20 bg-gradient-to-br from-primary/5 to-accent/30 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
          <CardContent className="pt-6 text-center space-y-4">
            <Heart className="w-16 h-16 text-primary mx-auto animate-float" fill="currentColor" />
            <p className="text-2xl md:text-3xl font-semibold text-primary">
              "In your eyes, I found my home. In your heart, I found my love. In your soul, I found my mate. With you, I am complete."
            </p>
            <p className="text-lg text-muted-foreground italic">
              Forever yours, Ahmed ❤️ Farah
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
