# Frontend Development Skills & Best Practices

## Architecture & Project Structure

### Component Organization
```
src/
├── components/         # Reusable UI components
│   ├── ui/            # Base UI components (Button, Input, etc.)
│   ├── forms/         # Form-specific components
│   └── layout/        # Layout components (Header, Sidebar, etc.)
├── app/              # Next.js App Router pages
├── lib/              # Utility functions and configurations
├── hooks/            # Custom React hooks
├── types/            # TypeScript type definitions
├── constants/        # Application constants
└── styles/           # Global styles and Tailwind config
```

### Design Patterns
- **Compound Components**: For complex UI components with multiple parts
- **Render Props**: For sharing logic between components
- **Custom Hooks**: Extract stateful logic for reusability
- **Provider Pattern**: For global state management
- **Higher-Order Components**: For cross-cutting concerns

## React & Next.js Best Practices

### Component Design
```typescript
// ✅ Good: Proper TypeScript interfaces
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  size = 'md',
  disabled = false,
  onClick,
  children,
}) => {
  // Implementation
};

// ❌ Bad: Any types, unclear props
const Button = ({ variant, ...props }: any) => {
  // Implementation
};
```

### State Management
- **Local State**: useState for component-specific state
- **Server State**: React Query/TanStack Query for API data
- **Global State**: Zustand or React Context for app-wide state
- **Form State**: React Hook Form for complex forms

### Performance Optimization
```typescript
// ✅ Use React.memo for expensive components
const ExpensiveComponent = React.memo(({ data }: Props) => {
  return <ComplexVisualization data={data} />;
});

// ✅ Use useMemo for expensive calculations
const processedData = useMemo(() => {
  return heavyProcessing(rawData);
}, [rawData]);

// ✅ Use useCallback for stable function references
const handleClick = useCallback(() => {
  // Handler logic
}, [dependency]);
```

## TypeScript Guidelines

### Type Safety
```typescript
// ✅ Strict type definitions
interface User {
  id: string;
  email: string;
  profile: {
    firstName: string;
    lastName: string;
    avatar?: string;
  };
}

// ✅ Generic components
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return <ul>{items.map(renderItem)}</ul>;
}

// ✅ Union types for variants
type ButtonVariant = 'primary' | 'secondary' | 'outline';
```

### Advanced TypeScript
- Use `as const` for immutable arrays and objects
- Leverage utility types: `Pick`, `Omit`, `Partial`, `Required`
- Create discriminated unions for complex state
- Use generic constraints for type safety

## State Management Strategies

### Local State Patterns
```typescript
// ✅ Reducer for complex state
interface State {
  loading: boolean;
  error: string | null;
  data: User[] | null;
}

type Action = 
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: User[] }
  | { type: 'FETCH_ERROR'; payload: string };

function userReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { loading: false, error: null, data: action.payload };
    case 'FETCH_ERROR':
      return { loading: false, error: action.payload, data: null };
    default:
      return state;
  }
}
```

### Global State with Zustand
```typescript
interface AppState {
  user: User | null;
  theme: 'light' | 'dark';
  setUser: (user: User | null) => void;
  toggleTheme: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  theme: 'light',
  setUser: (user) => set({ user }),
  toggleTheme: () => set((state) => ({ 
    theme: state.theme === 'light' ? 'dark' : 'light' 
  })),
}));
```

## Performance & Optimization

### Code Splitting
```typescript
// ✅ Route-based splitting
const DashboardPage = lazy(() => import('./pages/Dashboard'));

// ✅ Component-based splitting
const HeavyChart = lazy(() => import('./components/HeavyChart'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Suspense>
  );
}
```

### Bundle Optimization
- Use dynamic imports for large dependencies
- Implement tree shaking for unused code
- Optimize images with Next.js Image component
- Use service workers for caching strategies

## Testing Strategies

### Component Testing
```typescript
// ✅ Testing with React Testing Library
test('Button renders with correct variant class', () => {
  render(<Button variant="primary">Click me</Button>);
  
  const button = screen.getByRole('button');
  expect(button).toHaveClass('bg-blue-600');
  expect(button).toHaveTextContent('Click me');
});

// ✅ Testing user interactions
test('Form submission calls onSubmit with form data', async () => {
  const mockSubmit = jest.fn();
  render(<LoginForm onSubmit={mockSubmit} />);
  
  await user.type(screen.getByLabelText('Email'), 'test@example.com');
  await user.type(screen.getByLabelText('Password'), 'password');
  await user.click(screen.getByRole('button', { name: 'Sign In' }));
  
  expect(mockSubmit).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password'
  });
});
```

### Integration Testing
- Test API integration with MSW (Mock Service Worker)
- Test routing and navigation flows
- Test form workflows end-to-end

## Code Organization

### File Naming Conventions
```
components/
├── Button/
│   ├── Button.tsx          # Main component
│   ├── Button.test.tsx     # Tests
│   ├── Button.stories.tsx  # Storybook stories
│   └── index.ts           # Barrel export

hooks/
├── useAuth.ts             # Custom hooks
├── useLocalStorage.ts
└── index.ts              # Barrel exports

types/
├── api.ts                # API types
├── components.ts         # Component prop types
└── index.ts             # Barrel exports
```

### Import Organization
```typescript
// ✅ Organized imports
// React imports
import React, { useState, useEffect } from 'react';

// Third-party imports
import { NextPage } from 'next';
import { useQuery } from '@tanstack/react-query';

// Internal imports
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/hooks/useAuth';
import { User } from '@/types';
```

## Error Handling

### Error Boundaries
```typescript
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{}>,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}
```

### API Error Handling
```typescript
// ✅ Centralized error handling
interface ApiError {
  message: string;
  code: string;
  status: number;
}

async function apiRequest<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      const error: ApiError = await response.json();
      throw new Error(error.message);
    }
    
    return response.json();
  } catch (error) {
    // Log error and rethrow
    console.error('API request failed:', error);
    throw error;
  }
}
```

## Accessibility (a11y)

### Semantic HTML
```typescript
// ✅ Proper semantic structure
function ArticleCard({ article }: Props) {
  return (
    <article>
      <header>
        <h2>{article.title}</h2>
        <time dateTime={article.publishedAt}>
          {formatDate(article.publishedAt)}
        </time>
      </header>
      
      <main>
        <p>{article.excerpt}</p>
      </main>
      
      <footer>
        <a href={`/articles/${article.slug}`}>
          Read more <span className="sr-only">about {article.title}</span>
        </a>
      </footer>
    </article>
  );
}
```

### ARIA Attributes
```typescript
// ✅ Proper ARIA usage
function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-hidden={!isOpen}
    >
      <h2 id="modal-title">{title}</h2>
      {children}
      <button onClick={onClose} aria-label="Close modal">
        ×
      </button>
    </div>
  );
}
```

## Security Best Practices

### Input Validation
```typescript
// ✅ Validate and sanitize inputs
function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potentially dangerous characters
    .slice(0, 1000); // Limit length
}

// ✅ Use TypeScript for compile-time validation
interface CreateUserRequest {
  email: string; // Will be validated at runtime
  password: string; // Should be hashed server-side
}
```

### XSS Prevention
```typescript
// ✅ Safe rendering of user content
import DOMPurify from 'dompurify';

function SafeHtml({ content }: { content: string }) {
  const sanitized = DOMPurify.sanitize(content);
  return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
}
```

## Development Workflow

### Git Workflow
- Use conventional commits: `feat:`, `fix:`, `docs:`, `refactor:`
- Feature branches: `feature/user-authentication`
- Keep commits atomic and focused
- Use meaningful commit messages

### Code Review Checklist
- [ ] TypeScript types are properly defined
- [ ] Components are properly tested
- [ ] Performance considerations addressed
- [ ] Accessibility guidelines followed
- [ ] Error handling implemented
- [ ] Code is readable and well-documented

### Development Tools
- **ESLint**: Code linting and style enforcement
- **Prettier**: Code formatting
- **Husky**: Git hooks for pre-commit checks
- **TypeScript**: Type checking
- **Storybook**: Component development and documentation

## Modern React Patterns

### Server Components (Next.js 13+)
```typescript
// ✅ Server Component for data fetching
async function UserProfile({ userId }: { userId: string }) {
  const user = await fetchUser(userId); // Server-side data fetching
  
  return (
    <div>
      <h1>{user.name}</h1>
      <ClientComponent user={user} />
    </div>
  );
}

// ✅ Client Component for interactivity
'use client';
function ClientComponent({ user }: { user: User }) {
  const [isEditing, setIsEditing] = useState(false);
  // Client-side logic
}
```

### Concurrent Features
```typescript
// ✅ Use Suspense for loading states
function App() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <UserDashboard />
    </Suspense>
  );
}

// ✅ Use startTransition for non-urgent updates
function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  
  const handleSearch = (value: string) => {
    setQuery(value); // Urgent update
    
    startTransition(() => {
      setResults(searchResults(value)); // Non-urgent update
    });
  };
}
```

---

## Key Takeaways

1. **Type Safety First**: Use TypeScript extensively for better developer experience
2. **Component Composition**: Build reusable, composable components
3. **Performance Matters**: Optimize bundle size and runtime performance
4. **Test Everything**: Comprehensive testing strategy for reliability
5. **Accessibility**: Build inclusive applications from the start
6. **Security Awareness**: Always validate and sanitize user inputs
7. **Modern Patterns**: Leverage latest React and Next.js features
8. **Developer Experience**: Set up proper tooling and workflows