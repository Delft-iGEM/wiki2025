import React, { useState } from 'react';
import { X } from 'lucide-react';

// Import all stakeholder MDX files
import ProfBrouns from '@/mdx/stakeholders/prof_brouns.mdx';
import FieldTestExperts from '@/mdx/stakeholders/field_test_experts.mdx';
import DrKoster from '@/mdx/stakeholders/dr_koster.mdx';
import DrVanOosten from '@/mdx/stakeholders/dr_van_oosten.mdx';
import RivmGmo from '@/mdx/stakeholders/rivm_gmo.mdx';
import JohannisFlorid from '@/mdx/stakeholders/johannis_florid.mdx';
import ElineKamerik from '@/mdx/stakeholders/eline_kamerik.mdx';
import ErikDeJonge from '@/mdx/stakeholders/erik_de_jonge.mdx';

// Mapping of path element IDs to their corresponding MDX content
const popoverContentMap: Record<string, React.FC> = {
  'prof_brouns': ProfBrouns,
  'field_test_experts': FieldTestExperts,
  'dr_koster': DrKoster,
  'dr_van_oosten': DrVanOosten,
  'rivm_gmo': RivmGmo,
  'johannis_florid': JohannisFlorid,
  'eline_kamerik': ElineKamerik,
  'erik_de_jonge': ErikDeJonge,
};

interface PopoverInteractiveProps {
  children: React.ReactElement;
}

export const PopoverInteractive: React.FC<PopoverInteractiveProps> = ({ children }) => {
  const [activePopover, setActivePopover] = useState<string | null>(null);

  const handleSvgClick = (e: React.MouseEvent<SVGElement>) => {
    const target = e.target as SVGElement;
    const pathElement = target.closest('path[id], g[id]');
    
    if (pathElement?.id && popoverContentMap[pathElement.id]) {
      e.stopPropagation();
      setActivePopover(pathElement.id);
    }
  };

  // Clone the SVG and add click handlers to path elements with IDs
  const enhancedChildren = React.cloneElement(children as React.ReactElement<{onClick?: (e: React.MouseEvent<SVGElement>) => void; style?: React.CSSProperties}>, {
    onClick: handleSvgClick,
    style: {
      ...(children.props as {style?: React.CSSProperties}).style,
      cursor: 'pointer',
    },
  });

  // Add hover effects to interactive paths
  React.useEffect(() => {
    const svg = document.querySelector('svg');
    if (!svg) return;

    const paths = svg.querySelectorAll('path[id], g[id]');
    paths.forEach((path) => {
      if (popoverContentMap[path.id]) {
        (path as SVGElement).style.cursor = 'pointer';
        (path as SVGElement).style.transition = 'opacity 0.2s';
        
        const handleMouseEnter = () => {
          (path as SVGElement).style.opacity = '0.7';
        };
        
        const handleMouseLeave = () => {
          (path as SVGElement).style.opacity = '1';
        };
        
        path.addEventListener('mouseenter', handleMouseEnter);
        path.addEventListener('mouseleave', handleMouseLeave);
        
        return () => {
          path.removeEventListener('mouseenter', handleMouseEnter);
          path.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    });
  }, []);

  const ContentComponent = activePopover ? popoverContentMap[activePopover] : null;

  return (
    <div className="relative w-full h-full">
      {enhancedChildren}
      
      {activePopover && ContentComponent && (
        <>
          {/* Overlay backdrop */}
          <button 
            className="fixed inset-0 bg-black/50 z-50 cursor-default"
            onClick={() => setActivePopover(null)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') setActivePopover(null);
            }}
            aria-label="Close overlay"
            type="button"
          />
          {/* Popover content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <div 
              className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto relative pointer-events-auto"
              role="dialog"
              aria-modal="true"
            >
              <button
                onClick={() => setActivePopover(null)}
                className="sticky top-0 right-0 float-right m-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors z-10"
                aria-label="Close popover"
                type="button"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="p-8 prose prose-lg dark:prose-invert max-w-none">
                <ContentComponent />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PopoverInteractive;
