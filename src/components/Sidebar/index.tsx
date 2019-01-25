import React from 'react';

import Branding from './Branding';
import Toolbar from './Toolbar';
import Navbar from './Navbar';
import Footer from './Footer';

import './Sidebar.module.scss';

interface SidebarProps {}

const Sidebar: React.SFC<SidebarProps> = () => (
  <aside>
    <Branding />
    <Toolbar />
    <Navbar />
    <Footer />
  </aside>
);

export default Sidebar;
