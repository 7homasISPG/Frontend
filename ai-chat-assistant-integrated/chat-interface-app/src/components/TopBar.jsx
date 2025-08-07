import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Grid3X3, 
    BookOpen, 
    GraduationCap, 
    Info, 
    Shield, 
    Briefcase, 
    LogIn, 
    MapPin 
} from 'lucide-react';



const TopBar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-start h-16 space-x-8">
                    
                    {/* Logo is on the far left of this flex container */}
                    <div className="flex items-center flex-shrink-0">
                        <a href="https://www.firstdrivingcentre.ae/en" target="_blank" rel="noopener noreferrer">
                            <img 
                                src="/First_Drive_logo.png" 
                                alt="First Drive Logo" 
                                className="h-8 w-auto" 
                            />
                        </a>
                    </div>

                    {/* All other items are grouped together */}
                    <nav className="hidden md:flex items-center space-x-1">
                        <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-blue-600 font-medium hover:bg-blue-50"
                        >
                            <Grid3X3 className="h-4 w-4 mr-2" />
                            AI Assistance
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                            <BookOpen className="h-4 w-4 mr-2" />
                            All Courses
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                            <GraduationCap className="h-4 w-4 mr-2" />
                            Training Courses
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                            <Info className="h-4 w-4 mr-2" />
                            About us
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                            <Shield className="h-4 w-4 mr-2" />
                            Safety & Awareness
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                            <LogIn className="h-4 w-4 mr-2" />
                            Student Login
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                            <MapPin className="h-4 w-4 mr-2" />
                            Find Us
                        </Button>
                    </nav>

                    {/* Action Buttons */}
                    <div className="hidden md:flex items-center space-x-3 ml-auto">
                        <Button 
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6"
                        >
                            Login
                        </Button>
                        <Button 
                            variant="outline" 
                            size="sm"
                            className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-6"
                        >
                            Sign up
                        </Button>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default TopBar;