import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MessageCircle, Heart, Share, ArrowUp, ArrowDown, 
  Star, User, Users, Globe, Send 
} from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import ExplosionEffect from '@/components/effects/ExplosionEffect';
import { useGoogleAuth } from '@/components/auth/GoogleAuthProvider';
import { toast } from '@/components/ui/use-toast';

// Mock data for posts
const MOCK_POSTS = [
  {
    id: '1',
    author: {
      name: 'SpaceExplorer',
      avatar: '/public/lovable-uploads/c9cd2b0a-6a28-486d-9845-6491ffd2f47a.png',
      project: 'RetroTech',
    },
    content: 'Just finished testing the new quantum processor from RetroTech. The computational power is beyond anything I\'ve seen before! This will revolutionize our neural network capabilities.',
    image: '/public/lovable-uploads/3f96697a-f285-4638-a98c-6054d7cad4f2.png',
    timestamp: '2h ago',
    likes: 124,
    comments: 23,
    shares: 12,
    category: 'tech',
  },
  {
    id: '2',
    author: {
      name: 'GameDeveloper2077',
      avatar: '/public/lovable-uploads/b0f8e6a2-414c-49c9-b973-11e3f6c93df5.png',
      project: 'Echoe-2077',
    },
    content: 'Sneak peek of the new Echoe-2077 virtual reality environment. The neural feedback system creates the most immersive experience ever developed. Who wants to be among the first beta testers?',
    image: '/public/lovable-uploads/912d57fb-fe1b-40c8-bc43-d6ca85898211.png',
    timestamp: '5h ago',
    likes: 328,
    comments: 85,
    shares: 47,
    category: 'gaming',
  },
  {
    id: '3',
    author: {
      name: 'CryptoVisionary',
      avatar: '/public/lovable-uploads/071bde78-c428-4001-a95e-b9ec132f9119.png',
      project: 'Astorium',
    },
    content: 'The latest Astorium protocol update has increased transaction speeds by 200% while reducing gas fees. This is why we\'re seeing mainstream adoption happening faster than with any previous cryptocurrency.',
    image: '/public/lovable-uploads/e77a0b26-350e-47c6-85f3-0be2da5f2593.png',
    timestamp: '1d ago',
    likes: 215,
    comments: 34,
    shares: 28,
    category: 'finance',
  },
  {
    id: '4',
    author: {
      name: 'FashionFuturist',
      avatar: '/public/lovable-uploads/093a8651-c02b-44a0-8ece-ac3587ac90ec.png', 
      project: 'Spacecraft',
    },
    content: 'Our new adaptive fabric responds to environmental changes, regulating temperature and even changing color based on surrounding conditions. The future of fashion is programmable!',
    timestamp: '2d ago',
    likes: 197,
    comments: 41,
    shares: 19,
    category: 'fashion',
  },
  {
    id: '5',
    author: {
      name: 'DigitalArchitect',
      avatar: '/public/lovable-uploads/8521ca11-d929-479f-aba7-92cb28897432.png',
      project: 'Astral Studios',
    },
    content: 'Our latest 3D rendering engine can now simulate realistic physics for virtual environments with zero latency. Perfect for architectural visualization and digital twin applications.',
    image: '/public/lovable-uploads/0081bfec-f662-43e2-a11c-7dd04c52474e.png',
    timestamp: '3d ago',
    likes: 156,
    comments: 27,
    shares: 14,
    category: 'design',
  },
];

const Community = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('all');
  const [commentText, setCommentText] = useState('');
  const [userVotes, setUserVotes] = useState<Record<string, 'up' | 'down' | null>>({});
  const [userLikes, setUserLikes] = useState<Record<string, boolean>>({});
  const { isSignedIn, user, signIn } = useGoogleAuth();
  
  const filteredPosts = activeTab === 'all' 
    ? MOCK_POSTS 
    : MOCK_POSTS.filter(post => post.category === activeTab);
  
  const handleVote = (postId: string, direction: 'up' | 'down') => {
    if (!isSignedIn) {
      toast({
        title: t('sign_in_required'),
        description: t('sign_in_to_vote'),
        variant: "default"
      });
      return;
    }
    
    setUserVotes(prev => {
      // If already voted in this direction, remove the vote
      if (prev[postId] === direction) {
        const newVotes = {...prev};
        delete newVotes[postId];
        return newVotes;
      }
      
      // Otherwise set the vote in this direction
      return {
        ...prev,
        [postId]: direction
      };
    });
  };
  
  const handleLike = (postId: string) => {
    if (!isSignedIn) {
      toast({
        title: t('sign_in_required'),
        description: t('sign_in_to_like'),
        variant: "default"
      });
      return;
    }
    
    setUserLikes(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };
  
  const handleComment = (postId: string) => {
    if (!commentText.trim()) return;
    
    if (!isSignedIn) {
      toast({
        title: t('sign_in_required'),
        description: t('sign_in_to_comment'),
        variant: "default"
      });
      return;
    }
    
    toast({
      title: t('comment_posted'),
      description: t('comment_success'),
    });
    
    setCommentText('');
  };
  
  const handleShare = (postId: string) => {
    if (!isSignedIn) {
      toast({
        title: t('sign_in_required'),
        description: t('sign_in_to_share'),
        variant: "default"
      });
      return;
    }
    
    toast({
      title: t('post_shared'),
      description: t('share_success'),
    });
  };

  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              {t('community_forum')}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {t('community_description')}
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main content */}
            <div className="flex-1">
              <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
                <div className="astro-card p-2 backdrop-blur-md mb-6">
                  <TabsList className="w-full bg-transparent grid grid-cols-3 md:grid-cols-6 gap-1">
                    <TabsTrigger value="all" className="data-[state=active]:bg-astro-blue data-[state=active]:text-white">
                      <Globe className="h-4 w-4 mr-2" />
                      {t('all')}
                    </TabsTrigger>
                    <TabsTrigger value="tech" className="data-[state=active]:bg-astro-blue data-[state=active]:text-white">
                      {t('tech')}
                    </TabsTrigger>
                    <TabsTrigger value="gaming" className="data-[state=active]:bg-astro-blue data-[state=active]:text-white">
                      {t('gaming')}
                    </TabsTrigger>
                    <TabsTrigger value="finance" className="data-[state=active]:bg-astro-blue data-[state=active]:text-white">
                      {t('finance')}
                    </TabsTrigger>
                    <TabsTrigger value="design" className="data-[state=active]:bg-astro-blue data-[state=active]:text-white">
                      {t('design')}
                    </TabsTrigger>
                    <TabsTrigger value="fashion" className="data-[state=active]:bg-astro-blue data-[state=active]:text-white">
                      {t('fashion')}
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value={activeTab} className="space-y-6 mt-0">
                  {filteredPosts.map((post) => (
                    <div key={post.id} className="astro-card backdrop-blur-md overflow-hidden">
                      {/* Post header */}
                      <div className="p-4 flex items-center space-x-3 border-b border-white/10">
                        <Avatar className="h-10 w-10">
                          {post.author.avatar ? (
                            <img src={post.author.avatar} alt={post.author.name} />
                          ) : (
                            <User className="h-6 w-6" />
                          )}
                        </Avatar>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-white">{post.author.name}</h3>
                            <span className="text-xs text-astro-blue py-0.5 px-2 rounded-full bg-astro-blue/10 border border-astro-blue/20">
                              {post.author.project}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                        </div>
                      </div>
                      
                      {/* Post content */}
                      <div className="p-4">
                        <p className="text-white/90 mb-4">{post.content}</p>
                        
                        {post.image && (
                          <div className="rounded-lg overflow-hidden mb-4 bg-astro-dark/50">
                            <img 
                              src={post.image} 
                              alt="Post content" 
                              className="w-full object-cover max-h-80"
                            />
                          </div>
                        )}
                      </div>
                      
                      {/* Post stats */}
                      <div className="px-4 py-2 border-t border-white/10 flex justify-between text-sm text-muted-foreground">
                        <div className="flex space-x-4">
                          <span>{post.likes + (userLikes[post.id] ? 1 : 0)} {t('likes')}</span>
                          <span>{post.comments} {t('comments')}</span>
                        </div>
                        <span>{post.shares} {t('shares')}</span>
                      </div>
                      
                      {/* Post actions */}
                      <div className="flex border-t border-white/10">
                        <button 
                          className={`flex-1 flex items-center justify-center py-3 hover:bg-white/5 transition-colors ${
                            userLikes[post.id] ? 'text-astro-purple' : 'text-white'
                          }`}
                          onClick={() => handleLike(post.id)}
                        >
                          <Heart className={`h-5 w-5 mr-2 ${userLikes[post.id] ? 'fill-astro-purple' : ''}`} />
                          {t('like')}
                        </button>
                        
                        <button 
                          className="flex-1 flex items-center justify-center py-3 hover:bg-white/5 transition-colors text-white"
                        >
                          <MessageCircle className="h-5 w-5 mr-2" />
                          {t('comment')}
                        </button>
                        
                        <button 
                          className="flex-1 flex items-center justify-center py-3 hover:bg-white/5 transition-colors text-white"
                          onClick={() => handleShare(post.id)}
                        >
                          <Share className="h-5 w-5 mr-2" />
                          {t('share')}
                        </button>
                      </div>
                      
                      {/* Comment section */}
                      <div className="p-4 border-t border-white/10 bg-white/5">
                        <div className="flex items-center space-x-3 mb-4">
                          <Avatar className="h-8 w-8">
                            {isSignedIn && user?.imageUrl ? (
                              <img src={user.imageUrl} alt={user.name} />
                            ) : (
                              <User className="h-5 w-5" />
                            )}
                          </Avatar>
                          <div className="flex-1 flex items-center">
                            <Input
                              placeholder={t('write_comment')}
                              className="flex-1 bg-white/10 border-none focus-visible:ring-1 focus-visible:ring-astro-blue"
                              value={commentText}
                              onChange={(e) => setCommentText(e.target.value)}
                            />
                            <Button 
                              size="icon" 
                              variant="ghost" 
                              className="ml-2 text-astro-blue hover:bg-astro-blue/10"
                              onClick={() => handleComment(post.id)}
                            >
                              <Send className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        
                        {post.comments > 0 && (
                          <Button 
                            variant="ghost" 
                            className="text-astro-blue hover:bg-astro-blue/10 w-full"
                          >
                            {t('view_comments', { count: post.comments })}
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div className="w-full md:w-80 space-y-6">
              {/* User card */}
              <div className="astro-card p-6 backdrop-blur-md text-center">
                {isSignedIn ? (
                  <>
                    <Avatar className="h-20 w-20 mx-auto mb-4 ring-2 ring-astro-blue">
                      {user?.imageUrl ? (
                        <img src={user.imageUrl} alt={user.name} />
                      ) : (
                        <User className="h-10 w-10" />
                      )}
                    </Avatar>
                    <h3 className="text-xl font-semibold text-white mb-1">{user?.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{user?.email}</p>
                    <div className="flex justify-center space-x-4 text-muted-foreground text-sm">
                      <div>
                        <div className="font-semibold text-white">247</div>
                        <div>{t('connections')}</div>
                      </div>
                      <div className="h-10 border-l border-white/10"></div>
                      <div>
                        <div className="font-semibold text-white">15</div>
                        <div>{t('projects')}</div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <Avatar className="h-20 w-20 mx-auto mb-4 bg-astro-dark">
                      <User className="h-10 w-10 text-muted-foreground" />
                    </Avatar>
                    <h3 className="text-xl font-semibold text-white mb-2">{t('guest_user')}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {t('sign_in_join_community')}
                    </p>
                    <ExplosionEffect>
                      <Button 
                        className="w-full bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90"
                        onClick={signIn}
                      >
                        {t('sign_in_with_google')}
                      </Button>
                    </ExplosionEffect>
                  </>
                )}
              </div>
              
              {/* Trending topics */}
              <div className="astro-card p-6 backdrop-blur-md">
                <h3 className="text-lg font-semibold text-gradient mb-4">{t('trending_topics')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-astro-purple/20 flex items-center justify-center">
                      <Star className="h-5 w-5 text-astro-purple" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{t('quantum_computing')}</h4>
                      <p className="text-xs text-muted-foreground">256 {t('posts')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-astro-blue/20 flex items-center justify-center">
                      <Globe className="h-5 w-5 text-astro-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{t('metaverse_development')}</h4>
                      <p className="text-xs text-muted-foreground">194 {t('posts')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-astro-cyan/20 flex items-center justify-center">
                      <Users className="h-5 w-5 text-astro-cyan" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{t('dao_governance')}</h4>
                      <p className="text-xs text-muted-foreground">142 {t('posts')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Active projects */}
              <div className="astro-card p-6 backdrop-blur-md">
                <h3 className="text-lg font-semibold text-gradient mb-4">{t('active_projects')}</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-2 rounded-md hover:bg-white/5 transition-colors">
                    <img 
                      src="/public/lovable-uploads/e7bedbc5-9dc9-4797-a6cd-5feb5319b5f0.png" 
                      alt="RetroTech Logo" 
                      className="h-8 w-8 object-contain"
                    />
                    <span className="font-medium text-white">RetroTech</span>
                  </button>
                  
                  <button className="w-full flex items-center space-x-3 p-2 rounded-md hover:bg-white/5 transition-colors">
                    <img 
                      src="/public/lovable-uploads/570f303b-d79c-4529-a73a-39e849d88dc4.png" 
                      alt="Astorium Logo" 
                      className="h-8 w-8 object-contain"
                    />
                    <span className="font-medium text-white">Astorium</span>
                  </button>
                  
                  <button className="w-full flex items-center space-x-3 p-2 rounded-md hover:bg-white/5 transition-colors">
                    <img 
                      src="/public/lovable-uploads/176de78f-b8be-402e-b1cf-72707a84b25a.png" 
                      alt="Syntril Logo" 
                      className="h-8 w-8 object-contain"
                    />
                    <span className="font-medium text-white">Syntril</span>
                  </button>
                  
                  <button className="w-full flex items-center space-x-3 p-2 rounded-md hover:bg-white/5 transition-colors">
                    <img 
                      src="/public/lovable-uploads/f2adb176-2cca-441e-855f-ffab4caf920f.png" 
                      alt="TarsNet Logo" 
                      className="h-8 w-8 object-contain"
                    />
                    <span className="font-medium text-white">TarsNet</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Community;
