// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';
// import SignupPage from './pages/SignupPage';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Switch>
//           <Route path="/login">
//             <LoginPage />
//           </Route>
//           <Route path="/signup">
//             <SignupPage />
//           </Route>
//           <Route path="/">
//             <h1>Welcome to our Website</h1>
//             {/* 여기에 메인 페이지의 컨텐츠를 추가하세요. */}
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our App</h1>
      </header>
      <main>
        <LoginPage />
        <SignupPage />
      </main>
    </div>
  );
}

export default App;

