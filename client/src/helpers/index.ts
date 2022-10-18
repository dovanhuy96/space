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