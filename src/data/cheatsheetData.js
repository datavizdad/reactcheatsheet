export const cheatsheetData = [
  {
    id: 'fundamentals',
    title: 'React Fundamentals',
    description: 'Core React concepts and JSX basics',
    subsections: [
      {
        id: 'jsx-basics',
        title: 'JSX Basics',
        description: 'Create elements with JavaScript expressions and map arrays to lists',
        codeExamples: [
          {
            code: `const element = <h1>Hello, {name}!</h1>;
const list = items.map(item => 
  <li key={item.id}>{item.name}</li>
);`,
            language: 'jsx'
          }
        ]
      },
      {
        id: 'functional-components',
        title: 'Functional Components',
        description: 'Define components as arrow functions or function declarations with props destructuring',
        codeExamples: [
          {
            code: `// Arrow function (preferred for simple components)
const Welcome = ({ name, age = 18 }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
    </div>
  );
};

// Function declaration (hoisted, good for complex components)
function Welcome({ name, age = 18 }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
    </div>
  );
}

// Implicit return (for simple JSX)
const SimpleCard = ({ title }) => (
  <div className="card">{title}</div>
);`,
            language: 'jsx'
          }
        ]
      },
      {
        id: 'props-children',
        title: 'Props & Children',
        description: 'Pass data to components via props and render nested content with children',
        codeExamples: [
          {
            code: `const Card = ({ title, children }) => (
  <div className="card">
    <h2>{title}</h2>
    {children}
  </div>
);

// Usage
<Card title="My Card">
  <p>Card content here</p>
</Card>`,
            language: 'jsx'
          }
        ]
      },
      {
        id: 'conditional-rendering',
        title: 'Conditional Rendering',
        description: 'Show/hide components based on conditions using ternary, logical AND, or early returns',
        codeExamples: [
          {
            code: `// Ternary operator
{user ? <Dashboard /> : <Login />}

// Logical AND
{isLoggedIn && <WelcomeMessage />}

// Early return
if (loading) return <Spinner />;
if (error) return <ErrorMessage />;`,
            language: 'jsx'
          }
        ]
      }
    ]
  },
  {
    id: 'hooks',
    title: 'Hooks & State Management',
    description: 'React hooks for state and side effects',
    subsections: [
      {
        id: 'usestate',
        title: 'useState',
        description: 'Manage component state with immutable updates for objects and arrays',
        codeExamples: [
          {
            code: `// Basic state
const [count, setCount] = useState(0);
const [user, setUser] = useState(null);
const [items, setItems] = useState([]);

// Functional updates
setCount(prev => prev + 1);
setItems(prev => [...prev, newItem]);

// Update object property (shallow)
const [user, setUser] = useState({ name: '', email: '' });
setUser(prev => ({ ...prev, name: 'John' }));

// Update nested object (deep copy)
const [profile, setProfile] = useState({
  user: { name: 'John', settings: { theme: 'dark' } }
});
setProfile(prev => ({
  ...prev,
  user: {
    ...prev.user,
    settings: { ...prev.user.settings, theme: 'light' }
  }
}));

// Update item in array by ID
const [users, setUsers] = useState([
  { id: 1, name: 'John' }, { id: 2, name: 'Jane' }
]);
setUsers(prev => prev.map(user => 
  user.id === 1 ? { ...user, name: 'Johnny' } : user
));

// Add/remove items from array
setUsers(prev => [...prev, newUser]); // Add
setUsers(prev => prev.filter(user => user.id !== 1)); // Remove`,
            language: 'jsx'
          }
        ]
      },
      {
        id: 'useeffect',
        title: 'useEffect',
        description: 'Handle side effects like API calls, subscriptions, and cleanup',
        codeExamples: [
          {
            code: `// Component mount
useEffect(() => {
  fetchData();
}, []); // Empty dependency array

// Dependency changes
useEffect(() => {
  fetchUser(userId);
}, [userId]);

// Cleanup
useEffect(() => {
  const timer = setInterval(() => {}, 1000);
  return () => clearInterval(timer);
}, []);`,
            language: 'jsx'
          }
        ]
      },
      {
        id: 'usereducer',
        title: 'useReducer',
        description: 'Manage complex state logic with actions and reducers for predictable updates',
        codeExamples: [
          {
            code: `// Reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
};

// Component usage
const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};`,
            language: 'jsx'
          }
        ]
      }
    ]
  },
  {
    id: 'events',
    title: 'Event Handling',
    description: 'Handle user interactions and form events',
    subsections: [
      {
        id: 'basic-events',
        title: 'Basic Events',
        description: 'Handle user interactions like clicks with event handlers',
        codeExamples: [
          {
            code: `const Button = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('Clicked!');
  };

  return <button onClick={handleClick}>Click</button>;
};`,
            language: 'jsx'
          }
        ]
      },
      {
        id: 'form-handling',
        title: 'Form Handling',
        description: 'Manage form state and handle input changes with controlled components',
        codeExamples: [
          {
            code: `const Form = () => {
  const [formData, setFormData] = useState({
    name: '', email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev, [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};`,
            language: 'jsx'
          }
        ]
      }
    ]
  },
  {
    id: 'api',
    title: 'API Integration',
    description: 'Fetch data and handle API calls',
    subsections: [
      {
        id: 'basic-fetch',
        title: 'Basic Fetch',
        description: 'Fetch data from APIs with loading states and error handling',
        codeExamples: [
          {
            code: `const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/data');
      if (!response.ok) throw new Error('Failed');
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, []);`,
            language: 'jsx'
          }
        ]
      },
      {
        id: 'post-request',
        title: 'POST Request',
        description: 'Send data to server with proper headers and error handling',
        codeExamples: [
          {
            code: `const createUser = async (userData) => {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData)
  });
  
  if (!response.ok) {
    throw new Error('Failed to create user');
  }
  
  return response.json();
};`,
            language: 'jsx'
          }
        ]
      },
      {
        id: 'custom-api-hook',
        title: 'Custom API Hook',
        description: 'Reusable hook for API calls with built-in state management and refetch capability',
        codeExamples: [
          {
            code: `const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refetch = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url);
      if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => { refetch(); }, [refetch]);
  
  return { data, loading, error, refetch };
};

// Usage
const UserList = () => {
  const { data: users, loading, error, refetch } = useApi('/api/users');

  if (loading) return <div>Loading...</div>;
  if (error) return (
    <div>
      Error: {error}
      <button onClick={refetch}>Retry</button>
    </div>
  );

  return (
    <ul>
      {users?.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
};`,
            language: 'jsx'
          }
        ]
      }
    ]
  },
  {
    id: 'routing',
    title: 'React Router',
    description: 'Client-side routing and navigation',
    subsections: [
      {
        id: 'basic-setup',
        title: 'Basic Setup',
        description: 'Configure client-side routing with route definitions and dynamic parameters',
        codeExamples: [
          {
            code: `import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/users/:id" element={<User />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);`,
            language: 'jsx'
          }
        ]
      },
      {
        id: 'navigation',
        title: 'Navigation',
        description: 'Navigate between pages with Link components and programmatic navigation',
        codeExamples: [
          {
            code: `import { Link, NavLink, useNavigate } from 'react-router-dom';

// Links
<Link to="/about">About</Link>
<NavLink to="/home" className={({isActive}) => 
  isActive ? 'active' : ''
}>Home</NavLink>

// Programmatic navigation
const navigate = useNavigate();
navigate('/dashboard');
navigate(-1); // Go back`,
            language: 'jsx'
          }
        ]
      },
      {
        id: 'url-parameters',
        title: 'URL Parameters',
        description: 'Access route parameters and query strings from the URL',
        codeExamples: [
          {
            code: `import { useParams, useSearchParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams(); // /users/:id
  const [searchParams] = useSearchParams(); // ?tab=profile
  const tab = searchParams.get('tab');
  
  return <div>User {id}, Tab: {tab}</div>;
};`,
            language: 'jsx'
          }
        ]
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Build & Deployment',
    description: 'Build and deploy React applications',
    subsections: [
      {
        id: 'vite-config',
        title: 'Vite Config',
        description: 'Configure build settings, plugins, and optimizations for production',
        codeExamples: [
          {
            code: `// vite.config.js
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})`,
            language: 'javascript'
          }
        ]
      },
      {
        id: 'environment-variables',
        title: 'Environment Variables',
        description: 'Manage different configurations for development, staging, and production',
        codeExamples: [
          {
            code: `# .env
VITE_API_URL=http://localhost:8000
VITE_APP_TITLE=My App`,
            language: 'bash'
          },
          {
            code: `// Usage
const apiUrl = import.meta.env.VITE_API_URL;
const appTitle = import.meta.env.VITE_APP_TITLE;`,
            language: 'jsx'
          }
        ]
      }
    ]
  },
  {
    id: 'real-world-patterns',
    title: 'Real-World Patterns',
    description: 'Common patterns used in production applications',
    subsections: [
      {
        id: 'search-with-filters',
        title: 'Search with Filters',
        description: 'Search component with debouncing (delays execution until user stops typing) and multiple filters',
        codeExamples: [
          {
            code: `// Custom useDebounce hook
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Search hook using debounce
const useSearch = (data, searchFields = ['name']) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const filteredData = useMemo(() => {
    let result = data;

    // Apply search
    if (debouncedSearchTerm) {
      result = result.filter(item =>
        searchFields.some(field =>
          item[field]?.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        )
      );
    }

    // Apply filters
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        result = result.filter(item => item[key] === value);
      }
    });

    // Apply sorting
    result.sort((a, b) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];
      const modifier = sortOrder === 'asc' ? 1 : -1;
      return aVal < bVal ? -modifier : aVal > bVal ? modifier : 0;
    });

    return result;
  }, [data, debouncedSearchTerm, filters, sortBy, sortOrder, searchFields]);

  return {
    searchTerm,
    setSearchTerm,
    filters,
    setFilters,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    filteredData
  };
};`,
            language: 'jsx'
          }
        ]
      },
      {
        id: 'optimistic-updates',
        title: 'Optimistic Updates',
        description: 'Update UI immediately while API call is in progress, rollback on error',
        codeExamples: [
          {
            code: `// React 19: Built-in useOptimistic hook
import { useOptimistic } from 'react';

function TodoItem({ todo, updateTodo }) {
  const [optimisticTodo, addOptimisticTodo] = useOptimistic(
    todo,
    (currentTodo, optimisticValue) => ({
      ...currentTodo,
      ...optimisticValue
    })
  );

  const handleToggle = async () => {
    // Immediately update UI
    addOptimisticTodo({ completed: !optimisticTodo.completed });
    
    try {
      // Make API call
      await updateTodo(todo.id, { completed: !todo.completed });
    } catch (error) {
      // React automatically reverts on error
      console.error('Failed to update todo:', error);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={optimisticTodo.completed}
        onChange={handleToggle}
      />
      {optimisticTodo.text}
    </div>
  );
}`,
            language: 'jsx'
          },
          {
            code: `// Custom solution (React 18 and below)
const useOptimisticUpdate = (initialData) => {
  const [data, setData] = useState(initialData);
  const [isUpdating, setIsUpdating] = useState(false);

  const optimisticUpdate = async (optimisticData, apiCall) => {
    const previousData = data;
    
    // Immediately update UI
    setData(optimisticData);
    setIsUpdating(true);

    try {
      // Make API call
      const result = await apiCall();
      setData(result);
    } catch (error) {
      // Rollback on error
      setData(previousData);
      throw error;
    } finally {
      setIsUpdating(false);
    }
  };

  return { data, isUpdating, optimisticUpdate };
};

// Usage
const TodoItem = ({ todo, onUpdate }) => {
  const { data, isUpdating, optimisticUpdate } = useOptimisticUpdate(todo);

  const handleToggle = async () => {
    const optimisticTodo = { ...data, completed: !data.completed };
    
    try {
      await optimisticUpdate(
        optimisticTodo,
        () => updateTodo(data.id, optimisticTodo)
      );
    } catch (error) {
      alert('Failed to update todo');
    }
  };

  return (
    <div className={isUpdating ? 'updating' : ''}>
      <input
        type="checkbox"
        checked={data.completed}
        onChange={handleToggle}
      />
      {data.title}
    </div>
  );
};`,
            language: 'jsx'
          }
        ]
      }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Patterns',
    description: 'Advanced React patterns and techniques',
    subsections: [
      {
        id: 'context-api',
        title: 'Context API',
        description: 'Share state across components without prop drilling',
        codeExamples: [
          {
            code: `const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);`,
            language: 'jsx'
          }
        ]
      },
      {
        id: 'error-boundaries',
        title: 'Error Boundaries',
        description: 'Catch JavaScript errors in component tree and display fallback UI (must be class components - no hooks available for this)',
        codeExamples: [
          {
            code: `class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to monitoring service
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="error-fallback">
          <h2>Something went wrong</h2>
          <p>{this.state.error?.message}</p>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}`,
            language: 'jsx'
          }
        ]
      },
      {
        id: 'react-memo',
        title: 'React.memo',
        description: 'Prevent unnecessary re-renders by memoizing component output',
        codeExamples: [
          {
            code: `const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{data.title}</div>;
});

// Custom comparison
const MyComponent = React.memo(({ user }) => {
  return <div>{user.name}</div>;
}, (prevProps, nextProps) => {
  return prevProps.user.id === nextProps.user.id;
});`,
            language: 'jsx'
          }
        ]
      }
    ]
  }
];

// Navigation structure for the app
export const navigationSections = [
  { id: 'fundamentals', title: 'React Fundamentals' },
  { id: 'hooks', title: 'Hooks & State' },
  { id: 'events', title: 'Event Handling' },
  { id: 'api', title: 'API Integration' },
  { id: 'routing', title: 'Routing' },
  { id: 'deployment', title: 'Deployment' },
  { id: 'real-world-patterns', title: 'Real-World Patterns' },
  { id: 'advanced', title: 'Advanced Patterns' }
];