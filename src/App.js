import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskDetails from './components/TaskDetails';


const App = () => {
    return (
        <div>
            <h1>My Task App</h1>
            
            <Router>
                <Routes>
                    <Route path="/" exact element={<TaskList />} />
                    <Route path="/api/tasks/create" element={<TaskForm />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;