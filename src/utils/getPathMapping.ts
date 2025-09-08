// Minimal type shapes to avoid circular imports; the full definitions will live in App after inlining.
interface BaseItem { name?: string; }
interface PageItem extends BaseItem { path?: string; title?: string; component?: React.FC; lead?: string }
interface FolderItem extends BaseItem { folder?: PageItem[] }
type NavItem = PageItem | FolderItem;

export const getPathMapping = (pages: NavItem[]) => {
  return pages.reduce<{
    [key: string]: {
      name: string | undefined;
      title: string | undefined;
      component: React.FC;
      lead: string | undefined;
    };
  }>((map, item) => {
    if ("path" in item && item.path && item.component) {
      map[item.path] = {
        name: item.name,
        title: item.title,
        component: item.component,
        lead: item.lead,
      };
    } else if ("folder" in item && item.folder) {
      item.folder.forEach((page: PageItem) => {
        if (page.path && page.component) {
          map[page.path] = {
            name: page.name,
            title: page.title,
            component: page.component,
            lead: page.lead,
          };
        }
      });
    }
    return map;
  }, {});
};
