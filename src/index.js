import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import 'animate.css';
import GifExpertApp from './GifExpertApp.js';

const root = createRoot(document.querySelector('#root'));

root.render(<GifExpertApp />);