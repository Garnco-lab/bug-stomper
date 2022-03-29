import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { IBug } from "./IBug";

function App() {
  const [newBugDescription, setNewBugDescription] = useState<string>('');
  const [newBugPriority, setNewBugPriority] = useState<string>('medium');
  const [bugList, setBugList] = useState<IBug[]>([]);

  const addBug = () => {};
  const deleteBug = () => {};

  return (
  <div>
    <h1>Bug Tracker 🐛</h1>
  </div>
  );
}

export default App;
