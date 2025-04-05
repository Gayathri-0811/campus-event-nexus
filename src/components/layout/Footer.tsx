
import React from "react";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Calendar className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">EventNexus</span>
            </Link>
            <p className="text-muted-foreground">
              Your central hub for campus events. Discover, engage, and participate in a
              vibrant community of activities.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/calendar" className="text-muted-foreground hover:text-primary">
                  Calendar
                </Link>
              </li>
              <li>
                <Link to="/create-event" className="text-muted-foreground hover:text-primary">
                  Create Event
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/events/academic" className="text-muted-foreground hover:text-primary">
                  Academic
                </Link>
              </li>
              <li>
                <Link to="/events/cultural" className="text-muted-foreground hover:text-primary">
                  Cultural
                </Link>
              </li>
              <li>
                <Link to="/events/sports" className="text-muted-foreground hover:text-primary">
                  Sports
                </Link>
              </li>
              <li>
                <Link to="/events/social" className="text-muted-foreground hover:text-primary">
                  Social
                </Link>
              </li>
              <li>
                <Link to="/events/career" className="text-muted-foreground hover:text-primary">
                  Career
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground">
              <p>University Campus</p>
              <p>123 College Road</p>
              <p>Email: info@eventnexus.edu</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} EventNexus. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
