export function getActiveKey(menuList: any, pathname: string): string {
  if (pathname === '/') return '/';
  let activeKey: string = '';
  menuList.forEach((item: any) => {
    if (
      item.activeKey !== '/' &&
      pathname.indexOf(item.activeKey.slice(1)) !== -1
    )
      activeKey = item.activeKey;
  });
  return activeKey;
}

export const localStorageHelper = {
  get(key: any) {
    const stored = localStorage.getItem(key);
    return stored == null ? undefined : JSON.parse(stored);
  },
  store(key: any, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove(key: any) {
    localStorage.removeItem(key);
  }
};

import React from 'react';
import { Button } from 'antd';

export const isImg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/;
export const getChildrenToRender = (item: any, i: any) => {
  let tag = item.name.indexOf('title') === 0 ? 'h1' : 'div';
  tag = item.href ? 'a' : tag;
  let children = typeof item.children === 'string' && item.children.match(isImg)
    ? React.createElement('img', { src: item.children, alt: 'img' })
    : item.children;
  if (item.name.indexOf('button') === 0 && typeof item.children === 'object') {
    children = React.createElement(Button, {
      ...item.children
    });
  }
  return React.createElement(tag, { key: i.toString(), ...item }, children);
};