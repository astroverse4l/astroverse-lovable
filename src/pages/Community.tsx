
import React, { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  MessageSquare,
  Heart,
  Share,
  Star,
  ChevronUp,
  ChevronDown,
  Plus,
  User,
  Rocket,
  Globe,
  CreditCard,
} from 'lucide-react';
import { useGoogleAuth } from '@/components/auth/GoogleAuthProvider';
import ExplosionEffect from '@/components/effects/ExplosionEffect';

// Dummy data for forum posts
const DUMMY_POSTS = [
  {
    id: 1,
    author: 'AstroExplorer',
    authorImage: '/public/lovable-uploads/3f96697a-f285-4638-a98c-6054d7cad4f2.png',
    title: "RetroTech's quantum processors are revolutionizing AI training",
    content: "Just tested the latest quantum processor from RetroTech and the results are mind-blowing! Training times reduced by 87% compared to traditional systems. Anyone else experiencing similar improvements?",
    likes: 24,
    comments: 8,
    timestamp: '2 hours ago',
    project: 'RetroTech',
    projectLink: '/retrotech',
    tags: ['quantum', 'ai', 'processors'],
  },
  {
    id: 2,
    author: 'Nebula42',
    authorImage: '',
    title: 'Echoe-2077 neural feedback system - realistic or overhyped?',
    content: "Been using Echoe's neural feedback system for about a month now. The sensory experiences are incredibly realistic, but I'm curious if others are noticing any diminishing effects after extended use?",
    likes: 17,
    comments: 12,
    timestamp: '5 hours ago',
    project: 'Echoe-2077',
    projectLink: '/echoe',
    tags: ['vr', 'neural', 'gaming'],
  },
  {
    id: 3,
    author: 'FinanceWizard',
    authorImage: '',
    title: 'Astral Finance education modules increased my returns by 40%',
    content: 'Just completed all the financial education modules on Astral Finance. Applied the strategies to my portfolio and saw a 40% increase in returns over the last quarter. Highly recommend!',
    likes: 31,
    comments: 15,
    timestamp: '1 day ago',
    project: 'Astral Finance',
    projectLink: '/astral-finance',
    tags: ['finance', 'investing', 'education'],
  },
];

// Forum post component
const ForumPost = ({ post }: { post: any }) => {
  const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="astro-card p-6 mb-6">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={post.authorImage} alt={post.author} />
            <AvatarFallback className="bg-astro-purple text-white">
              {post.author.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-bold text-white">{post.author}</h4>
            <p className="text-sm text-white/60">{post.timestamp}</p>
          </div>
        </div>
        <div className="flex items-center">
          <Button variant="ghost" size="sm" className="text-astro-blue">
            <Star className="h-4 w-4 mr-1" />
            Follow
          </Button>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2 text-white font-orbitron">{post.title}</h3>
        <p className="text-white/80 font-exo2">{post.content}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag: string) => (
          <span key={tag} className="px-3 py-1 rounded-full bg-astro-blue/10 text-astro-blue text-xs">
            #{tag}
          </span>
        ))}
        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-astro-purple/30 to-astro-blue/30 text-white text-xs">
          <a href={post.projectLink} className="flex items-center">
            <span>Project: {post.project}</span>
          </a>
        </span>
      </div>

      <div className="flex justify-between border-t border-white/10 pt-4">
        <Button 
          variant="ghost" 
          size="sm" 
          className={`text-white/70 hover:text-astro-blue ${liked ? 'text-astro-purple' : ''}`}
          onClick={handleLike}
        >
          <Heart className={`h-4 w-4 mr-2 ${liked ? 'fill-astro-purple' : ''}`} />
          {likes}
        </Button>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-white/70 hover:text-astro-blue"
          onClick={() => setShowComments(!showComments)}
        >
          <MessageSquare className="h-4 w-4 mr-2" />
          {post.comments} Comments
        </Button>
        
        <Button variant="ghost" size="sm" className="text-white/70 hover:text-astro-blue">
          <Share className="h-4 w-4 mr-2" />
          Share
        </Button>
      </div>

      {showComments && (
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="mb-4">
            <h5 className="font-bold text-sm text-white/80 mb-3">Comments</h5>
            
            {/* Dummy comment */}
            <div className="flex items-start space-x-3 mb-4">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-astro-blue text-white">NE</AvatarFallback>
              </Avatar>
              <div className="bg-astro-dark/50 p-3 rounded-lg flex-1">
                <div className="flex justify-between">
                  <p className="font-bold text-sm">NebulaExplorer</p>
                  <p className="text-xs text-white/60">1 hour ago</p>
                </div>
                <p className="text-sm text-white/80 mt-1">Completely agree with your findings! The processing power is incredible.</p>
              </div>
            </div>
            
            {/* Comment form */}
            <div className="flex items-start space-x-3 mt-6">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/public/lovable-uploads/cbf88306-6035-4fe4-a787-08c3ebea7c34.png" alt="You" />
                <AvatarFallback className="bg-astro-purple text-white">
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Textarea 
                  placeholder="Write a comment..." 
                  className="bg-astro-dark/50 border-white/10 resize-none mb-2"
                />
                <Button className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90">
                  Post Comment
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Main Community page component
const Community = () => {
  const { t } = useTranslation();
  const { isSignedIn, user, signIn } = useGoogleAuth();
  const [activeTab, setActiveTab] = useState('latest');
  const [newPostVisible, setNewPostVisible] = useState(false);

  const tabs = [
    { id: 'latest', label: 'Latest' },
    { id: 'trending', label: 'Trending' },
    { id: 'following', label: 'Following' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient font-orbitron">
              {t('community_forum')}
            </h1>

            <ExplosionEffect>
              <Button 
                className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90 flex items-center"
                onClick={() => setNewPostVisible(!newPostVisible)}
              >
                <Plus className="mr-2 h-4 w-4" />
                New Post
              </Button>
            </ExplosionEffect>
          </div>

          {!isSignedIn && (
            <div className="astro-card p-6 mb-8 flex flex-col md:flex-row justify-between items-center">
              <div>
                <h3 className="font-bold text-xl text-white mb-2 font-orbitron">Join the Astroverse Community</h3>
                <p className="text-white/80 font-exo2">Sign in to post, comment, and interact with other community members</p>
              </div>
              <Button 
                className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90 mt-4 md:mt-0"
                onClick={signIn}
              >
                <User className="mr-2 h-4 w-4" />
                Sign In with Google
              </Button>
            </div>
          )}

          {newPostVisible && (
            <div className="astro-card p-6 mb-8">
              <h3 className="font-bold text-xl text-white mb-4 font-orbitron">Create a New Post</h3>
              <div className="space-y-4">
                <Input 
                  placeholder="Post Title" 
                  className="bg-astro-dark/50 border-white/10"
                />
                <Textarea 
                  placeholder="What's on your mind?" 
                  className="bg-astro-dark/50 border-white/10 min-h-[150px] resize-none"
                />
                <div className="flex justify-between">
                  <Button variant="outline" className="border-white/20 text-white/70" onClick={() => setNewPostVisible(false)}>
                    Cancel
                  </Button>
                  <Button className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90">
                    Submit Post
                  </Button>
                </div>
              </div>
            </div>
          )}

          <div className="flex border-b border-white/10 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-3 font-medium transition-colors ${
                  activeTab === tab.id 
                    ? 'text-astro-blue border-b-2 border-astro-blue' 
                    : 'text-white/60 hover:text-white'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Posts feed */}
              <div className="space-y-6">
                {DUMMY_POSTS.map((post) => (
                  <ForumPost key={post.id} post={post} />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Community sidebar */}
              <div className="astro-card p-6">
                <h3 className="font-bold text-lg mb-4 text-white font-orbitron">Popular Projects</h3>
                <div className="space-y-4">
                  <a href="/retrotech" className="flex items-center justify-between p-2 hover:bg-white/5 rounded-md transition-colors">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-astro-purple to-astro-blue flex items-center justify-center mr-3">
                        <Rocket className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-white font-medium">RetroTech</span>
                    </div>
                    <ChevronUp className="h-4 w-4 text-green-500" />
                  </a>
                  <a href="/echoe" className="flex items-center justify-between p-2 hover:bg-white/5 rounded-md transition-colors">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-astro-purple to-astro-blue flex items-center justify-center mr-3">
                        <Globe className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-white font-medium">Echoe-2077</span>
                    </div>
                    <ChevronUp className="h-4 w-4 text-green-500" />
                  </a>
                  <a href="/astral-finance" className="flex items-center justify-between p-2 hover:bg-white/5 rounded-md transition-colors">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-astro-purple to-astro-blue flex items-center justify-center mr-3">
                        <CreditCard className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-white font-medium">Astral Finance</span>
                    </div>
                    <ChevronDown className="h-4 w-4 text-red-500" />
                  </a>
                </div>
              </div>

              <div className="astro-card p-6">
                <h3 className="font-bold text-lg mb-4 text-white font-orbitron">Trending Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['quantum', 'ai', 'finance', 'vr', 'neural', 'web3', 'crypto', 'nft', 'metaverse', 'design'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-astro-blue/10 text-astro-blue text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="astro-card p-6">
                <h3 className="font-bold text-lg mb-4 text-white font-orbitron">Community Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <p className="text-2xl font-bold text-gradient">12.5K</p>
                    <p className="text-white/70 text-sm">Members</p>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <p className="text-2xl font-bold text-gradient">8.7K</p>
                    <p className="text-white/70 text-sm">Posts</p>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <p className="text-2xl font-bold text-gradient">42K</p>
                    <p className="text-white/70 text-sm">Comments</p>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <p className="text-2xl font-bold text-gradient">10</p>
                    <p className="text-white/70 text-sm">Projects</p>
                  </div>
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
