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