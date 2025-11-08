
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

  useEffect(() => {
    if (isAuthenticated) {
      const startDate = new Date('2025-06-07');
      const today = new Date();
      const diffTime = Math.abs(today.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysTogether(diffDays);
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
            <div className="text-center space-y-2">
              <Calendar className="w-10 h-10 text-primary mx-auto" />
              <p className="text-4xl md:text-5xl font-bold text-primary">{daysTogether}</p>
              <p className="text-lg text-muted-foreground">Days of Love & Happiness</p>
              <p className="text-sm text-muted-foreground">Since June 7, 2025</p>
            </div>
          </CardContent>
        </Card>

        {/* Photo */}
        <Card className="shadow-xl border-primary/20 overflow-hidden animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <CardContent className="p-0">
            <div className="relative">
              <img 
                src={couplePhoto} 
                alt="Ahmed and Farah" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent flex items-end justify-center pb-6">
                <p className="text-2xl font-semibold text-primary drop-shadow-lg">
                  Forever Together ❤️
                </p>
              </div>
            </div>
          </CardContent>
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
                src="https://www.youtube.com/embed/r4BFkJoUMIw?autoplay=1&loop=1&playlist=r4BFkJoUMIw"
                title="Our Favorite Song"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
              "Every moment with you is a treasure"
            </p>
            <p className="text-lg text-muted-foreground italic">
              From the first day to forever, our love grows stronger
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}