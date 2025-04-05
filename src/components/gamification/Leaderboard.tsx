
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Award, BookOpen, Calendar, GraduationCap, Medal, Star, Trophy, Users } from "lucide-react";

const achievementCategories = [
  { name: "Academic", icon: <BookOpen className="h-5 w-5" />, color: "bg-blue-100 text-blue-800" },
  { name: "Leadership", icon: <Users className="h-5 w-5" />, color: "bg-purple-100 text-purple-800" },
  { name: "Attendance", icon: <Calendar className="h-5 w-5" />, color: "bg-green-100 text-green-800" },
  { name: "Special", icon: <Star className="h-5 w-5" />, color: "bg-amber-100 text-amber-800" },
];

const leaderboardData = [
  { id: 1, name: "Alex Johnson", points: 1850, level: 7, badges: 12, avatar: "A" },
  { id: 2, name: "Jamie Smith", points: 1720, level: 6, badges: 10, avatar: "J" },
  { id: 3, name: "Taylor Wilson", points: 1645, level: 6, badges: 11, avatar: "T" },
  { id: 4, name: "Morgan Lee", points: 1590, level: 5, badges: 9, avatar: "M" },
  { id: 5, name: "Casey Brown", points: 1470, level: 5, badges: 8, avatar: "C" },
  { id: 6, name: "Riley Davis", points: 1380, level: 4, badges: 7, avatar: "R" },
  { id: 7, name: "Jordan Miller", points: 1255, level: 4, badges: 6, avatar: "J" },
  { id: 8, name: "Avery Wilson", points: 1190, level: 3, badges: 5, avatar: "A" },
  { id: 9, name: "Quinn Thomas", points: 980, level: 3, badges: 4, avatar: "Q" },
  { id: 10, name: "Drew Garcia", points: 830, level: 2, badges: 3, avatar: "D" },
];

const recentAchievements = [
  { id: 1, name: "Perfect Attendance", description: "Attended all classes for 30 days straight", category: "Attendance", date: "2 days ago", points: 150 },
  { id: 2, name: "Quiz Master", description: "Scored 90%+ on 5 consecutive quizzes", category: "Academic", date: "1 week ago", points: 200 },
  { id: 3, name: "Event Organizer", description: "Successfully organized campus event", category: "Leadership", date: "2 weeks ago", points: 300 },
  { id: 4, name: "Early Bird", description: "Arrived early to class 10 times", category: "Attendance", date: "3 weeks ago", points: 100 },
];

const Leaderboard = () => {
  // Current user data (would normally come from auth context)
  const currentUser = {
    name: "You",
    points: 1250,
    level: 4,
    nextLevel: 1500,
    badges: 8,
    rank: 7,
  };

  const levelProgress = (currentUser.points / currentUser.nextLevel) * 100;

  return (
    <div className="space-y-6">
      {/* User Stats Card */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-primary/20 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            <GraduationCap className="h-6 w-6 mr-2 text-primary" />
            Your Achievements
          </CardTitle>
          <CardDescription>Track your progress and earn rewards</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center justify-center p-4 bg-white/80 rounded-lg shadow">
              <Trophy className="h-8 w-8 text-amber-500 mb-2" />
              <p className="text-sm text-muted-foreground">Academic Rank</p>
              <p className="text-2xl font-bold text-center">{currentUser.rank}</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-white/80 rounded-lg shadow">
              <Star className="h-8 w-8 text-purple-500 mb-2" />
              <p className="text-sm text-muted-foreground">Total Points</p>
              <p className="text-2xl font-bold text-center">{currentUser.points}</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-white/80 rounded-lg shadow">
              <Award className="h-8 w-8 text-blue-500 mb-2" />
              <p className="text-sm text-muted-foreground">Badges Earned</p>
              <p className="text-2xl font-bold text-center">{currentUser.badges}</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-white/80 rounded-lg shadow">
              <Medal className="h-8 w-8 text-green-500 mb-2" />
              <p className="text-sm text-muted-foreground">Current Level</p>
              <p className="text-2xl font-bold text-center">{currentUser.level}</p>
            </div>
          </div>

          <div className="mt-6 bg-white/80 p-4 rounded-lg shadow">
            <div className="flex justify-between mb-1 items-center">
              <span className="text-sm font-medium">Level Progress</span>
              <span className="text-sm font-medium">{currentUser.points}/{currentUser.nextLevel}</span>
            </div>
            <Progress value={levelProgress} className="h-3" />
            <p className="text-xs text-muted-foreground mt-1 text-center">
              {Math.round(currentUser.nextLevel - currentUser.points)} more points to reach level {currentUser.level + 1}
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leaderboard Table */}
        <Card className="lg:col-span-2 border-2 border-primary/20 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Trophy className="h-5 w-5 mr-2 text-amber-500" />
              Student Leaderboard
            </CardTitle>
            <CardDescription>Top performing students this semester</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">Rank</TableHead>
                  <TableHead>Student</TableHead>
                  <TableHead className="text-right">Points</TableHead>
                  <TableHead className="text-center">Level</TableHead>
                  <TableHead className="text-center">Badges</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboardData.map((student, index) => (
                  <TableRow key={student.id} className={student.name === "You" ? "bg-primary/5" : ""}>
                    <TableCell className="font-medium">
                      {index === 0 ? (
                        <div className="bg-amber-100 text-amber-800 w-8 h-8 rounded-full flex items-center justify-center">
                          1
                        </div>
                      ) : index === 1 ? (
                        <div className="bg-slate-200 text-slate-800 w-8 h-8 rounded-full flex items-center justify-center">
                          2
                        </div>
                      ) : index === 2 ? (
                        <div className="bg-amber-50 text-amber-600 w-8 h-8 rounded-full flex items-center justify-center">
                          3
                        </div>
                      ) : (
                        index + 1
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage src={`/avatar-${index + 1}.png`} alt={student.name} />
                          <AvatarFallback>{student.avatar}</AvatarFallback>
                        </Avatar>
                        <div>{student.name}</div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">{student.points}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant="secondary">Level {student.level}</Badge>
                    </TableCell>
                    <TableCell className="text-center">{student.badges}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="border-t px-6 py-3">
            <p className="text-sm text-muted-foreground">Updated daily at midnight</p>
          </CardFooter>
        </Card>

        {/* Recent Achievements */}
        <Card className="border-2 border-primary/20 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="h-5 w-5 mr-2 text-primary" />
              Recent Achievements
            </CardTitle>
            <CardDescription>Latest badges earned by students</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAchievements.map((achievement) => (
                <div key={achievement.id} className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                  <div className={`p-2 rounded-full mr-3 ${getCategoryColor(achievement.category)}`}>
                    {getCategoryIcon(achievement.category)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-sm">{achievement.name}</h4>
                      <Badge variant="outline" className="ml-2">+{achievement.points}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{achievement.description}</p>
                    <p className="text-xs text-muted-foreground mt-2">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-3 flex justify-center">
            <Badge variant="outline" className="cursor-pointer hover:bg-accent">View All Achievements</Badge>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

// Helper functions
const getCategoryColor = (category: string): string => {
  const found = achievementCategories.find((c) => c.name === category);
  return found ? found.color : "bg-gray-100 text-gray-800";
};

const getCategoryIcon = (category: string): React.ReactNode => {
  const found = achievementCategories.find((c) => c.name === category);
  return found ? found.icon : <Star className="h-5 w-5" />;
};

export default Leaderboard;
