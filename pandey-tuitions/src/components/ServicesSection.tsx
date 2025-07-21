import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calculator, Globe, Beaker, PenTool, Music } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: BookOpen,
      title: "All Subjects",
      description: "From Mathematics to Literature, we cover all academic subjects for every grade level.",
      subjects: ["English", "Hindi", "Social Studies", "General Knowledge"]
    },
    {
      icon: Calculator,
      title: "Mathematics",
      description: "Expert math tutors for all levels - from basic arithmetic to advanced calculus.",
      subjects: ["Algebra", "Geometry", "Trigonometry", "Calculus"]
    },
    {
      icon: Beaker,
      title: "Science",
      description: "Comprehensive science education with practical approach and concept clarity.",
      subjects: ["Physics", "Chemistry", "Biology", "Environmental Science"]
    },
    {
      icon: Globe,
      title: "Languages",
      description: "Improve communication skills and language proficiency with expert guidance.",
      subjects: ["English Speaking", "Hindi", "Sanskrit", "Regional Languages"]
    },
    {
      icon: PenTool,
      title: "Competitive Exams",
      description: "Specialized coaching for entrance exams and competitive examinations.",
      subjects: ["JEE", "NEET", "Board Exams", "Olympiads"]
    },
    {
      icon: Music,
      title: "Extra-Curricular",
      description: "Holistic development through music, arts, and other creative subjects.",
      subjects: ["Music", "Drawing", "Computer", "Spoken English"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-primary mb-4">
            Our Tuition Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive home tuition services across all subjects and grade levels. 
            Our experienced tutors ensure quality education right at your doorstep.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 bg-white border-primary/10">
                <CardHeader className="pb-4">
                  <div className="bg-gradient-primary p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-primary">Subjects Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.subjects.map((subject, subIndex) => (
                        <span 
                          key={subIndex}
                          className="bg-primary-light text-primary text-xs px-3 py-1 rounded-full font-medium"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;