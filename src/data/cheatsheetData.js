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
  /*{
    id: 'coldfusion-backend',
    title: 'ColdFusion Backend for React',
    description: 'ColdFusion components and APIs to support React frontends',
    subsections: [
      {
        id: 'cf-api-components',
        title: 'API Components (CFCs)',
        description: 'ColdFusion components that serve JSON APIs for React consumption',
        codeExamples: [
          {
            scriptCode: `// UserAPI.cfc - REST API component
component restpath="/api/users" {
    
    remote struct function getUsers() 
        returnformat="json" 
        httpmethod="GET" {
        
        var users = queryExecute("
            SELECT id, name, email, created_date 
            FROM users 
            WHERE active = 1
        ");
        
        return {
            "success": true,
            "data": queryToArray(users),
            "count": users.recordCount
        };
    }
    
    remote struct function createUser() 
        returnformat="json" 
        httpmethod="POST" {
        
        var requestData = deserializeJSON(toString(getHttpRequestData().content));
        
        var newUserId = queryExecute("
            INSERT INTO users (name, email, created_date)
            VALUES (?, ?, ?)
        ", [
            requestData.name,
            requestData.email,
            now()
        ], {
            result: "insertResult"
        });
        
        return {
            "success": true,
            "data": {
                "id": insertResult.generatedKey,
                "name": requestData.name,
                "email": requestData.email
            }
        };
    }
}`,
            tagCode: `<!-- UserAPI.cfc - REST API component -->
<cfcomponent restpath="/api/users">
    
    <cffunction name="getUsers" access="remote" returntype="struct" 
                returnformat="json" httpmethod="GET">
        
        <cfquery name="users">
            SELECT id, name, email, created_date 
            FROM users 
            WHERE active = 1
        </cfquery>
        
        <cfset var result = {}>
        <cfset result.success = true>
        <cfset result.data = queryToArray(users)>
        <cfset result.count = users.recordCount>
        
        <cfreturn result>
    </cffunction>
    
    <cffunction name="createUser" access="remote" returntype="struct" 
                returnformat="json" httpmethod="POST">
        
        <cfset var requestData = deserializeJSON(toString(getHttpRequestData().content))>
        
        <cfquery result="insertResult">
            INSERT INTO users (name, email, created_date)
            VALUES (
                <cfqueryparam value="#requestData.name#" cfsqltype="cf_sql_varchar">,
                <cfqueryparam value="#requestData.email#" cfsqltype="cf_sql_varchar">,
                <cfqueryparam value="#now()#" cfsqltype="cf_sql_timestamp">
            )
        </cfquery>
        
        <cfset var result = {}>
        <cfset result.success = true>
        <cfset result.data = {}>
        <cfset result.data.id = insertResult.generatedKey>
        <cfset result.data.name = requestData.name>
        <cfset result.data.email = requestData.email>
        
        <cfreturn result>
    </cffunction>
    
</cfcomponent>`,
            templateCode: `<!-- get_users.cfm - Template-based API endpoint -->
<cfprocessingdirective suppresswhitespace="true">
<cfset response = {}>
<cftry>
    <!--- Include external SQL file --->
    <cfinclude template="sql/get_active_users_sql.cfm">
    
    <cfif get_active_users.recordCount GT 0>
        <cfset response.success = true>
        <cfset response.message = "Users retrieved successfully">
        <cfset response.data = deserializeJSON(serializeJSON(get_active_users, "struct"))>
        <cfset response.count = get_active_users.recordCount>
    <cfelse>
        <cfset response.success = true>
        <cfset response.message = "No users found">
        <cfset response.data = []>
        <cfset response.count = 0>
    </cfif>
    
<cfcatch>
    <cfset response.success = false>
    <cfset response.error = "Database error occurred">
    <cfset response.message = "Please try again later">
</cfcatch>
</cftry>

<!--- Set JSON response headers --->
<cfheader name="Content-Type" value="application/json">
<cfoutput>#serializeJSON(response)#</cfoutput>
</cfprocessingdirective>

<!-- sql/get_active_users_sql.cfm -->
<cfquery name="get_active_users">
    SELECT id, name, email, created_date 
    FROM users 
    WHERE active = 1
    ORDER BY created_date DESC
</cfquery>`,
            language: 'javascript'
          }
        ]
      },

      {
        id: 'cf-session-auth',
        title: 'Session & Authentication',
        description: 'Handle user sessions and authentication for React apps',
        codeExamples: [
          {
            scriptCode: `// AuthAPI.cfc - Authentication component
component restpath="/api/auth" {
    
    remote struct function login() 
        returnformat="json" 
        httpmethod="POST" {
        
        var requestData = deserializeJSON(toString(getHttpRequestData().content));
        
        var user = queryExecute("
            SELECT id, name, email, password_hash 
            FROM users 
            WHERE email = ? AND active = 1
        ", [requestData.email]);
        
        if (user.recordCount && 
            hash(requestData.password, "SHA-256") == user.password_hash) {
            
            // Set session
            session.user = {
                "id": user.id,
                "name": user.name,
                "email": user.email,
                "loginTime": now()
            };
            
            return {
                "success": true,
                "user": session.user,
                "sessionId": session.sessionId
            };
        } else {
            return {
                "success": false,
                "message": "Invalid credentials"
            };
        }
    }
    
    remote struct function logout() 
        returnformat="json" 
        httpmethod="POST" {
        
        sessionInvalidate();
        
        return {
            "success": true,
            "message": "Logged out successfully"
        };
    }
    
    remote struct function checkSession() 
        returnformat="json" 
        httpmethod="GET" {
        
        if (structKeyExists(session, "user")) {
            return {
                "success": true,
                "user": session.user,
                "isAuthenticated": true
            };
        } else {
            return {
                "success": false,
                "isAuthenticated": false
            };
        }
    }
}`,
            tagCode: `<!-- AuthAPI.cfc - Authentication component -->
<cfcomponent restpath="/api/auth">
    
    <cffunction name="login" access="remote" returntype="struct" 
                returnformat="json" httpmethod="POST">
        
        <cfset var requestData = deserializeJSON(toString(getHttpRequestData().content))>
        
        <cfquery name="user">
            SELECT id, name, email, password_hash 
            FROM users 
            WHERE email = <cfqueryparam value="#requestData.email#" cfsqltype="cf_sql_varchar">
            AND active = 1
        </cfquery>
        
        <cfif user.recordCount AND hash(requestData.password, "SHA-256") EQ user.password_hash>
            <!--- Set session --->
            <cfset session.user = {}>
            <cfset session.user.id = user.id>
            <cfset session.user.name = user.name>
            <cfset session.user.email = user.email>
            <cfset session.user.loginTime = now()>
            
            <cfset var result = {}>
            <cfset result.success = true>
            <cfset result.user = session.user>
            <cfset result.sessionId = session.sessionId>
            
            <cfreturn result>
        <cfelse>
            <cfset var result = {}>
            <cfset result.success = false>
            <cfset result.message = "Invalid credentials">
            
            <cfreturn result>
        </cfif>
    </cffunction>
    
    <cffunction name="logout" access="remote" returntype="struct" 
                returnformat="json" httpmethod="POST">
        
        <cfset sessionInvalidate()>
        
        <cfset var result = {}>
        <cfset result.success = true>
        <cfset result.message = "Logged out successfully">
        
        <cfreturn result>
    </cffunction>
    
    <cffunction name="checkSession" access="remote" returntype="struct" 
                returnformat="json" httpmethod="GET">
        
        <cfif structKeyExists(session, "user")>
            <cfset var result = {}>
            <cfset result.success = true>
            <cfset result.user = session.user>
            <cfset result.isAuthenticated = true>
            
            <cfreturn result>
        <cfelse>
            <cfset var result = {}>
            <cfset result.success = false>
            <cfset result.isAuthenticated = false>
            
            <cfreturn result>
        </cfif>
    </cffunction>
    
</cfcomponent>`,
            templateCode: `<!-- login.cfm - Template-based login endpoint -->
<cfprocessingdirective suppresswhitespace="true">
<cfset response = {}>
<cftry>
    <!--- Get POST data --->
    <cfset requestData = deserializeJSON(toString(getHttpRequestData().content))>
    
    <!--- Include external SQL file --->
    <cfinclude template="sql/authenticate_user_sql.cfm">
    
    <cfif authenticate_user.recordCount GT 0 AND 
          hash(requestData.password, "SHA-256") EQ authenticate_user.password_hash>
        
        <!--- Set session data --->
        <cfset session.user = {}>
        <cfset session.user.id = authenticate_user.id>
        <cfset session.user.name = authenticate_user.name>
        <cfset session.user.email = authenticate_user.email>
        <cfset session.user.loginTime = now()>
        
        <cfset response.success = true>
        <cfset response.message = "Login successful">
        <cfset response.user = session.user>
        <cfset response.sessionId = session.sessionId>
    <cfelse>
        <cfset response.success = false>
        <cfset response.message = "Invalid credentials">
    </cfif>
    
<cfcatch>
    <cfset response.success = false>
    <cfset response.error = "Authentication error occurred">
    <cfset response.message = "Please try again later">
</cfcatch>
</cftry>

<!--- Set JSON response headers --->
<cfheader name="Content-Type" value="application/json">
<cfoutput>#serializeJSON(response)#</cfoutput>
</cfprocessingdirective>

<!-- sql/authenticate_user_sql.cfm -->
<cfquery name="authenticate_user">
    SELECT id, name, email, password_hash 
    FROM users 
    WHERE email = <cfqueryparam value="#requestData.email#" cfsqltype="cf_sql_varchar">
    AND active = 1
</cfquery>`,
            language: 'javascript'
          }
        ]
      },
      {
        id: 'cf-query-components',
        title: 'Query Components',
        description: 'Reusable ColdFusion components for database operations',
        codeExamples: [
          {
            scriptCode: `// DataService.cfc - Generic data service
component {
    
    public query function getRecords(
        required string table,
        struct filters = {},
        string orderBy = "id",
        numeric limit = 0
    ) {
        var sql = "SELECT * FROM #table#";
        var params = [];
        var whereClause = [];
        
        // Build WHERE clause from filters
        for (var key in filters) {
            arrayAppend(whereClause, "#key# = ?");
            arrayAppend(params, filters[key]);
        }
        
        if (arrayLen(whereClause)) {
            sql &= " WHERE " & arrayToList(whereClause, " AND ");
        }
        
        sql &= " ORDER BY #orderBy#";
        
        if (limit > 0) {
            sql &= " LIMIT #limit#";
        }
        
        return queryExecute(sql, params);
    }
    
    public struct function insertRecord(
        required string table,
        required struct data
    ) {
        var columns = structKeyArray(data);
        var placeholders = [];
        var params = [];
        
        for (var col in columns) {
            arrayAppend(placeholders, "?");
            arrayAppend(params, data[col]);
        }
        
        var sql = "INSERT INTO #table# (#arrayToList(columns)#) 
                   VALUES (#arrayToList(placeholders)#)";
        
        var result = queryExecute(sql, params, {result: "insertResult"});
        
        return {
            "success": true,
            "insertId": insertResult.generatedKey
        };
    }
    
    public boolean function updateRecord(
        required string table,
        required struct data,
        required numeric id
    ) {
        var setParts = [];
        var params = [];
        
        for (var key in data) {
            arrayAppend(setParts, "#key# = ?");
            arrayAppend(params, data[key]);
        }
        
        arrayAppend(params, id);
        
        var sql = "UPDATE #table# SET #arrayToList(setParts)# WHERE id = ?";
        
        queryExecute(sql, params);
        
        return true;
    }
}`,
            tagCode: `<!-- DataService.cfc - Generic data service -->
<cfcomponent>
    
    <cffunction name="getRecords" access="public" returntype="query">
        <cfargument name="table" type="string" required="true">
        <cfargument name="filters" type="struct" required="false" default="#{}#">
        <cfargument name="orderBy" type="string" required="false" default="id">
        <cfargument name="limit" type="numeric" required="false" default="0">
        
        <cfset var sql = "SELECT * FROM #arguments.table#">
        <cfset var params = []>
        <cfset var whereClause = []>
        
        <!--- Build WHERE clause from filters --->
        <cfloop collection="#arguments.filters#" item="key">
            <cfset arrayAppend(whereClause, "#key# = ?")>
            <cfset arrayAppend(params, arguments.filters[key])>
        </cfloop>
        
        <cfif arrayLen(whereClause)>
            <cfset sql = sql & " WHERE " & arrayToList(whereClause, " AND ")>
        </cfif>
        
        <cfset sql = sql & " ORDER BY #arguments.orderBy#">
        
        <cfif arguments.limit GT 0>
            <cfset sql = sql & " LIMIT #arguments.limit#">
        </cfif>
        
        <cfset var result = queryExecute(sql, params)>
        <cfreturn result>
    </cffunction>
    
    <cffunction name="insertRecord" access="public" returntype="struct">
        <cfargument name="table" type="string" required="true">
        <cfargument name="data" type="struct" required="true">
        
        <cfset var columns = structKeyArray(arguments.data)>
        <cfset var placeholders = []>
        <cfset var params = []>
        
        <cfloop array="#columns#" index="col">
            <cfset arrayAppend(placeholders, "?")>
            <cfset arrayAppend(params, arguments.data[col])>
        </cfloop>
        
        <cfset var sql = "INSERT INTO #arguments.table# (#arrayToList(columns)#) VALUES (#arrayToList(placeholders)#)">
        
        <cfquery result="insertResult">
            #sql#
            <cfloop array="#params#" index="param">
                <cfqueryparam value="#param#">
            </cfloop>
        </cfquery>
        
        <cfset var result = {}>
        <cfset result.success = true>
        <cfset result.insertId = insertResult.generatedKey>
        
        <cfreturn result>
    </cffunction>
    
    <cffunction name="updateRecord" access="public" returntype="boolean">
        <cfargument name="table" type="string" required="true">
        <cfargument name="data" type="struct" required="true">
        <cfargument name="id" type="numeric" required="true">
        
        <cfset var setParts = []>
        <cfset var params = []>
        
        <cfloop collection="#arguments.data#" item="key">
            <cfset arrayAppend(setParts, "#key# = ?")>
            <cfset arrayAppend(params, arguments.data[key])>
        </cfloop>
        
        <cfset arrayAppend(params, arguments.id)>
        
        <cfset var sql = "UPDATE #arguments.table# SET #arrayToList(setParts)# WHERE id = ?">
        
        <cfquery>
            #sql#
            <cfloop array="#params#" index="param">
                <cfqueryparam value="#param#">
            </cfloop>
        </cfquery>
        
        <cfreturn true>
    </cffunction>
    
</cfcomponent>`,
            templateCode: `<!-- get_records.cfm - Template-based data retrieval -->
<cfprocessingdirective suppresswhitespace="true">
<cfset response = {}>
<cftry>
    <!--- Get URL parameters --->
    <cfparam name="url.table" default="users">
    <cfparam name="url.orderBy" default="id">
    <cfparam name="url.limit" default="0">
    
    <!--- Include external SQL file --->
    <cfinclude template="sql/get_records_sql.cfm">
    
    <cfif get_records.recordCount GT 0>
        <cfset response.success = true>
        <cfset response.message = "Records retrieved successfully">
        <cfset response.data = deserializeJSON(serializeJSON(get_records, "struct"))>
        <cfset response.count = get_records.recordCount>
    <cfelse>
        <cfset response.success = true>
        <cfset response.message = "No records found">
        <cfset response.data = []>
        <cfset response.count = 0>
    </cfif>
    
<cfcatch>
    <cfset response.success = false>
    <cfset response.error = "Database error occurred">
    <cfset response.message = "Please try again later">
</cfcatch>
</cftry>

<!--- Set JSON response headers --->
<cfheader name="Content-Type" value="application/json">
<cfoutput>#serializeJSON(response)#</cfoutput>
</cfprocessingdirective>

<!-- sql/get_records_sql.cfm -->
<cfquery name="get_records">
    SELECT * FROM #url.table#
    WHERE active = 1
    ORDER BY #url.orderBy#
    <cfif url.limit GT 0>
        LIMIT #url.limit#
    </cfif>
</cfquery>`,
            language: 'javascript'
          }
        ]
      },
      {
        id: 'cf-application-settings',
        title: 'Application Settings',
        description: 'Application.cfc configuration for React-friendly ColdFusion apps',
        codeExamples: [
          {
            scriptCode: `// Application.cfc - Complete configuration
component {
    // Application settings
    this.name = "ReactCFApp_" & hash(getCurrentTemplatePath());
    this.applicationTimeout = createTimeSpan(1, 0, 0, 0);
    this.sessionManagement = true;
    this.sessionTimeout = createTimeSpan(0, 0, 30, 0);
    this.setClientCookies = true;
    this.setDomainCookies = false;
    
    // Security settings
    this.secureJSON = false;
    this.secureJSONPrefix = "";
    
    // Mappings for components
    this.mappings = {
        "/api": expandPath("./api"),
        "/components": expandPath("./components"),
        "/services": expandPath("./services")
    };
    
    // Custom tag paths
    this.customTagPaths = [expandPath("./customtags")];
    
    // Error handling
    this.errorTemplate = "/error.cfm";
    this.missingTemplate = "/404.cfm";
    
    // Application startup
    function onApplicationStart() {
        application.startTime = now();
        application.version = "1.0.0";
        
        // Initialize application-wide services
        application.dataService = new components.DataService();
        
        return true;
    }
    
    // Session startup
    function onSessionStart() {
        session.startTime = now();
        session.isAuthenticated = false;
    }
    
    // Request handling
    function onRequestStart(targetPage) {
        // CORS headers for React development
        if (cgi.server_name == "localhost") {
            header name="Access-Control-Allow-Origin" value="http://localhost:3000";
            header name="Access-Control-Allow-Credentials" value="true";
        }
        
        header name="Access-Control-Allow-Methods" value="GET,POST,PUT,DELETE,OPTIONS";
        header name="Access-Control-Allow-Headers" value="Content-Type,Authorization,X-Requested-With";
        
        // Handle preflight requests
        if (cgi.request_method == "OPTIONS") {
            abort;
        }
        
        // Set JSON content type for API endpoints
        if (findNoCase("/api/", targetPage)) {
            header name="Content-Type" value="application/json";
        }
    }
}`,
            tagCode: `<!-- Application.cfc - Complete configuration -->
<cfcomponent>
    <!--- Application settings --->
    <cfset this.name = "ReactCFApp_" & hash(getCurrentTemplatePath())>
    <cfset this.applicationTimeout = createTimeSpan(1, 0, 0, 0)>
    <cfset this.sessionManagement = true>
    <cfset this.sessionTimeout = createTimeSpan(0, 0, 30, 0)>
    <cfset this.setClientCookies = true>
    <cfset this.setDomainCookies = false>
    
    <!--- Security settings --->
    <cfset this.secureJSON = false>
    <cfset this.secureJSONPrefix = "">
    
    <!--- Mappings for components --->
    <cfset this.mappings = {}>
    <cfset this.mappings["/api"] = expandPath("./api")>
    <cfset this.mappings["/components"] = expandPath("./components")>
    <cfset this.mappings["/services"] = expandPath("./services")>
    
    <!--- Custom tag paths --->
    <cfset this.customTagPaths = [expandPath("./customtags")]>
    
    <!--- Error handling --->
    <cfset this.errorTemplate = "/error.cfm">
    <cfset this.missingTemplate = "/404.cfm">
    
    <!--- Application startup --->
    <cffunction name="onApplicationStart" returntype="boolean">
        <cfset application.startTime = now()>
        <cfset application.version = "1.0.0">
        
        <!--- Initialize application-wide services --->
        <cfset application.dataService = createObject("component", "components.DataService")>
        
        <cfreturn true>
    </cffunction>
    
    <!--- Session startup --->
    <cffunction name="onSessionStart" returntype="void">
        <cfset session.startTime = now()>
        <cfset session.isAuthenticated = false>
    </cffunction>
    
    <!--- Request handling --->
    <cffunction name="onRequestStart" returntype="boolean">
        <cfargument name="targetPage" type="string" required="true">
        
        <!--- CORS headers for React development --->
        <cfif cgi.server_name EQ "localhost">
            <cfheader name="Access-Control-Allow-Origin" value="http://localhost:3000">
            <cfheader name="Access-Control-Allow-Credentials" value="true">
        </cfif>
        
        <cfheader name="Access-Control-Allow-Methods" value="GET,POST,PUT,DELETE,OPTIONS">
        <cfheader name="Access-Control-Allow-Headers" value="Content-Type,Authorization,X-Requested-With">
        
        <!--- Handle preflight requests --->
        <cfif cgi.request_method EQ "OPTIONS">
            <cfabort>
        </cfif>
        
        <!--- Set JSON content type for API endpoints --->
        <cfif findNoCase("/api/", arguments.targetPage)>
            <cfheader name="Content-Type" value="application/json">
        </cfif>
        
        <cfreturn true>
    </cffunction>
    
</cfcomponent>`,
            templateCode: `<!-- Application.cfm - Template-based application settings -->
<cfapplication 
    name="ReactCFApp_#hash(getCurrentTemplatePath())#"
    applicationTimeout="#createTimeSpan(1, 0, 0, 0)#"
    sessionManagement="true"
    sessionTimeout="#createTimeSpan(0, 0, 30, 0)#"
    setClientCookies="true"
    setDomainCookies="false">

<!--- Application startup logic --->
<cfif NOT structKeyExists(application, "initialized")>
    <cfset application.startTime = now()>
    <cfset application.version = "1.0.0">
    <cfset application.initialized = true>
</cfif>

<!--- Session startup logic --->
<cfif NOT structKeyExists(session, "initialized")>
    <cfset session.startTime = now()>
    <cfset session.isAuthenticated = false>
    <cfset session.initialized = true>
</cfif>

<!--- CORS headers for React development --->
<cfif cgi.server_name EQ "localhost">
    <cfheader name="Access-Control-Allow-Origin" value="http://localhost:3000">
    <cfheader name="Access-Control-Allow-Credentials" value="true">
</cfif>

<cfheader name="Access-Control-Allow-Methods" value="GET,POST,PUT,DELETE,OPTIONS">
<cfheader name="Access-Control-Allow-Headers" value="Content-Type,Authorization,X-Requested-With">

<!--- Handle preflight requests --->
<cfif cgi.request_method EQ "OPTIONS">
    <cfabort>
</cfif>

<!--- Set JSON content type for API endpoints --->
<cfif findNoCase("/api/", cgi.script_name)>
    <cfheader name="Content-Type" value="application/json">
</cfif>`,
            language: 'javascript'
          }
        ]
      }
    ]
  },*/
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
  /*{
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
  },*/
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
  { id: 'real-world-patterns', title: 'Real-World Patterns' },
  { id: 'advanced', title: 'Advanced Patterns' }
];