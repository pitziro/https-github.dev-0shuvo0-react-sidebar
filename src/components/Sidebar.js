import React from 'react';
import SidebarItem from './SidebarItem';
import items from '../data/sidebar.json';
import '../style.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
}
