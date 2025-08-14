import { useState, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  ExternalLink,
  Github,
  Search,
  Calendar,
  Clock,
  Filter,
  Grid,
  List,
  ArrowLeft,
  CheckCircle,
  Clock3,
} from 'lucide-react';
import { completedProjects, inProgressProjects, Project } from '@/data/projects';
import { track } from '@/lib/analytics';

type ViewMode = 'grid' | 'list';
type StatusFilter = 'all' | 'completed' | 'in-progress';

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const allProjects = [...completedProjects, ...inProgressProjects];

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(allProjects.map(p => p.category)));
    return ['all', ...cats];
  }, [allProjects]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return allProjects.filter(project => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      const matchesStatus = statusFilter === 'all' || project.status === statusFilter;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchTerm, selectedCategory, statusFilter, allProjects]);

  const ProjectCard = ({ project }: { project: Project }) => (
    <article
      className={`group rounded-2xl border overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 bg-card hover:border-primary/30 hover:-translate-y-1 ${
        viewMode === 'list' ? 'flex flex-col sm:flex-row' : 'flex flex-col'
      }`}
    >
      {/* Project Image */}
      <div className={`relative overflow-hidden ${viewMode === 'list' ? 'sm:w-64 sm:flex-shrink-0' : ''}`}>
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
            viewMode === 'list' ? 'h-48 sm:h-full' : 'h-48 sm:h-56 lg:h-64'
          }`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          {project.status === 'completed' ? (
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
              <CheckCircle className="w-3 h-3 mr-1" /> Completed
            </Badge>
          ) : (
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Clock3 className="w-3 h-3 mr-1" /> In Progress
            </Badge>
          )}
        </div>
        {/* Progress Bar */}
        {project.status === 'in-progress' && project.progress && (
          <div className="absolute bottom-3 left-3 right-3">
            <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
              <div className="flex items-center gap-2 text-white text-xs">
                <span>{project.progress}%</span>
                <div className="flex-1 h-1.5 bg-white/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className={`p-4 sm:p-6 lg:p-8 ${viewMode === 'list' ? 'flex-1' : ''}`}>
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-primary font-medium mb-2">{project.category}</p>
          </div>
        </div>

        <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {project.tags.slice(0, 4).map(tag => (
            <Badge key={tag} variant="secondary" className="text-xs px-2 py-1">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 4 && (
            <Badge variant="outline" className="text-xs px-2 py-1">
              +{project.tags.length - 4} more
            </Badge>
          )}
        </div>

        {/* Date Info */}
        <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
          {project.completedDate && (
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>Completed {new Date(project.completedDate).toLocaleDateString()}</span>
            </div>
          )}
          {project.startDate && project.status === 'in-progress' && (
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>Started {new Date(project.startDate).toLocaleDateString()}</span>
            </div>
          )}
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 mt-auto">
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('project_live_demo_click', { title: project.title })}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-primary hover:text-primary/80 hover:underline transition-all group/link"
            >
              Live Demo <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('project_github_click', { title: project.title })}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary hover:underline transition-colors"
            >
              <Github className="w-3 h-3" /> Code
            </a>
          )}
          {project.caseStudyUrl && (
            <a
              href={project.caseStudyUrl}
              onClick={() => track('project_case_study_click', { title: project.title })}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary hover:underline transition-colors"
            >
              Case Study
            </a>
          )}
        </div>
      </div>
    </article>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <a
                href="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </a>
              <div className="hidden sm:block w-px h-6 bg-border" />
              <h1 className="text-xl sm:text-2xl font-semibold">All Projects</h1>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <Button variant={viewMode === 'grid' ? 'default' : 'outline'} size="sm" onClick={() => setViewMode('grid')}>
                <Grid className="w-4 h-4" />
              </Button>
              <Button variant={viewMode === 'list' ? 'default' : 'outline'} size="sm" onClick={() => setViewMode('list')}>
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Status Filter */}
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  <select
                    value={statusFilter}
                    onChange={e => setStatusFilter(e.target.value as StatusFilter)}
                    className="px-3 py-1.5 text-sm border rounded-md bg-background text-foreground"
                  >
                    <option value="all">All Status</option>
                    <option value="completed">Completed</option>
                    <option value="in-progress">In Progress</option>
                  </select>
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                  className="px-3 py-1.5 text-sm border rounded-md bg-background text-foreground"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-muted-foreground">
              Showing {filteredProjects.length} of {allProjects.length} projects
            </div>
          </div>

          {/* Projects Grid/List */}
          <div
            className={`${
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8'
                : 'space-y-6'
            }`}
          >
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="max-w-sm mx-auto">
                <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No projects found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your search terms or filters.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setStatusFilter('all');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}

          {/* Stats Section */}
          {filteredProjects.length > 0 && (
            <div className="mt-16 p-6 bg-muted/30 rounded-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{completedProjects.length}</div>
                  <div className="text-sm text-muted-foreground">Completed Projects</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">{inProgressProjects.length}</div>
                  <div className="text-sm text-muted-foreground">In Progress</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-orange-600">
                    {Math.round(
                      inProgressProjects.reduce((acc, p) => acc + (p.progress || 0), 0) / inProgressProjects.length
                    )}
                    %
                  </div>
                  <div className="text-sm text-muted-foreground">Average Progress</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
